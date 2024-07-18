(g => {
	var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window;
	b = b[c] || (b[c] = {});
	var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => {
		await (a = m.createElement("script"));
		e.set("libraries", [...r] + "");
		for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]);
		e.set("callback", c + ".maps." + q);
		a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
		d[q] = f;
		a.onerror = () => h = n(Error(p + " could not load."));
		a.nonce = m.querySelector("script[nonce]")?.nonce || "";
		m.head.append(a)
	}));
	d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n))
})({
	key: "AIzaSyCwRlYsm_3KSv8r8or-DLKZV8f3rDWdLpo",
	// Add other bootstrap parameters as needed, using camel case.
	// Use the 'v' parameter to indicate the version to load (alpha, beta, weekly, etc.)
});

import SitesCompetition from "./views/SitesCompetition.js";

let map;

export async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    const siteInfos = await SitesCompetition();

    function generateMarkers(siteInfos, map) {
        siteInfos.forEach(site => {
            if (site.latitude && site.longitude) {
                new AdvancedMarkerElement({
                    map: map,
                    position: { lat: site.latitude, lng: site.longitude },
                    title: site.location
                });
            }
        });
    }

    function generateLogicalBestSpots(siteInfos, map) {
        const createRandomPointInRadius = (lat, lng, radius) => {
            const getRandomOffset = (max) => (Math.random() - 0.5) * max;

            const latOffset = getRandomOffset(radius / 111);
            const lngOffset = getRandomOffset(radius / (111 * Math.cos(lat * Math.PI / 180)));

            return { lat: lat + latOffset, lng: lng + lngOffset };
        };

        const radiusInKm = 0.5;

        siteInfos.forEach(site => {
            if (site.latitude && site.longitude) {
                for (let i = 0; i < 3; i++) {
                    const randomPoint = createRandomPointInRadius(site.latitude, site.longitude, radiusInKm);
                    new google.maps.Marker({
                        map: map,
                        position: { lat: randomPoint.lat, lng: randomPoint.lng },
                        title: "Best Spot",
                        icon: {
                            url: '../img/Best_pin_point.svg',
                            scaledSize: new google.maps.Size(24, 24)
                        }
                    });
                }
            }
        });
    }

    const zoom = 6;
    const center = { lat: 47.700000, lng: 2.633333 }
    const bounds = {
        north: center.lat + 6,
        south: center.lat - 6,
        east: center.lng + 10,
        west: center.lng - 10,
    };
    map = new Map(document.getElementById("map"), {
        center: center,
        zoom: zoom,
        minZoom: zoom - 1,
        maxZoom: zoom + 10,
        restriction: {
            latLngBounds: bounds,
            strictBounds: false
        },
        mapId: "f1e6188476cdfda9",
        streetViewControl: false
    });

    generateMarkers(siteInfos, map);
    generateLogicalBestSpots(siteInfos, map);

    // Afficher la pop-up après le chargement de la carte
    await showNearestEventPopUp();
}

async function showNearestEventPopUp() {
    const nearestEvent = await getNearestEvent();

    const popUp = document.createElement("div");
    popUp.classList.add("event-pop-up");
    popUp.innerHTML = `
        <h2>Événement à venir le plus proche</h2>
        <p><strong>Lieu:</strong> ${nearestEvent.location}</p>
        <p><strong>Date de début:</strong> ${new Date(nearestEvent.starting_date).toLocaleString()}</p>
        <button id="close-pop-up">Fermer</button>
    `;
    document.body.appendChild(popUp);

    document.getElementById("close-pop-up").addEventListener("click", () => {
        document.body.removeChild(popUp);
    });
}

async function getNearestEvent() {
    const siteInfos = await SitesCompetition();
    const currentDate = new Date();

    // Filtrer les événements futurs et les trier par date
    const futureEvents = siteInfos.filter(event => new Date(event.starting_date) >= currentDate);
    futureEvents.sort((a, b) => new Date(a.starting_date) - new Date(b.starting_date));

    return futureEvents[0]; // L'événement le plus proche
}

window.initMap = initMap;


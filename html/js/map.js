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
});

import SitesCompetition from "./views/SitesCompetition.js";
import generateSeineRiverPath from './components/River.js';
import addGeolocationButton from './components/GeolocationButton.js';
import generateLogicalBestSpots from './components/BestSpots.js';


let map;

export async function initMap() {
	const { Map } = await google.maps.importLibrary("maps");
	const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

	// Fetch siteInfos from SitesCompetition
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
	generateSeineRiverPath(map);
	addGeolocationButton(map);
}

window.initMap = initMap;

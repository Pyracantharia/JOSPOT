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

let map, infoWindow;

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

	const zoom = 15;
	const center = { lat: 48.863778, lng: 2.316556 };

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


	// Adding the path of the seine river
	const flightPlanCoordinates = [
		// 48.828937, 2.385970
		{ lat: 48.828937, lng: 2.385970},
		

		// 48.837095, 2.375878
		{ lat: 48.837095, lng: 2.375878},
		// 48.844215, 2.367003
		{ lat: 48.844215, lng: 2.367003},
		// 48.848395, 2.361080
		{ lat: 48.848395, lng: 2.361080},
		// 48.851713, 2.360394
		{ lat: 48.851713, lng: 2.360394},
		// 48.851713, 2.360394
		{ lat: 48.851713, lng: 2.360394},
		// 48.855210, 2.350957
		{ lat: 48.855210, lng: 2.350957},
		// 48.855466, 2.350537
		{ lat: 48.855466, lng: 2.350537},

		// 48.856641, 2.346702
		{ lat: 48.856641, lng: 2.346702},
		// 48.857782, 2.342001
		{ lat: 48.857782, lng: 2.342001},
		// 48.857897, 2.339111
		{ lat: 48.857897, lng: 2.339111},
		{ lat: 48.858000, lng: 2.338417 },
		{ lat: 48.858366, lng: 2.336693 },
		{ lat: 48.859253, lng: 2.332791 },
		{ lat: 48.860065, lng: 2.329855 },
		{ lat: 48.861772, lng: 2.324701 },
		{ lat: 48.863222, lng: 2.319889 },
		{ lat: 48.863750, lng: 2.318333 },
		{ lat: 48.863778, lng: 2.316556 },
		{ lat: 48.863556, lng: 2.302278 },
		{ lat: 48.862611, lng: 2.296917 },
		{ lat: 48.861694, lng: 2.294361 },
		{ lat: 48.856083, lng: 2.288056 },

	  ];
	
	  const colors = ["#0000FF", "#000000", "#FF0000", "#FFFF00", "#008000"]; // Olympic colors: blue, black, red, yellow, green
	
	  for (let i = 0; i < flightPlanCoordinates.length - 1; i++) {
		const flightSegment = new google.maps.Polyline({
		  path: [flightPlanCoordinates[i], flightPlanCoordinates[i + 1]],
		  geodesic: true,
		  strokeColor: colors[i % colors.length],
		  strokeOpacity: 1.0,
		  strokeWeight: 10
		});
	
		flightSegment.setMap(map);
	  }
  }
  
  
//   48°51'28.8"N 2°20'18.3"E
//   48.858000, 2.338417


// 48°51'47.6"N 2°19'11.6"E
// 48.863222, 2.319889


// 48°51'49.5"N 2°19'06.0"E
// 48.863750, 2.318333


// 48°51'49.6"N 2°18'59.6"E
// 48.863778, 2.316556

	// Add Geolocation Button
	infoWindow = new google.maps.InfoWindow();
	const locationButton = document.createElement("button");

	locationButton.textContent = "Se localiser";
	locationButton.classList.add("custom-map-control-button");
	map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
	locationButton.addEventListener("click", () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const pos = {
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					};

					infoWindow.setPosition(pos);
					infoWindow.setContent("Vous êtes ici.");
					infoWindow.open(map);
					map.setCenter(pos);
				},
				() => {
					handleLocationError(true, infoWindow, map.getCenter());
				}
			);
		} else {
			handleLocationError(false, infoWindow, map.getCenter());
		}
	});
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(
		browserHasGeolocation
			? "Error: Le service de géolocalisation a échoué."
			: "Error: Votre navigateur ne prend pas en charge la géolocalisation.",
	);
	infoWindow.open(map);
}

window.initMap = initMap;

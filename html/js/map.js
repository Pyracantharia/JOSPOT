import "./core/googleMapAPI.js";

import events from "./data/Events.js";
// import showNearestEventPopUp from "./components/Pop.js"; // ! crée une bande blanche qui décale la map vers le haut !
import generateSeineRiverPath from './components/River.js';
import addGeolocationButton from './components/GeolocationButton.js';
// import generateLogicalBestSpots from './components/BestSpots.js';
import generateMarkers from './components/generateMarkers.js'; // Import the new file


let map;

export async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // Fetch siteInfos from SitesCompetition
    const allEvents = await events();
    // console.log(allEvents);
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
        streetViewControl: false,
        mapTypeControl: false
    });

    generateMarkers(allEvents, map, AdvancedMarkerElement); // Pass AdvancedMarkerElement as a parameter
    // generateLogicalBestSpots(allEvents, map);
    generateSeineRiverPath(map);
    addGeolocationButton(map);
    // await showNearestEventPopUp();
}

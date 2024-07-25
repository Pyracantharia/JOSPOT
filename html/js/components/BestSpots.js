/*export default function generateLogicalBestSpots(events, map) {
    const createRandomPointInRadius = (lat, lng, radius) => {
        const getRandomOffset = (max) => (Math.random() - 0.5) * max;

        const latOffset = getRandomOffset(radius / 111);
        const lngOffset = getRandomOffset(radius / (111 * Math.cos(lat * Math.PI / 180)));

        return { lat: lat + latOffset, lng: lng + lngOffset };
    };

    const radiusInKm = 0.5;

    events.forEach(event => {
        if (event.latitude && event.longitude) {
            for (let i = 0; i < 3; i++) {
                const randomPoint = createRandomPointInRadius(event.latitude, event.longitude, radiusInKm);
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
}*/

export default function generateSingleLogicalBestSpots(map, lng, lat) {
    const createRandomPointInRadius = (lat, lng, radius) => {
        const getRandomOffset = (max) => (Math.random() - 0.5) * max;

        const latOffset = getRandomOffset(radius / 111);
        const lngOffset = getRandomOffset(radius / (111 * Math.cos(lat * Math.PI / 180)));

        return { lat: lat + latOffset, lng: lng + lngOffset };
    };

    const radiusInKm = 0.5;
    let markers = [];

    // Vérifier si les marqueurs pour ces coordonnées existent déjà dans la session storage
    const storedMarkers = sessionStorage.getItem(`singleLogicalBestSpotsMarkers_${lng}_${lat}`);
    if (storedMarkers) {
        // Si les marqueurs existent, les récupérer et les afficher sur la carte
        const parsedMarkers = JSON.parse(storedMarkers);
        parsedMarkers.forEach(storedMarker => {
            const marker = new google.maps.Marker({
                map: map,
                position: { lat: storedMarker.lat, lng: storedMarker.lng },
                title: "Best Spot",
                icon: {
                    url: '../img/Best_pin_point.svg',
                    scaledSize: new google.maps.Size(24, 24)
                }
            });
            markers.push({
                lat: storedMarker.lat,
                lng: storedMarker.lng,
                marker: marker
            });
        });
    } else {
        // Sinon, générer de nouveaux points aléatoires autour du point d'origine
        for (let i = 0; i < 3; i++) {
            const randomPoint = createRandomPointInRadius(lat, lng, radiusInKm);
            const marker = new google.maps.Marker({
                map: map,
                position: { lat: randomPoint.lat, lng: randomPoint.lng },
                title: "Best Spot",
                icon: {
                    url: '../img/Best_pin_point.svg',
                    scaledSize: new google.maps.Size(24, 24)
                }
            });
            markers.push({
                lat: randomPoint.lat,
                lng: randomPoint.lng,
                marker: marker
            });
        }
        // Stocker les nouveaux marqueurs dans la session storage
        sessionStorage.setItem(`singleLogicalBestSpotsMarkers_${lng}_${lat}`, JSON.stringify(markers.map(m => ({ lat: m.lat, lng: m.lng }))));
    }

    // Stocker les marqueurs actuels dans une variable globale (facultatif, selon vos besoins)
    window.singleLogicalBestSpotsMarkers = markers.map(m => m.marker);
}

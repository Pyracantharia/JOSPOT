export default function generateLogicalBestSpots(events, map) {
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
}
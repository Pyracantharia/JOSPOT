export default function generateMarkers(events, map, AdvancedMarkerElement) {
    events.forEach(event => {
        if (event.latitude && event.longitude) {
            new AdvancedMarkerElement({
                map: map,
                position: { lat: event.latitude, lng: event.longitude },
                title: event.location
            });
        }
    });
}

export default function generateSeineRiverPath(map) {
    const flightPlanCoordinates = [
        { lat: 48.828937, lng: 2.385970 },
        { lat: 48.837095, lng: 2.375878 },
        { lat: 48.844215, lng: 2.367003 },
        { lat: 48.848395, lng: 2.361080 },
        { lat: 48.851713, lng: 2.360394 },
        { lat: 48.851713, lng: 2.360394 },
        { lat: 48.855210, lng: 2.350957 },
        { lat: 48.855466, lng: 2.350537 },
        { lat: 48.856641, lng: 2.346702 },
        { lat: 48.857782, lng: 2.342001 },
        { lat: 48.857897, lng: 2.339111 },
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
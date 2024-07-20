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

    // Fonction pour interpoler entre deux couleurs RGB
    function interpolateColor(color1, color2, factor) {
        const result = color1.slice();
        for (let i = 0; i < 3; i++) {
            result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
        }
        return result;
    }

    // Convertir une couleur RGB en tableau
    function rgbToArray(rgb) {
        return rgb.match(/\d+/g).map(Number);
    }

    // Convertir un tableau en couleur RGB
    function arrayToRgb(arr) {
        return `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
    }

    // Définir les couleurs du gradient avec leurs positions respectives (de 0 à 1)
    const gradientColors = [
        { color: rgbToArray("rgb(2, 128, 199)"), position: 0 },
        { color: rgbToArray("rgb(252, 176, 48)"), position: 0.2 },
        { color: rgbToArray("rgb(1, 1, 1)"), position: 0.4 },
        { color: rgbToArray("rgb(2, 166, 80)"), position: 0.6 },
        { color: rgbToArray("rgb(238, 51, 76)"), position: 0.8 },
        { color: rgbToArray("rgb(238, 51, 76)"), position: 1 } // ajouter la dernière couleur pour couvrir 100%
    ];

    // Fonction pour trouver les couleurs adjacentes et interpoler entre elles
    function getInterpolatedColor(position) {
        for (let i = 0; i < gradientColors.length - 1; i++) {
            if (position >= gradientColors[i].position && position <= gradientColors[i + 1].position) {
                const factor = (position - gradientColors[i].position) / (gradientColors[i + 1].position - gradientColors[i].position);
                return interpolateColor(gradientColors[i].color, gradientColors[i + 1].color, factor);
            }
        }
        return gradientColors[gradientColors.length - 1].color;
    }

    // Itérer sur les coordonnées des segments de vol
    for (let i = 0; i < flightPlanCoordinates.length - 1; i++) {
        // Calculer la position sur le gradient
        const position = i / (flightPlanCoordinates.length - 1);
        const interpolatedColor = getInterpolatedColor(position);

        const flightSegment = new google.maps.Polyline({
            path: [flightPlanCoordinates[i], flightPlanCoordinates[i + 1]],
            geodesic: true,
            strokeColor: arrayToRgb(interpolatedColor),
            strokeOpacity: 1.0,
            strokeWeight: 10
        });

        flightSegment.setMap(map);
    }

}
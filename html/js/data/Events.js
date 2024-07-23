export default async function events() { // fonction "officielle" pour récupérer les épruves et leur emplacement
    const apiUrl = 'https://data.paris2024.org/api/explore/v2.1/catalog/datasets/paris-2024-sites-de-competition/records?limit=5';

    const response = await fetch(apiUrl);
    const data = await response.json();
    const results = await Promise.all(data.results.map(async (element) => {
        const longitude = element.point_geo ? element.point_geo.lon : null;
        const latitude = element.point_geo ? element.point_geo.lat : null;

        // Get address from geo points
        let address = 'N/A';
        if (latitude && longitude) {
            address = await getAddressFromCode(latitude, longitude);
        }

        return {
            longitude: longitude,
            latitude: latitude,
            longitude_string: element.longitude, // à utiliser pour convertir les coordonnées en adresse
            latitude_string: element.latitude, // à utiliser pour convertir les coordonnées en adresse
            category_id: element.category_id,
            sports: element.sports,
            site_name: element.nom_site,//endroit, lieux
            start_date: element.start_date,
            end_date: element.end_date,
            hour: Math.floor(Math.random() * 12) + 8 + ':' + Math.floor(Math.random() * 60),
            address: address,  // Add the obtained address
        };
    }));

    return results;

}

async function getAddressFromCode(lat, lng){
    const key = "OiPh0PA2etnlBhEAkYXtyuBQTuvOdY6ddwERwBfb31MYiGSGwK7PUVmtdsYH9L4K";
    const url = `https://api.distancematrix.ai/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}`;

    const response = await fetch(url);
    const data = await response.json();
    if (data.result && data.result.length > 0) {
        return data.result[0].formatted_address;
    } else {
        return 'Address not found';
    }
}
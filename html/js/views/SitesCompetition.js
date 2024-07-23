export default function SitesCompetition() {
  const apiUrl = 'https://data.paris2024.org/api/explore/v2.1/catalog/datasets/games_map_events_fr/exports/json';
  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      return data.slice(0, 15).map(result => {
        return {
          longitude: result.geolocation ? result.geolocation.lon : null,
          starting_date : result.starting_date,
          hour : result.starting_date.split("T")[1].split("+")[0].slice(0, -3),
          ending_date : result.ending_date,
          latitude: result.geolocation ? result.geolocation.lat : null,
          location: result.location,
          organization_name : result.organization_name,
          title :result.title
        };
        
      });
    })
    .catch(error => {
      console.error('Error fetching site information:', error);
      return [];
    });
}

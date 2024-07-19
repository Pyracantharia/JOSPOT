export default async function allEvents() {
  const apiUrl = 'https://data.paris2024.org/api/explore/v2.1/catalog/datasets/games_map_events_fr/exports/json';
  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      return data.slice(0, 15).map(result => {
        return {
          longitude: result.geolocation ? result.geolocation.lon : null,
          starting_date : result.starting_date,
          ending_date : result.ending_date,
          latitude: result.geolocation ? result.geolocation.lat : null,
          location: result.location,
          title: result.title,
          address: result.address,
          photo_link: result.photo_link
        };
        
      });
    })
    .catch(error => {
      console.error('Error fetching site information:', error);
      return [];
    });
}
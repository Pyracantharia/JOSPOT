import allDetails from '../data/Details.js';

//  Fonction pour récupérer les épreuves pour un site donné
export default async function getEventsForSite(siteName) {
    try {
        // recupère toutes les épreuves
        const allEvents = await allDetails();

        // filtre les épreuves en fonction du site
        const filteredEvents = allEvents.filter(event => event.venueDescription === siteName);

        // retourne les épreuves filtrées
        return filteredEvents;
    } catch (error) {
        console.error("Error fetching events:", error);
        return [];
    }
}

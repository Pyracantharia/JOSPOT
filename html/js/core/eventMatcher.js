import allDetails from '../data/Details.js';

//  Fonction pour récupérer les épreuves pour un site donné
export default async function getEventsForSite(siteName) {
    try {
        // recupère toutes les épreuves
        const allEvents = await allDetails();

        // récupère la date actuelle
        const currentDate = new Date();

        // filtre les épreuves en fonction du site
        const filteredEvents = allEvents.filter(event => {
            const eventStartDate = new Date(event.startDate);
            return event.venueDescription === siteName && eventStartDate > currentDate;
        });

        // retourne les épreuves filtrées
        return filteredEvents;
    } catch (error) {
        console.error("Error fetching events:", error);
        return [];
    }
}

import events from "../data/Events.js";

export default async function showNearestEventPopUp() {
    const nearestEvent = await getNearestEvent();

    const popUp = document.createElement("div");
    popUp.classList.add("event-pop-up");
    popUp.innerHTML = `
        <h2>Événement à venir le plus proche</h2>
        <p><strong>Lieu:</strong> ${nearestEvent.site_name}</p>
        <p><strong>Date de début:</strong> ${new Date(nearestEvent.start_date).toLocaleString()}</p>
        <button id="close-pop-up">Fermer</button>
    `;
    document.body.appendChild(popUp);

    document.getElementById("close-pop-up").addEventListener("click", () => {
        document.body.removeChild(popUp);
    });
}


async function getNearestEvent() {
    const allEvents = await events();
    const currentDate = new Date();

    // Filtrer les événements futurs et les trier par date
    const futureEvents = allEvents.filter(event => new Date(event.start_date) >= currentDate);
    futureEvents.sort((a, b) => new Date(a.start_date) - new Date(b.start_date));

    return futureEvents[0]; // L'événement le plus proche
}
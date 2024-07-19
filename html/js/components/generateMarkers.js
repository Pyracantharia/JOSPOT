import getCustomInfoWindow from "../core/CustomInfoWindow.js";
import Info from "../core/Info.js";

async function attachInfo(marker, event){
    const CustomInfoWindow = await getCustomInfoWindow();
    const div = Info.getDiv(event.title, event.address, event.photo_link);
    const customInfoWindow = new CustomInfoWindow(div);

    marker.addListener("click", () => {
        customInfoWindow.close();
        customInfoWindow.open(marker.map, marker);
    });
}

export default function generateMarkers(events, map, AdvancedMarkerElement) {
    events.forEach(event => {
        if (event.latitude && event.longitude) {
            const marker = new AdvancedMarkerElement({
                map: map,
                position: { lat: event.latitude, lng: event.longitude },
                title: event.location
            });

            attachInfo(marker, event)
        }

        
    });
}

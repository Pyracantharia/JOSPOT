// import getCustomInfoWindow from "../core/CustomInfoWindow.js";
import generateStructure from "../core/generateStructure.js";
// import Info from "../core/Info.js";
import CustomInfoWindowComponent from "../viewsComponents/Map/CustomInfoWindowComponent.js";

async function attachInfo(marker, event, updateSelectedEvent, infoWindow , map){
    // const CustomInfoWindow = await getCustomInfoWindow();
    // const div = Info.getDiv(event.sports, event.address, "img/basket.jpg");
    // const customInfoWindow = new CustomInfoWindow(div);

    marker.addListener("click", () => {
        const customInfoWindow = new CustomInfoWindowComponent({
            sports: event.sports,
            address: event.address,
            hour: event.hour,
            img: "img/basket.jpg",
            event: event,
            onClick: updateSelectedEvent,
            map : map,
            test : "caca"
        })

        const infoWindowElement = generateStructure(customInfoWindow.render());
        infoWindow.setContent(infoWindowElement);
        infoWindow.open(marker.map, marker);

        //update the selected event in Homepage's
        // updateSelectedEvent(event);
    });
}

export default function generateMarkers(events, map, AdvancedMarkerElement, updateSelectedEvent) {
    const infoWindow = new google.maps.InfoWindow();
    events.forEach(event => {
        if (event.latitude && event.longitude) {
            const marker = new AdvancedMarkerElement({
                map: map,
                position: { lat: event.latitude, lng: event.longitude },
                title: JSON.stringify({ sports: event.sports, site_name: event.site_name }),

            });

            attachInfo(marker, event, updateSelectedEvent, infoWindow, map);
        }
    });
}

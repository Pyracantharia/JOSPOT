import "./googleMapAPI.js";
import  generateSingleLogicalBestSpots from "../components/BestSpots.js";

export default async function getCustomInfoWindow(){
    await google.maps.OverlayView;

    class CustomInfoWindow extends google.maps.OverlayView {
        constructor(content){
            super();
            this.marker = null;
            this.map = null;
            this.content = content;
            this.div = null;
        }

        onAdd(){
            this.div = document.createElement('div');
            this.div.style.position = 'absolute';
            this.div.style.cursor = "pointer";
            this.div.innerHTML = this.content;

            const closeButton = this.div.querySelector('.close-icon');
            
            const panes = this.getPanes();
            panes.floatPane.appendChild(this.div);
            closeButton.addEventListener("click", () => {
                this.close();
            });

            const LogButton = this.div.querySelector('#log-button');
            
            // supprimer les bestpot generer precedement



            LogButton.addEventListener("click", () => {
                const lat = this.marker.position.Fg 
                const lng = this.marker.position.Gg
                console.log("lat: ", lat, "lng: ", lng);
                generateSingleLogicalBestSpots(this.map, lng , lat);
              
                // generer un sidebar
                // si on clique la sidebar s'affiche
            });
        }

        draw(){
            if (this.marker) {
                let position;
                if (this.marker.getPosition) {
                    position = this.marker.getPosition();
                } else if (this.marker.position) {
                    position = this.marker.position;
                }

                if (position) {
                    const overlayProjection = this.getProjection();
                    const point = overlayProjection.fromLatLngToDivPixel(position);
                    const popupHeight = this.div.offsetHeight;
                    const popupWidth = this.div.offsetWidth;
                    this.div.style.left = `${point.x - popupWidth / 2}px`;
                    this.div.style.top = `${point.y - popupHeight}px`;
                }
            }
        }

        onRemove(){
            if (this.div) {
                this.div.parentNode.removeChild(this.div);
            }
        }

        open(map, marker) {
            if (marker && (marker.getPosition || marker.position)) {
                this.map = map;
                this.marker = marker;
                this.setMap(map);
            } else {
                console.error("Invalid marker:", marker);
            }
        }

        close(){
            this.setMap(null);
        }
    }

    return CustomInfoWindow;
}
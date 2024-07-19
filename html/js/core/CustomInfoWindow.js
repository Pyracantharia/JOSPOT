import "./googleMapAPI.js";


export default async function getCustomInfoWindow(){
    await google.maps.OverlayView;

    class CustomInfoWindow extends google.maps.OverlayView {
        constructor(div = null){
            super();
            this.marker = null;
            this.map = null;
            this.div = div;
        }
    
        onAdd(){
            const div = this.div
            const panes = this.getPanes();
            panes.floatPane.appendChild(div);
            // const closeButton = div.querySelector('.custom-info-window-close');
            // if (closeButton) {
            //     closeButton.addEventListener('click', () => {
            //         this.close();
            //     });
            // }
            div.addEventListener("close", () => {
                this.close();
            })
        };
    
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
                    const div = this.div;
                    div.style.left = point.x + 'px';
                    div.style.top = point.y + 'px';
                }
            }
        };
    
        onRemove(){
            if (this.div) {
                this.div.parentNode.removeChild(this.div);
            }
        };
    
        open(map, marker) {
            if (marker && (marker.getPosition || marker.position)) {
                this.map = map;
                this.marker = marker;
                this.setMap(map);
            } else {
                console.error("Invalid marker:", marker);
            }
        };
    
        close(){
            this.setMap(null);
        };
    }
    
    return CustomInfoWindow;
}
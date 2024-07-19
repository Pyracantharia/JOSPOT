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
            const panes = this.getPanes();
            panes.floatPane.appendChild(this.div);
            this.div.addEventListener("close", () => {
                this.close();
            });
            // this.draw();
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
                    this.div.style.left = point.x + 'px';
                    this.div.style.top = point.y + 'px';
                    console.log(`info.x = ${this.div.style.left} | info.y = ${this.div.style.top}`)
                    this.div.style.transform = 'translate(-50%, -100%)';  // Center the info window above the marker
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
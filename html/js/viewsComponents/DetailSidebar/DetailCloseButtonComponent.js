import Component from "../../core/Component.js";

export default class DetailCloseButtonComponent extends Component {
    constructor(props) {
        super(props);
        this.removeSingleLogicalBestSpots = this.removeSingleLogicalBestSpots.bind(this);
    }

    removeSingleLogicalBestSpots() {
        if (window.singleLogicalBestSpotsMarkers) {
            window.singleLogicalBestSpotsMarkers.forEach(marker => marker.setMap(null));
            window.singleLogicalBestSpotsMarkers = [];
            sessionStorage.removeItem('singleLogicalBestSpotsMarkers');
        }
        console.log("les best markers ont été supprimés");
    }

    render() {
        return {
            tag: "div",
            attributes: {
                class: "absolute top-0 left-0".split(" "),
            },
            events: {
                click: (event) => {
                    const parentElement = event.currentTarget.parentElement;
                    if (parentElement) {
                        parentElement.classList.toggle("hidden");
                    }
                    // Remove the markers from the map
                    this.removeSingleLogicalBestSpots();
                }
            },
            children: [
                { //close-icon container
                    tag: "div",
                    attributes: {
                        class: "w-6 h-6".split(" ")
                    },
                    children: [
                        {
                            tag: "img",
                            attributes: {
                                src: "img/close_icon.svg"
                            }
                        }
                    ]
                }
            ]
        };
    }
}

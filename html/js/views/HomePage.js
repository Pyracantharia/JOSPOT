import Component from "../core/Component.js";
import DetailSidebarComponent from "../viewsComponents/DetailSidebar/DetailSidebarComponent.js";
import MapComponent from "../viewsComponents/Map/MapComponent.js";
import SidebarComponent from "../viewsComponents/Sidebar/SidebarComponent.js";

class HomePage extends Component {
  //trouver un moyen de passer les props entre les différents composants ici
  constructor(props){
    super(props);
    this.state = {
      selectedEvent: null
    };
    this.childComponents = {};
  }

  updateSelectedEvent = (event) => {
    this.setState({ selectedEvent: event }, () => {
      const detailSidebar = this.childComponents.detailSidebar;
      if (detailSidebar) {
        detailSidebar.setProps({ selectedEvent: event });
      }
    });
  }

  render() {
    const mapComponent = new MapComponent({
      updateSelectedEvent: this.updateSelectedEvent
    });

    const sidebarComponent = new SidebarComponent();

    const detailSidebarComponent = new DetailSidebarComponent({
      selectedEvent: this.state.selectedEvent
    });

    this.childComponents = {
      map: mapComponent,
      sidebar: sidebarComponent,
      detailSidebar: detailSidebarComponent
    };
    return {
      tag: "div",
      attributes: {
        class: "wrapper w-screen h-screen relative".split(' ')
      },
      children: [
        mapComponent,
        sidebarComponent,
        detailSidebarComponent
      ]
    };
  }
}

export default HomePage;

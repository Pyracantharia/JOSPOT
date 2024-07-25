import Component from "../core/Component.js";
import DetailSidebarComponent from "../viewsComponents/DetailSidebar/DetailSidebarComponent.js";
import MapComponent from "../viewsComponents/Map/MapComponent.js";
import SidebarComponent from "../viewsComponents/Sidebar/SidebarComponent.js";

class HomePage extends Component {
  //trouver un moyen de passer les props entre les différents composants ici
  render() {
    return {
      tag: "div",
      attributes: {
        class: "wrapper w-screen h-screen relative".split(' ')
      },
      children: [
        new MapComponent(),
        new SidebarComponent(),
        new DetailSidebarComponent()
      ]
    };
  }
}

export default HomePage;

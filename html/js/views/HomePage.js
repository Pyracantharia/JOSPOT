import Component from "../core/Component.js";
import MapComponent from "../viewsComponents/MapComponent.js";
import SidebarComponent from "../viewsComponents/SidebarComponent.js";

class HomePage extends Component {
  render() {
    return {
      tag: "div",
      attributes: {
        class: "wrapper w-screen h-screen relative".split(' ')
      },
      children: [
        new MapComponent().render(),
        new SidebarComponent().render()
      ]
    };
  }
}

export default HomePage;

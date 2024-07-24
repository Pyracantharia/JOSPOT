import Component from "../core/Component.js";

export default class BurgerMenuDesktopComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return {
            // burger menu desktop
            tag: "div",
            attributes: {
              id: "burger-menu-desktop",
              class: "hidden w-12 h-12 absolute top-[-20%] right-[30px] sm:flex justify-center items-center bg-white rounded-full p-3 sm:top-[20px] sm:right-[-70px]".split(' ')
            },
            events: {
              click: function () {
                const eventTogglerDesktop = this.children[0];
                const spanElements = eventTogglerDesktop.children;

                for (const span of spanElements) {
                  span.classList.toggle("touch-active");
                }
                const parentNode = this.parentNode;
                const toggleDesktopEvent = new CustomEvent("toggleDesktop");
                parentNode.dispatchEvent(toggleDesktopEvent);
              }
            },
            children: [
              {
                tag: "div",
                attributes: {
                  id: "event-toggler-desktop",
                  class: "relative w-[30px] h-[12px]".split(' ')
                },
                children: [
                  {
                    tag: "span",
                    attributes: {
                      class: "stripe w-full h-[2px] rounded-full bg-gray-500 transition-all absolute top-0".split(' ')
                    }
                  },
                  {
                    tag: "span",
                    attributes: {
                      class: "stripe w-full h-[2px] rounded-full bg-gray-500 transition-all absolute top-1/2".split(' ')
                    }
                  },
                  {
                    tag: "span",
                    attributes: {
                      class: "stripe w-full h-[2px] rounded-full bg-gray-500 transition-all absolute top-full".split(' ')
                    }
                  }
                ]
              }
            ]
          }
    }
}
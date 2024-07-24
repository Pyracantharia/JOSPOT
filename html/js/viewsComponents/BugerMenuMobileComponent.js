import Component from "../core/Component.js";

export default class BurgerMenuMobileComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return {
            // burger menu mobile
            tag: "div",
            attributes: {
              id: "burger-menu-mobile",
              class: "w-12 h-12 absolute top-[-20%] right-[30px] flex justify-center items-center bg-white rounded-full p-3 sm:hidden".split(' ')
            },
            events: {
              click: function () {
                const eventTogglerMobile = this.children[0];
                const spanElements = eventTogglerMobile.children;

                for (const span of spanElements) {
                  span.classList.toggle("touch-active");
                }
                const parentNode = this.parentNode;
                const toggleMobileEvent = new CustomEvent("toggleMobile");
                parentNode.dispatchEvent(toggleMobileEvent);
              }
            },
            children: [
              {
                tag: "div",
                attributes: {
                  id: "event-toggler-mobile",
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
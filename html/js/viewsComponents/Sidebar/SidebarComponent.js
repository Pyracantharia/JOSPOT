import Component from "../../core/Component.js";
import EventItemComponent from "./EventItemComponent.js";
import events from "../../data/Events.js";
import BurgerMenuMobileComponent from "./BugerMenuMobileComponent.js";
import BurgerMenuDesktopComponent from "./BurgerMenuDesktopComponent.js";
import SearchbarComponent from "./SearchbarComponent.js";
import FilterComponent from "./FilterComponent.js";
const Allevents = await events();

export default class SidebarComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const elementsArray = [];
        Allevents.forEach(event => {
            
            const obj = new EventItemComponent({
              sports: event.sports,
              hour: event.hour,
              address: event.address,
              site_name: event.site_name,
              starting_date: event.starting_date
              });
                
            elementsArray.push(obj)
            
        });

        return {
            // event section
            tag: "section",
            attributes: {
              id: "events-section",
              class: "absolute bottom-0 bg-white w-full p-3 transition-all sm:top-0 sm:translate-y-0 sm:left-0 sm:w-fit sm:translate-x-[-100%] translate-y-[100%]".split(' ')
            },
            events: {
              toggleMobile: function () {
                this.classList.toggle("translate-y-[100%]");
              },
              toggleDesktop: function () {
                this.classList.toggle("sm:translate-x-[-100%]");
              }
            },
            children: [
              new BurgerMenuMobileComponent().render(),
              new BurgerMenuDesktopComponent().render(),
              {
                // H2: tout les évènements
                tag: "h2",
                attributes: {
                  class: "font-medium text-[18px] text-center mb-5 sm:my-6".split(' ')
                },
                children: "Tout les évènements"
              },
              {
                // events head
                tag: "div",
                attributes: {
                  class: "events-head flex justify-around items-center mb-5".split(' ')
                },
                children: [
                  new SearchbarComponent().render(),
                  new FilterComponent().render()
                ]
              },
              {
                // event list
                tag: "div",
                attributes: {
                  class: "events-container h-[400px] flex flex-col items-center gap-5 overflow-y-auto sm:relative sm:h-[650px] scrollbar-thin".split(' ')
                },
                children: elementsArray
              }
            ]
          }
    }
}
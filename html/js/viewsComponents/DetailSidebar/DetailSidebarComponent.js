import Component from "../../core/Component.js";
import DetailCloseButtonComponent from "./DetailCloseButtonComponent.js"
export default class DetailSidebarComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return {
            // detail section
            tag: "section",
            attributes: {
              id: "detail-section",
              class: "hidden absolute top-0 right-0 bg-white w-[300px] p-3 h-full transition-all".split(' ')
            },
            children: [
              new DetailCloseButtonComponent(),
              {
                tag: "h2",
                attributes: {
                  class: "font-medium text-[18px] text-center mb-5 sm:my-6".split(' ')
                },
                children: "Les Evènements à venir"
              },
              {
                // detail content
                tag: "div",
                attributes: {
                  class: "detail-content".split(' ')
                },
                children: [
                  {
                    tag: "p",
                    attributes: {
                      class: "text-xs text-gray-400".split(' ')
                    },
                    children: "Contenu des détails ici..."
                  }
                ]
              }
            ]
        }
    }
}
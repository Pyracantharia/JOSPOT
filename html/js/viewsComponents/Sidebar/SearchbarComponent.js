import Component from "../../core/Component.js";

export default class SearchbarComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return {
            // searchbar
            tag: "form",
            attributes: {
              action: "",
              method: "post"
            },
            children: [
              {
                tag: "div",
                attributes: {
                  class: "searchbox border p-2 rounded-full flex justify-between items-center".split(' ')
                },
                children: [
                  {
                    tag: "input",
                    attributes: {
                      class: "w-32 focus:outline-none".split(' '),
                      type: "input",
                      name: "",
                      placeholder: "Rechercher"
                    }
                  },
                  {
                    tag: "img",
                    attributes: {
                      src: "img/search.svg",
                      alt: "Icone de recherche"
                    }
                  },
                  {
                    tag: "button",
                    attributes: {
                      type: "submit",
                      hidden: true
                    }
                  }
                ]
              }
            ]
          }
    }
}
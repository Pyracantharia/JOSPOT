import Component from "../core/Component.js";

export default class FilterComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return {
            //filtre
            tag: "form",
            attributes: {
              action: "",
              method: "post"
            },
            children: [
              {
                tag: "select",
                attributes: {
                  name: "filtres",
                  id: "filtres",
                  class: "border rounded-full p-[6px]".split(' ')
                },
                children: [
                  { //créer un composant pour chaque option de filtre
                    // option select: filtrer
                    tag: "option",
                    attributes: {
                      value: "",
                      selected: true,
                      disabled: true
                    },
                    children: "Filtrer"
                  },
                  {
                    // option select: Natation
                    tag: "option",
                    attributes: {
                      value: "natation",
                      selected: false,
                      disabled: false
                    },
                    children: "Natation"
                  },
                  {
                    // option select: Basket
                    tag: "option",
                    attributes: {
                      value: "basket",
                      selected: false,
                      disabled: false
                    },
                    children: "Basket"
                  },
                  {
                    // option select: Handball
                    tag: "option",
                    attributes: {
                      value: "handball",
                      selected: false,
                      disabled: false
                    },
                    children: "Handball"
                  }
                ]
              }
            ]
          }
    }
}
import Component from "../../core/Component.js";


export default class EventItemComponent extends Component{
    /**
     * Waits a prop object like {
     *  sports: "sports",
     *  hour: "hour",
     *  address: "address",
     *  site_name: "site_name",
     *  starting_date: "starting_date"
     * }
     * @param {object} props 
     */
    constructor(props){
        super(props);
    }

    translateSportName(sport) {
      // Convertir le nom du sport en minuscules et le diviser en mots
      let words = sport.toLowerCase().split(" ");
  
      // Filtrer "para" et joindre le reste pour former la clé
      const key = words.filter(word => word !== "para").join(" ");
  
      // Retourner le premier mot de la clé
      return key.split(" ")[0];
    }
  
    FrenchToEnglish(sport) {
      const sports = {
        "athlétisme": "athletics",
        "escrime": "fencing",
        "volley-ball": "beachvolley", 
        // Ajouter plus de traductions si nécessaire
      };
  
      // Retourner le nom du sport traduit ou l'original s'il n'est pas trouvé
      return sports[sport] || sport;
    }
  

    render(){
      const sportName = this.translateSportName(this.props.sports);
      const translatedSport = this.FrenchToEnglish(sportName);
        return {
            //event item
            tag: "div",
            attributes: {
                class: "event-item p-2 border rounded-md w-[90%]".split(" "), // Add mb-10 for spacing between items
                // style: "margin-bottom: 40px;", // Ensure each item has 40px bottom margin
            },
            children: [
              {
                tag: "div",
                attributes: {
                  class: "flex mb-2 justify-between".split(" "),
                },
                children: [
                  {
                    //event description
                    tag: "div",
                    attributes: {
                      class: "event-description mr-2".split(" "),
                    },
                    children: [
                      {
                        tag: "h3",
                        attributes: {
                          class: "mb-3".split(" "),
                        },
                        // children: "Natation - 14h00",
                        children: `${this.props.sports} - ${this.props.hour}`,
                      },
                      {
                        tag: "p",
                        attributes: {
                          class: "text-xs text-gray-400 mb-2".split(" "),
                        },
                        children: this.props.address,
                      },
                      {
                        tag: "p",
                        attributes: {
                          class: "text-xs text-gray-400 mb-2".split(" "),
                        },
                        children: this.props.site_name,
                      },
                    ],
                  },
                  {
                    //event-img
                    tag: "div",
                    attributes: {
                      class:
                        "event-img w-[120px] h-full rounded-md overflow-hidden".split(
                          " "
                        ),
                    },
                    children: [
                      {
                        tag: "img",
                        attributes: {
                          src: `https://tickets.paris2024.org/obj/media/FR-Paris2024/teaser/event/222x222/picto${translatedSport}.png`,
                          alt: this.props.sports,
                          class: "object-center object-cover".split(" "),
                        },
                      },
                    ],
                  },
                ],
              },
              {
                //event date
                tag: "p",
                attributes: {
                  class: "text-xs text-gray-400 text-right".split(" "),
                },
                children: this.props.starting_date,
              },
            ],
          }
    }
}
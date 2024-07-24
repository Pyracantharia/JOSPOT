import Component from "../core/Component.js"

export default class MapComponent extends Component{
    constructor(props){
      super(props)
    }

    render(){
        return {
            // div qui accueille la map
            tag: "div",
            attributes: {
              id: "map",
              class: "w-full h-full bg-blue-500".split(' ')
            }
          }
    }
}
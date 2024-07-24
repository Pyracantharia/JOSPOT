import Component from "../../core/Component.js";

export default class DetailCloseButtonComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return {
            tag: "div",
            attributes: {
                class: "absolute top-0 left-0".split(" "),
            },
            events: {
                click: function(){
                    const parentElement = this.parentElement;
                    parentElement.classList.toggle("hidden");
                }
            },
            children: [
                { //close-icon container
                    tag: "div",
                    attributes: {
                        class: "w-6 h-6".split(" ")
                    },
                    children: [
                        {
                            tag: "img",
                            attributes: {
                                src: "img/close_icon.svg"
                            }
                        }
                        
                    ]
                }
            ]
        }
    }
}
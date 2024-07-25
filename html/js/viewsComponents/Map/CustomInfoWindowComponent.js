import Component from "../../core/Component.js";

export default class CustomInfoWindowComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return {
            tag: "div",
            attributes: {
                class: "info-div".split(" ")
            },
            children: [
                {
                    tag: "div",
                    attributes: {
                        class: "info-container".split(" "),
                    },
                    children: [
                        {
                            tag: "h3",
                            attributes: {
                                class: "event-title text-lg".split(" "),
                            },
                            children: `${this.props.title}`
                        },
                        {
                            tag: "p",
                            attributes: {
                                class: "event-address".split(" "),
                            },
                            children: `${this.props.address}`
                        }
                    ]
                },
                {
                    tag: "div",
                    attributes: {
                        class: "img-container w-full h-9 rounded-md overflow-hidden".split(" "),
                    },
                    children: [
                        {
                            tag: 'img',
                            attributes: {
                                src: `${this.props.img}`,
                            }
                        }
                    ]
                }
                
                
            ]
        }
    }
}
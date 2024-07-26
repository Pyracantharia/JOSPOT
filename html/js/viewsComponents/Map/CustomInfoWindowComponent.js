import Component from "../../core/Component.js";

export default class CustomInfoWindowComponent extends Component{
    constructor(props){
        super(props);
    }

    handleClick(){
        this.props.onClick(this.props.event)
        document.querySelector("#detail-section").classList.toggle("hidden");
    }

    render(){
        return {
            tag: "div",
            attributes: {
                class: "info-div w-[300px]".split(" ")
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
                            children: `${this.props.sports}`
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
                        class: "img-container w-full rounded-md overflow-hidden".split(" "),
                    },
                    children: [
                        {
                            tag: 'img',
                            attributes: {
                                src: `${this.props.img}`,
                            }
                        }
                    ]
                },
                {
                    tag: "div",
                    attributes: {
                        class: "flex justify-center".split(" ")
                    },
                    children: [
                        {
                            tag: "button",
                            attributes: {
                                class: "bg-blue-500 text-white p-3 rounded-md mt-3".split(" ")
                            },
                            events: {
                                // click: function (){
                                //     const detail_section = document.getElementById("detail-section");
                                //     detail_section.classList.toggle("hidden");
                                // }
                                click: this.handleClick.bind(this)
                            },
                            children: "Voir les détails de l'épreuve"
                        }
                    ]
                }
            ]
        }
    }
}
export default function HomePage() {
    return {
        //wrapper
        tag: "div",
        attributes: {
            class: "wrapper w-screen h-screen relative".split(' ')
        },
        children: [
            {
                //div qui accueille la map
                tag: "div",
                attributes: {
                    id: "map",
                    class: "w-full h-full bg-blue-500".split(' ')
                }
            },

            {
                //event section
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
                    },
                },
                children: [
                    {
                        //burger menu mobile
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
                                };
                                const parentNode = this.parentNode;
                                const toggleMobileEvent = new CustomEvent("toggleMobile");
                                parentNode.dispatchEvent(toggleMobileEvent);

                            },
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
                    },
                    {
                        //burger menu desktop
                        tag: "div",
                        attributes: {
                            id: "burger-menu-desktop",
                            class: "hidden w-12 h-12 absolute top-[-20%] right-[30px] sm:flex justify-center items-center bg-white rounded-full p-3 sm:top-[20px] sm:right-[-70px]".split(' ')
                        },
                        events: {
                            click: function () {
                                const eventTogglerDesktop = this.children[0];
                                const spanElements = eventTogglerDesktop.children;

                                for (const span of spanElements) {
                                    span.classList.toggle("touch-active");
                                };
                                const parentNode = this.parentNode;
                                const toggleDesktopEvent = new CustomEvent("toggleDesktop");
                                parentNode.dispatchEvent(toggleDesktopEvent);

                            },
                        },
                        children: [
                            {
                                tag: "div",
                                attributes: {
                                    id: "event-toggler-desktop",
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
                    },
                    {
                        //H2: tout les évènements
                        tag: "h2",
                        attributes: {
                            class: "font-medium text-[18px] text-center mb-5 sm:my-6".split(' ')
                        },
                        children: "Tout les évènements"
                    },
                    {
                        //events head
                        tag: "div",
                        attributes: {
                            class: "events-head flex justify-around items-center mb-5".split(' ')
                        },
                        children: [
                            {
                                //searchbar
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
                                                    hidden: true // gérer ce cas aussi
                                                },
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
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
                                            {
                                                //option select: filtrer
                                                tag: "option",
                                                attributes: {
                                                    value: "",
                                                    selected: true,
                                                    disabled: true
                                                },
                                                children: "Filtrer"
                                            },
                                            {
                                                //option select: Natation
                                                tag: "option",
                                                attributes: {
                                                    value: "natation",
                                                    selected: false,
                                                    disabled: false
                                                },
                                                children: "Natation"
                                            },
                                            {
                                                //option select: Basket
                                                tag: "option",
                                                attributes: {
                                                    value: "basket",
                                                    selected: false,
                                                    disabled: false
                                                },
                                                children: "Basket"
                                            },
                                            {
                                                //option select: Handball
                                                tag: "option",
                                                attributes: {
                                                    value: "handball",
                                                    selected: false,
                                                    disabled: false
                                                },
                                                children: "Handball"
                                            },
                                        ]
                                    },

                                ]
                            }
                        ]
                    },
                    {
                        //event list
                        tag: "div",
                        attributes: {
                            class: "events-container h-[400px] flex flex-col items-center gap-5 overflow-y-auto sm:relative sm:h-[650px] scrollbar-thin".split(' ')
                        },
                        children: [
                            {
                                //event item
                                tag: "div",
                                attributes: {
                                    class: "event-item p-2 border rounded-md w-[90%]".split(' ')
                                },
                                children: [
                                    {
                                        tag: "div",
                                        attributes: {
                                            class: "flex mb-2 justify-between".split(' ')
                                        },
                                        children: [
                                            {
                                                //event description
                                                tag: "div",
                                                attributes: {
                                                    class: "event-description mr-2".split(' ')
                                                },
                                                children: [
                                                    {
                                                        tag: "h3",
                                                        attributes: {
                                                            class: "mb-3".split(' ')
                                                        },
                                                        children: "Natation - 14h00"
                                                    },
                                                    {
                                                        tag: "p",
                                                        attributes: {
                                                            class: "text-xs text-gray-400 mb-2".split(' ')
                                                        },
                                                        children: "Centre Aquatique Olympique"
                                                    },
                                                    {
                                                        tag: "p",
                                                        attributes: {
                                                            class: "text-xs text-gray-400 mb-2".split(' ')
                                                        },
                                                        children: "Bordeaux"
                                                    },
                                                ]
                                            },
                                            {
                                                //event-img
                                                tag: "div",
                                                attributes: {
                                                    class: "event-img w-[120px] h-full rounded-md overflow-hidden".split(' ')
                                                },
                                                children: [
                                                    {
                                                        tag: "img",
                                                        attributes: {
                                                            src: "img/swimming.jpg",
                                                            alt: "natation",
                                                            class: "object-center object-cover".split(' ')
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        //event date
                                        tag: "p",
                                        attributes: {
                                            class: "text-xs text-gray-400 text-right".split(' ')
                                        },
                                        children: "30/07/2024"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };
}
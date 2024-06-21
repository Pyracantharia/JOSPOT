import BrowserRouter from "./components/BrowserRouter.js";
import routes from "./routes.js";
import { initMap } from "./map.js";

const root = document.getElementById("root");

document.addEventListener("DOMContentLoaded", () => {
    const myDocument = document.documentElement;
    const divIntro = myDocument.children[1].children[0].children[0].children[0];
    console.log(divIntro);
    divIntro.dispatchEvent(new Event("animationLaunch"))
})

BrowserRouter(root, routes);
// initMap();
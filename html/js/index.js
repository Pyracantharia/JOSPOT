import { initMap } from "./map/map.js";

const root = document.getElementById("root");

function initializeMap(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        const mapDiv = document.createElement('div');
        mapDiv.id = 'map';
        mapDiv.style.height = '100vh';
        mapDiv.style.width = '100%';
        container.appendChild(mapDiv);

    }
}



function Page1(){
    const h1 = document.createElement("h1");
    const title = document.createTextNode("Hello c'est la page 1");
    h1.appendChild(title);

    // Génére une div contenant le h1 et une div avec un id map
    const div = document.createElement("div");
    div.appendChild(h1);
    const divMap = document.createElement("div");
    divMap.id = "map";
    divMap.style.height = "100vh";
    divMap.style.width = "100%";
    div.appendChild(divMap);
    

    return div;
}

Page1.onMount = function(){
    initMap("map");
}

function Page404(){
    const h1 = document.createElement("h1");
    const title = document.createTextNode("Page 404");
    h1.appendChild(title);

    return h1;
}


const routes = {
    "/map": Page1,
    "*": Page404
}
/**
 * Just a router (need a web server in order to work though)
 * @param {*} rootElement 
 * @param {*} routes 
 */
function BrowserRouter(rootElement, routes) {
    function managePath() {
        const currentPath = window.location.pathname;
        const elementGenerator = routes[currentPath] ?? routes["*"];
        return elementGenerator;
    }

    const elementGenerator = managePath();
    rootElement.appendChild(elementGenerator());
    if (elementGenerator.onMount){
        elementGenerator.onMount();
    }

    window.addEventListener("popstate", function () {
        const elementGenerator = managePath;
        rootElement.replaceChild(managePath, rootElement.childNodes[0]);
        if (elementGenerator.onMount){
            elementGenerator.onMount();
        }
    });
}

BrowserRouter(root, routes);
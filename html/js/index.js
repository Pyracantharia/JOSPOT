import { initMap } from "./map.js";

const root = document.getElementById("root");


function Page1() {

    const container = document.createElement("div");
    container.style.position = "relative";
    container.style.height = "100vh";

    // Création de divIntro
    const divIntro = document.createElement("div");
    divIntro.className = "intro";
    divIntro.id = "intro";

    const divLogo = document.createElement("div");
    divLogo.className = "fadeInLogo";
    divLogo.id = "logo";

    const img = document.createElement("img");
    img.src = "https://upload.wikimedia.org/wikipedia/fr/6/68/Logo_JO_d%27%C3%A9t%C3%A9_-_Paris_2024.svg";
    img.alt = "Lang FR";

    divLogo.appendChild(img);

    const p = document.createElement("p");
    p.className = "fadeInText";
    p.id = "text";
    const textNode = document.createTextNode("Rechercher les meilleurs emplacements");
    p.appendChild(textNode);

    divIntro.appendChild(divLogo);
    divIntro.appendChild(p);

    // Création de divMap
    const divMap = document.createElement("div");
    divMap.id = "map";
    divMap.style.height = "100vh";
    divMap.style.width = "100%";

    // Ajout de divMap et divIntro au container
    container.appendChild(divMap);
    container.appendChild(divIntro);

    return container;
}

Page1.onMount = function () {
    initMap("map");
}

function Page404() {
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
    if (elementGenerator.onMount) {
        elementGenerator.onMount();
    }

    window.addEventListener("popstate", function () {
        const elementGenerator = managePath;
        rootElement.replaceChild(managePath, rootElement.childNodes[0]);
        if (elementGenerator.onMount) {
            elementGenerator.onMount();
        }
    });
}

BrowserRouter(root, routes);
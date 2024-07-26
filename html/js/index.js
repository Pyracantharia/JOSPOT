import BrowserRouter from "./core/Router.js";
import routes from "./routes.js";
// import { initMap } from "./map.js";

const root = document.getElementById("root");

BrowserRouter(root, routes);

// await initMap();

// if (window.location.pathname === "/") {
//   initMap();
// }


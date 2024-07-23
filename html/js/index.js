import BrowserRouter from "./core/Router.js";
import routes from "./routes.js";
import { initMap } from "./map.js";

const root = document.getElementById("root");

BrowserRouter(root, routes);

// window.onload = async () => {
//   console.log("before initMap");
//   await initMap();
//   console.log("after initMap");
// };

  await initMap();

import BrowserRouter from "./components/BrowserRouter.js";
import routes from "./routes.js";
import { initMap } from "./map.js";


const root = document.getElementById("root");

BrowserRouter(root, routes);

await initMap();

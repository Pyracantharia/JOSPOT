import HomePage from "./views/HomePage.js";
import Page404 from "./views/Page404.js";
import SitesCompetition from "./views/SitesCompetition.js";



export default {
    "/": HomePage,
    "*": Page404,
    "/liste-sites": SitesCompetition,
}
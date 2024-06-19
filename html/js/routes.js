import HomePage from "./views/HomePage.js";
import Page404 from "./views/Page404.js";

export default {
    "/": HomePage,
    "*": Page404,
}
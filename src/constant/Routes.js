import { createRoute } from "../utils/createRoute";
import Home from "../views/Home";
import Contact from "../views/Contact";
import AboutMe from "../views/AboutMe";

const routes = [
  createRoute("/", "Home", Home),
  createRoute("/contact", "Contact", Contact),
  createRoute("/aboutMe", "AboutMe", AboutMe),
];

export default routes;

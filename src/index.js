import defaultPage from "./modules/defaultPage";
import clearPage from "./modules/clearfunction";
import homepage from "./modules/homepage";
import footerPage from "./modules/footer";
import menu from "./modules/menu";
import contactPage from "./modules/contact";

import "./style.scss";

import "./images/pexels-kubra-dogu-8802312.jpg";
import "./images/pexels-marta-dzedyshko-7175448_11zon.jpg";
import "./images/pexels-roman-odintsov-5338145_11zon.jpg";

defaultPage();
homepage();
footerPage();

function clicks() {
  const homeLink = document.querySelector(".homeLink");
  homeLink.addEventListener("click", () => {
    clearPage();
    defaultPage();
    homepage();
    footerPage();
    clicks();
  });

  const menuLink = document.querySelector(".menuLink");
  menuLink.addEventListener("click", () => {
    clearPage();
    defaultPage();
    menu();
    footerPage();
    clicks();
  });

  const contactLink = document.querySelector(".contactLink");
  contactLink.addEventListener("click", () => {
    clearPage();
    defaultPage();
    contactPage();
    footerPage();
    clicks();
  });
}
clicks();

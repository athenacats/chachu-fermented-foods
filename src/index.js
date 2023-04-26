import defaultPage from "./modules/defaultPage";
import clearPage from "./modules/clearfunction";
import homepage from "./modules/homepage";
import footerPage from "./modules/footer";
import menu from "./modules/menu";
import contactPage from "./modules/contact";

import "./style.scss";
/* function component() {
  const content = document.getElementById("content");
  content.appendChild(header);
} */
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

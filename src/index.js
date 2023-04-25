import defaultPage from "./modules/defaultPage";
import homepage from "./modules/homepage";
import clearPage from "./modules/clearfunction";
import menu from "./modules/menu";
import contactPage from "./modules/contact";

import "./style.scss";
/* function component() {
  const content = document.getElementById("content");
  content.appendChild(header);
} */
defaultPage();
homepage();

const homeLink = document.querySelector(".homeLink");
homeLink.addEventListener("click", () => {
  clearPage();
  defaultPage();
  homepage();
});

const menuLink = document.querySelector(".menuLink");
menuLink.addEventListener("click", () => {
  clearPage();
  defaultPage();
  menu();
});

const contactLink = document.querySelector(".contactLink");
contactLink.addEventListener("click", () => {
  clearPage();
  defaultPage();
  contactPage();
});

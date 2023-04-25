// import defaultPage from "./loadpage";
// import home from "./home";
// import menu from "./menu";
// import contact from "./contact";

import homepage from "./modules/homepage";
import clearPage from "./modules/clearfunction";
import menu from "./modules/menu";

import "./style.scss";
/* function component() {
  const content = document.getElementById("content");
  content.appendChild(header);
} */
homepage();

const homeLink = document.querySelector(".homeLink");
homeLink.addEventListener("click", () => {
  clearPage();
  homepage();
});

const menuLink = document.querySelector(".menuLink");
menuLink.addEventListener("click", () => {
  clearPage();
  menu();
});

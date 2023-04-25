import menu from "./menu";

const header = document.createElement("div");
const title = document.createElement("h1");
title.textContent = "Chachu Fermented Foods";
title.classList.add("title");
header.classList.add("header");
header.appendChild(title);

const navigation = document.createElement("div");
navigation.classList.add("navigation");
const ul = document.createElement("ul");
navigation.appendChild(ul);
const li1 = document.createElement("li");
li1.classList.add("menuItem");
const li2 = document.createElement("li");
li2.classList.add("menuItem");
const li3 = document.createElement("li");
li3.classList.add("menuItem");
const text1 = document.createTextNode("Home");
const text2 = document.createTextNode("Menu");

text2.addEventListener("click", menu);

const text3 = document.createTextNode("Contact");
li1.appendChild(text1);
li2.appendChild(text2);
li3.appendChild(text3);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
header.appendChild(navigation);

const container = document.createElement("div");
container.classList.add("container");

const about = document.createElement("div");
about.classList.add("about");

const aboutTitle = document.createElement("h3");
aboutTitle.classList.add("aboutTitle");
aboutTitle.textContent = "Why Eat Fermented Foods?";
about.appendChild(aboutTitle);

const aboutText1 = document.createElement("p");
aboutText1.classList.add("aboutText1");
aboutText1.textContent =
  "Fermented foods are packed with probiotics—the good bacteria grow during the fermentation process—and eating them is one way to boost your gut health (eating more foods that are high in fiber, particularly prebiotic-rich foods, is important for gut health, too).";
about.appendChild(aboutText1);

const aboutText2 = document.createElement("p");
aboutText2.classList.add("aboutText2");
aboutText2.textContent =
  "Check out the different gut friendly foods we have below!";
about.appendChild(aboutText2);

const buttonBar = document.createElement("div");
buttonBar.classList.add("buttonBar");

const button1 = document.createElement("button");
button1.classList.add("button");
button1.textContent = "Pastries";
// button1.addEventListener("click", () => {
buttonBar.appendChild(button1);

const button2 = document.createElement("button");
button2.classList.add("button");
button2.textContent = "Sides";
buttonBar.appendChild(button2);

const button3 = document.createElement("button");
button3.classList.add("button");
button3.textContent = "Drinks";
buttonBar.appendChild(button3);

about.appendChild(buttonBar);
container.appendChild(about);

export { header, container };

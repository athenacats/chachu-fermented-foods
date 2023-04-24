const header = document.createElement("div");
const title = document.createElement("div");
title.textContent = "Chachu Fermented Foods";
title.classList.add("title");
header.classList.add("header");
header.appendChild(title);

const navigation = document.createElement("div");
navigation.classList.add("navigation");
const ul = document.createElement("ul");
navigation.appendChild(ul);
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const text1 = document.createTextNode("Home");
const text2 = document.createTextNode("Menu");
const text3 = document.createTextNode("Contact");
li1.appendChild(text1);
li2.appendChild(text2);
li3.appendChild(text3);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

header.appendChild(navigation);

export default header;

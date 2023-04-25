function menu() {
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
  li1.classList.add("homeLink");
  const li2 = document.createElement("li");
  li2.classList.add("menuLink");
  const li3 = document.createElement("li");
  li3.classList.add("contactLink");
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

  const container = document.createElement("div");
  container.classList.add("container");

  const content = document.getElementById("content");
  content.appendChild(header);
}

export default menu;

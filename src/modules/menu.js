function menu() {
  const container = document.createElement("div");
  container.classList.add("container");

  const pastries = document.createElement("div");
  pastries.classList.add("pastries");

  const pastriesTitle = document.createElement("h3");
  pastriesTitle.classList.add("pastriesTitle");
  pastriesTitle.textContent = "Pastries";
  pastries.appendChild(pastriesTitle);

  const pastriesul = document.createElement("ul");
  pastries.appendChild(pastriesul);
  const pastriesli1 = document.createElement("li");
  const pastriesli2 = document.createElement("li");
  const pastriesli3 = document.createElement("li");
  const pastriesli4 = document.createElement("li");
  const pastriesli5 = document.createElement("li");
  const pastriesli6 = document.createElement("li");
  const pastriesli7 = document.createElement("li");
  const pastriestext1 = document.createTextNode(
    "Sourdough Pancakes or Waffles"
  );
  const pastriestext2 = document.createTextNode("Sourdough Pretzels");
  const pastriestext3 = document.createTextNode("Blueberry Sourdough Muffins");
  const pastriestext4 = document.createTextNode(
    "Sourdough Cinnamon Crumb Cake"
  );
  const pastriestext5 = document.createTextNode("Sourdough Bread");
  const pastriestext6 = document.createTextNode("Sourdough Crumpets");
  const pastriestext7 = document.createTextNode("Buttery Sourdough Biscuits");
  pastriesli1.appendChild(pastriestext1);
  pastriesli2.appendChild(pastriestext2);
  pastriesli3.appendChild(pastriestext3);
  pastriesli4.appendChild(pastriestext4);
  pastriesli5.appendChild(pastriestext5);
  pastriesli6.appendChild(pastriestext6);
  pastriesli7.appendChild(pastriestext7);
  pastriesul.appendChild(pastriesli1);
  pastriesul.appendChild(pastriesli2);
  pastriesul.appendChild(pastriesli3);
  pastriesul.appendChild(pastriesli4);
  pastriesul.appendChild(pastriesli5);
  pastriesul.appendChild(pastriesli6);
  pastriesul.appendChild(pastriesli7);

  container.appendChild(pastries);

  const drinks = document.createElement("div");
  drinks.classList.add("drinks");

  const drinksTitle = document.createElement("h3");
  drinksTitle.classList.add("drinksTitle");
  drinksTitle.textContent = "Drinks";
  drinks.appendChild(drinksTitle);

  const drinksul = document.createElement("ul");
  drinks.appendChild(drinksul);
  const drinksli1 = document.createElement("li");
  const drinksli2 = document.createElement("li");
  const drinksli3 = document.createElement("li");
  const drinksli4 = document.createElement("li");
  const drinksli5 = document.createElement("li");
  const drinksli6 = document.createElement("li");
  const drinksli7 = document.createElement("li");
  const drinkstext1 = document.createTextNode("Kombucha");
  const drinkstext2 = document.createTextNode("Ginger Ale");
  const drinkstext3 = document.createTextNode("Kvass");
  const drinkstext4 = document.createTextNode("Beer");
  const drinkstext5 = document.createTextNode("Wine");
  const drinkstext6 = document.createTextNode("Mead");
  const drinkstext7 = document.createTextNode("Kefir");
  drinksli1.appendChild(drinkstext1);
  drinksli2.appendChild(drinkstext2);
  drinksli3.appendChild(drinkstext3);
  drinksli4.appendChild(drinkstext4);
  drinksli5.appendChild(drinkstext5);
  drinksli6.appendChild(drinkstext6);
  drinksli7.appendChild(drinkstext7);
  drinksul.appendChild(drinksli1);
  drinksul.appendChild(drinksli2);
  drinksul.appendChild(drinksli3);
  drinksul.appendChild(drinksli4);
  drinksul.appendChild(drinksli5);
  drinksul.appendChild(drinksli6);
  drinksul.appendChild(drinksli7);

  container.appendChild(drinks);

  const sides = document.createElement("div");
  sides.classList.add("sides");

  const sidesTitle = document.createElement("h3");
  sidesTitle.classList.add("sidesTitle");
  sidesTitle.textContent = "Sides";
  sides.appendChild(sidesTitle);

  const sidesul = document.createElement("ul");
  sides.appendChild(sidesul);
  const sidesli1 = document.createElement("li");
  const sidesli2 = document.createElement("li");
  const sidesli3 = document.createElement("li");
  const sidesli4 = document.createElement("li");
  const sidesli5 = document.createElement("li");
  const sidesli6 = document.createElement("li");
  const sidesli7 = document.createElement("li");
  const sidestext1 = document.createTextNode("Sauerkraut");
  const sidestext2 = document.createTextNode("Pickles");
  const sidestext3 = document.createTextNode("Miso");
  const sidestext4 = document.createTextNode("Tempeh");
  const sidestext5 = document.createTextNode("Kimchi");
  const sidestext6 = document.createTextNode("Natto");
  const sidestext7 = document.createTextNode("Cheese");
  sidesli1.appendChild(sidestext1);
  sidesli2.appendChild(sidestext2);
  sidesli3.appendChild(sidestext3);
  sidesli4.appendChild(sidestext4);
  sidesli5.appendChild(sidestext5);
  sidesli6.appendChild(sidestext6);
  sidesli7.appendChild(sidestext7);
  sidesul.appendChild(sidesli1);
  sidesul.appendChild(sidesli2);
  sidesul.appendChild(sidesli3);
  sidesul.appendChild(sidesli4);
  sidesul.appendChild(sidesli5);
  sidesul.appendChild(sidesli6);
  sidesul.appendChild(sidesli7);

  container.appendChild(sides);

  const content = document.getElementById("content");
  content.appendChild(container);
}

export default menu;

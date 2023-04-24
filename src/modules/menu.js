function menu() {
  const container = document.createElement("div");
  container.classList.add("container");

  const pastries = document.createElement("div");
  pastries.classList.add("pastries");

  container.appendChild(pastries);
}

export default menu;

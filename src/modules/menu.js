function menu() {
  const container = document.createElement("div");
  container.classList.add("container");

  const content = document.getElementById("content");
  content.appendChild(container);
}

export default menu;

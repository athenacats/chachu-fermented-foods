function footerPage() {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  const text4 = document.createTextNode("Copyright © 2017");
  footer.appendChild(text4);

  const content = document.getElementById("content");

  content.appendChild(footer);
}

export default footerPage;

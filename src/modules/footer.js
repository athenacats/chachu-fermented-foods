function footerPage() {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  const date = new Date().getFullYear();
  const dateString = date.toString();
  const text1 = "Copyright © ".concat(dateString);
  const text2 = document.createTextNode(text1);
  footer.appendChild(text2);

  const content = document.getElementById("content");

  content.appendChild(footer);
}

export default footerPage;

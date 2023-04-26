function contactPage() {
  const containerContact = document.createElement("div");
  containerContact.classList.add("containerContact");

  const contactBox = document.createElement("div");
  contactBox.classList.add("contact-box");
  containerContact.appendChild(contactBox);

  const icon1 = document.createElement("div");
  icon1.classList.add("icon1");
  icon1.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>';
  contactBox.appendChild(icon1);

  const phone = document.createElement("h4");
  phone.classList.add("phone");
  phone.textContent = "+254 701 234 567";
  contactBox.appendChild(phone);

  const icon2 = document.createElement("div");
  icon2.classList.add("icon2");
  icon2.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-at-sign"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>';
  contactBox.appendChild(icon2);

  const email = document.createElement("h4");
  email.classList.add("email");
  email.textContent = "fermentationfoodie@foodies.com";
  contactBox.appendChild(email);

  const icon3 = document.createElement("div");
  icon3.classList.add("icon3");
  icon3.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>';
  contactBox.appendChild(icon3);

  const address = document.createElement("h4");
  address.classList.add("address");
  address.textContent = "Rosslyn Mall, Nairobi, Kenya";
  contactBox.appendChild(address);

  const map = document.createElement("div");
  map.classList.add("map");
  map.innerHTML =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.918952871901!2d36.797678814753844!3d-1.2165719991126391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3d5eef234b95%3A0xac9e573f43fe5923!2sRosslyn%20Riviera%20Mall!5e0!3m2!1sen!2sus!4v1682487959275!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  contactBox.appendChild(map);

  const content = document.getElementById("content");
  content.appendChild(containerContact);
}

export default contactPage;

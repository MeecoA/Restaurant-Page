const renderBase = () => {
  const content = document.querySelector("#content");
  content.textContent = "";
  const header = document.createElement("header");
  header.classList.add("main-container");
  content.appendChild(header);

  const nav = document.createElement("div");
  nav.classList.add("nav");
  header.appendChild(nav);

  const logo = document.createElement("div");
  logo.classList.add("logo");
  nav.appendChild(logo);
  const logoImg = document.createElement("img");
  logoImg.src = "/img/logo.png";
  logoImg.alt = "logo";
  logo.appendChild(logoImg);
  const unorderedList = document.createElement("ul");
  unorderedList.classList.add("mylinks");
  nav.appendChild(unorderedList);

  const home = document.createElement("li");
  home.classList.add("links");
  home.textContent = "Home";
  home.setAttribute("id", "homeBtn");
  unorderedList.appendChild(home);

  const menu = document.createElement("li");
  menu.classList.add("links");
  menu.textContent = "Menu";
  menu.setAttribute("id", "menuBtn");
  unorderedList.appendChild(menu);

  const contact = document.createElement("li");
  contact.classList.add("links");
  contact.textContent = "Contact";
  contact.setAttribute("id", "contactBtn");
  unorderedList.appendChild(contact);

  const showcase = document.createElement("div");
  showcase.classList.add("showcase");
  content.appendChild(showcase);

  const homeTitle = document.createElement("h1");
  homeTitle.textContent = "Japanese Authentic Ramen";
  homeTitle.classList.add("home-title");
  showcase.appendChild(homeTitle);
};

export { renderBase };

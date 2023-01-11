const renderMenu = () => {
  const showcase = document.querySelector(".showcase");

  showcase.classList.add("main-container");
  const ramenTitle = document.createElement("h1");
  ramenTitle.setAttribute("id", "ramenTitle");
  ramenTitle.textContent = "Menu";
  showcase.appendChild(ramenTitle);

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  showcase.appendChild(menuContainer);

  // shio ramen
  const foods = document.createElement("div");
  foods.classList.add("foods");
  menuContainer.appendChild(foods);

  const shioImg = document.createElement("img");
  shioImg.src = "/img/shio.jpg";
  foods.appendChild(shioImg);

  const ramenDesc = document.createElement("div");
  ramenDesc.classList.add("ramen-desc");
  foods.appendChild(ramenDesc);
  const shioTitle = document.createElement("h2");
  shioTitle.textContent = "Shio Ramen";
  ramenDesc.appendChild(shioTitle);
  const para1 = document.createElement("p");
  para1.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iste facilis a accusamus at cumquemaiores commodi totam voluptatem natus?";
  ramenDesc.appendChild(para1);
  const breakln = document.createElement("br");
  ramenDesc.appendChild(breakln);
  const para2 = document.createElement("p");
  para2.textContent = "(R) P385";
  ramenDesc.appendChild(para2);
  const para3 = document.createElement("p");
  para3.textContent = "(R) P500";
  ramenDesc.appendChild(para3);

  // karamiso ramen
  const foods1 = document.createElement("div");
  foods1.classList.add("foods");
  menuContainer.appendChild(foods1);

  const karaImg = document.createElement("img");
  karaImg.src = "/img/karamiso.jpg";
  foods1.appendChild(karaImg);

  const ramenDesc1 = document.createElement("div");
  ramenDesc1.classList.add("ramen-desc");
  foods1.appendChild(ramenDesc1);
  const karaTitle = document.createElement("h2");
  karaTitle.textContent = "Kara-Miso Ramen";
  ramenDesc1.appendChild(karaTitle);
  const para1a = document.createElement("p");
  para1a.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iste facilis a accusamus at cumquemaiores commodi totam voluptatem natus?";
  ramenDesc1.appendChild(para1a);
  const breakln1 = document.createElement("br");
  ramenDesc1.appendChild(breakln1);
  const para2a = document.createElement("p");
  para2a.textContent = "(R) P385";
  ramenDesc1.appendChild(para2a);
  const para3a = document.createElement("p");
  para3a.textContent = "(R) P500";
  ramenDesc1.appendChild(para3a);

  //miso ramen
  const foods2 = document.createElement("div");
  foods2.classList.add("foods");
  menuContainer.appendChild(foods2);

  const misoImg = document.createElement("img");
  misoImg.src = "/img/miso.jpg";
  foods2.appendChild(misoImg);

  const ramenDesc2 = document.createElement("div");
  ramenDesc2.classList.add("ramen-desc");
  foods2.appendChild(ramenDesc2);
  const misoTitle = document.createElement("h2");
  misoTitle.textContent = "Kara-Miso Ramen";
  ramenDesc2.appendChild(misoTitle);
  const para1b = document.createElement("p");
  para1b.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iste facilis a accusamus at cumquemaiores commodi totam voluptatem natus?";
  ramenDesc2.appendChild(para1b);
  const breakln2 = document.createElement("br");
  ramenDesc2.appendChild(breakln2);
  const para2b = document.createElement("p");
  para2b.textContent = "(R) P385";
  ramenDesc2.appendChild(para2b);
  const para3b = document.createElement("p");
  para3b.textContent = "(R) P500";
  ramenDesc2.appendChild(para3b);

  //shoyu ramen
  const foods3 = document.createElement("div");
  foods3.classList.add("foods");
  menuContainer.appendChild(foods3);

  const shoyuImg = document.createElement("img");
  shoyuImg.src = "/img/miso.jpg";
  foods3.appendChild(shoyuImg);

  const ramenDesc3 = document.createElement("div");
  ramenDesc3.classList.add("ramen-desc");
  foods3.appendChild(ramenDesc3);
  const shoyuTitle = document.createElement("h2");
  shoyuTitle.textContent = "Kara-Miso Ramen";
  ramenDesc3.appendChild(misoTitle);
  const para1c = document.createElement("p");
  para1c.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iste facilis a accusamus at cumquemaiores commodi totam voluptatem natus?";
  ramenDesc3.appendChild(para1c);
  const breakln3 = document.createElement("br");
  ramenDesc3.appendChild(breakln3);
  const para2c = document.createElement("p");
  para2c.textContent = "(R) P385";
  ramenDesc2.appendChild(para2c);
  const para3c = document.createElement("p");
  para3c.textContent = "(R) P500";
  ramenDesc3.appendChild(para3c);
};

export { renderMenu };

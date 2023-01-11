import { renderMenu } from "./menu";
import { renderBase } from "./home";
import { renderContact } from "./contact";

renderBase();

const showcase = document.querySelector(".showcase");
const homeTitle = document.querySelector(".home-title");
menuBtn.addEventListener("click", () => {
  showcase.textContent = "";
  renderMenu();
});
homeBtn.addEventListener("click", () => {
  showcase.textContent = "";
  const titleHome = document.createElement("h1");
  titleHome.textContent = "Japanese Authentic Ramen";
  showcase.appendChild(titleHome);
});
contactBtn.addEventListener("click", () => {
  showcase.textContent = "";
  renderContact();
});

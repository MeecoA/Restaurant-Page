import { renderMenu } from "./menu";
import { renderBase, renderHomeTitle } from "./home";
import { renderContact } from "./contact";

renderBase();

const showcase = document.querySelector(".showcase");
menuBtn.addEventListener("click", () => {
  showcase.textContent = "";
  renderMenu();
});
homeBtn.addEventListener("click", () => {
  showcase.textContent = "";
  renderHomeTitle();
});
contactBtn.addEventListener("click", () => {
  showcase.textContent = "";
  renderContact();
});

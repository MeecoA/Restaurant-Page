import { alertFunctionMenu } from "./menu";
import { alertFunctionContact } from "./contact";
const menuBtn = document.querySelector("#menuBtn");
const contactBtn = document.querySelector("#contactBtn");

menuBtn.addEventListener("click", () => {
  alertFunctionMenu();
});

contactBtn.addEventListener("click", () => {
  alertFunctionContact();
});

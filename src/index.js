import { alertFunctionMenu } from "./menu";
import { alertFunctionContact } from "./contact";
const menuBtn = document.querySelector("#menuBtn");
const contactBtn = document.querySelector("#contactBtn");
const ramenTitle = document.querySelector("#ramenTitle");
menuBtn.addEventListener("click", () => {
  alertFunctionMenu();
});

contactBtn.addEventListener("click", () => {
  alertFunctionContact();
  // ramenTitle.textContent = "Hello from contact";
});

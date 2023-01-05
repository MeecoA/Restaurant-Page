const ramenTitle = document.querySelector("#ramenTitle");

const alertFunctionMenu = () => {
  alert("Menu Button is clicked via module");
  ramenTitle.textContent = "Menu Button Clicked";
};
export { alertFunctionMenu };

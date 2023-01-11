const renderContact = () => {
  const showcase = document.querySelector(".showcase");
  showcase.classList.add("main-container");
  const contactTitle = document.createElement("h1");
  showcase.appendChild(contactTitle);

  contactTitle.classList.add("contact-tile");
  contactTitle.textContent = "Contact us!";
  const contactNumber = document.createElement("h2");
  showcase.appendChild(contactNumber);
  contactNumber.classList.add("contact-us");
  contactNumber.textContent = "+63 12345677";
};

export { renderContact };

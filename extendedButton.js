class ExtendedButton extends HTMLButtonElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerText = "Extended (customised) Button";
    this.addEventListener("click", this.handleButtonClicked);
  }

  handleButtonClicked() {
    console.log("Extended button clicked...");
  }
}

customElements.define("extended-button", ExtendedButton, { extends: "button" });

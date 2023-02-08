class SimpleCustomElement extends HTMLElement {
  template = `
    <style>
    #simple-custom-element{
      padding: 10px;
      border: 1px solid black;
      margin: 10px;
    }
    </style>
    <div id='simple-custom-element'>
    <h1>This is an awesome world </h1>
    <p>and I am being called from simple custom element. I am not inside any shadow dom.</p>
  </div>
    `;
  constructor() {
    super();
    this.innerHTML = this.template;
  }
}

customElements.define("simple-custom-element", SimpleCustomElement);

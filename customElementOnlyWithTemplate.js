class CustomElementWithTemplate extends HTMLElement {
  template = `
    <style>
    #custom-element-with-template{
      padding: 10px;
      border: 1px solid black;
      margin: 10px;
      background: moccasin;
    }
    </style>
    <div id='custom-element-with-template'>
    <h1>The power to change the world is in your hand.</h1>
    <p>I am being called from simple custom element with template. And I am not inside SHADOW DOM.</p>
  </div>
    `;
  constructor() {
    super();
    this.innerHTML = this.template;
  }
}

customElements.define(
  "custom-element-with-template",
  CustomElementWithTemplate
);

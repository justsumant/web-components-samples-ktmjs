class SimpleCustomElementWithShadowDom extends HTMLElement {
  template = `
    <style>
    #simple-custom-element{
      padding: 10px;
      border: 1px solid black;
      margin: 10px;
      background: pink;
    }
    </style>
    <div id='simple-custom-element'>
    <h1>You should harness the power the world is trying to give you.</h1>
    <p>and I am being called from simple custom element. But I am inside <strong>SHADOW DOM</strong>. Goto browser developer mode to find me differently.</p>
  </div>
    `;
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).innerHTML = this.template;
  }
}

customElements.define(
  "simple-custom-element-with-shadow-dom",
  SimpleCustomElementWithShadowDom
);

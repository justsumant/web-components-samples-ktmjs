class ShadowDomWithLifecycle extends HTMLElement {
  myButton;
  template = `
    <style>
    #simple-custom-element{
      padding: 10px;
      border: 1px solid black;
      margin: 10px;
      background: magenta;
    }
    </style>
    <div id='simple-custom-element'>
    <h1>The world is beautiful.</h1>
    <p>and I am being called from shadow dom lifecycle section. Click the button below section to see the magic happening through attribureChangeCallback.</p>
    <p><i>Those buttons are outside of this dom and changing attribute of this shadow dom custom element.</i></p>
  </div>
    `;
  constructor() {
    super();
    // only set the dom, this can also be done from connectedCallback()
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = this.template;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "background" && oldValue !== newValue) {
      const usersEl = this.shadowRoot.querySelector("#simple-custom-element");
      usersEl.style.background = newValue;
    }
  }

  static get observedAttributes() {
    return ["background"];
  }

  disconnectedCallback() {
    // we can have api-disconnection, subscription disallocation, memory release, even unbinding etc related stuff here.
    console.log("I am desroyed, and all my legacy has fallen down.");
  }

  adoptedCallback() {
    // this method is called when this component will be moved to some other place.
  }
}

customElements.define("shadow-dom-with-lifecycle", ShadowDomWithLifecycle);

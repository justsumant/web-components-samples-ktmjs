# This repo contains sample snippets to help you understand web components through multiple examples.

Simply run the `index.html` file using live server of vs code and see the results.

1. Simple Custom Element

   - This simply shows the custom element using some html text.

2. Simple Custom Element with Shadow DOM

   - This encapsulates custom elements inside a shadow dom. The result can be seen from the developer-tool inspect elements.

3. Shadow DOM with component lifecycle methods

   - This one contains different lifecycle methods which can be used at places with web components.
   - Connected call back is called right after the component is initialised.
   - Constructor is to extend all other properties of HTML in to our custom element and will be called before the component is rendered.
   - There are 2 buttons in the index.html file which will do the attribute change for this component. The change is detected by the static method `observedAttributes` and hence listened by `attributeChangedCallback()` method. This method compares with the old value and does needed operation.

4. Extended button - Customised extension to a button
   - This one is extending only HTMLButton elements properties. Assiging directly to this class will assign to the button property. We can have our own button click handler to catch and handle click event.

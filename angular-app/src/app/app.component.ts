import { Component } from '@angular/core';
import '../../../userlist.js';
import '../../../extendedButton.js';
import '../../../simpleCustomElement.js';
import '../../../simpleCustomElementWithShadowDom.js';
import '../../../shadowDomWithLifecycle.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app';

  handleButtonClick(color: string) {
    document
      .querySelector('shadow-dom-with-lifecycle')
      ?.setAttribute('background', color);
  }
}

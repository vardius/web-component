# web-component

[![Build Status](https://travis-ci.org/vardius/web-component.svg?branch=master)](https://travis-ci.org/vardius/web-component)
[![npm version](https://img.shields.io/npm/v/web-component.svg?style=flat-square)](https://www.npmjs.com/package/web-component)
[![npm downloads](https://img.shields.io/npm/dm/web-component.svg?style=flat-square)](https://www.npmjs.com/package/web-component)

Lightweight library providing interface for building web components.

HOW TO USE
==================================================

1. [Documentation](https://github.com/vardius/web-component/wiki)

## Basic example

For example `HelloWorld` component usage in your *index.html* file

```html
  <hello-world who="Unicorn"></hello-world>
```

You could setup component as follow:

```html
<h1>Hello<span id="who"></span>!</h1>
```

```javascript
import { WebComponent } from 'webcomponents'

@WebComponent('hello-world', {
  template: require('./hello-world.html')
})
export class HelloWorld extends HTMLElement {
  constructor() {
    super();
    this._who = null;
  }

  static get observedAttributes() {
    return ['who'];
  }

  // Only called for the who attributes due to observedAttributes
  attributeChangedCallback(name, oldValue, newValue) {
    this._who = newValue;
    this._updateRendering();
  }

  connectedCallback() {
    if (this.hasAttribute('who')) {
      this._who = this.getAttribute('who');
      this._updateRendering();
    }
  }

  get who() {
    return this._who;
  }

  set who(v) {
    this.setAttribute("who", v);
  }

  _updateRendering() {
    this.shadowRoot.querySelector('#who').textContent = `, ${this._who}`;
  }
}
```

## License

The code is available under the [MIT license](LICENSE.md).

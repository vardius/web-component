# web-component

[![Build Status](https://travis-ci.org/vardius/web-component.svg?branch=master)](https://travis-ci.org/vardius/web-component)
[![npm version](https://img.shields.io/npm/v/web-component.svg)](https://www.npmjs.com/package/web-component)
[![npm downloads](https://img.shields.io/npm/dm/web-component.svg)](https://www.npmjs.com/package/web-component)

Lightweight library providing interface for building [web components](https://www.webcomponents.org/).

## Contribution

Is *web-component* library missing something ?

No problem! Simply [fork](https://github.com/vardius/web-component/network#fork-destination-box) this repository, [add middleware](https://github.com/vardius/web-component/wiki/Middleware) and create pull request.

## Instaliation

```bash
npm install --save web-component
```

## [Documentation](https://github.com/vardius/web-component/wiki)

Package provides a `decorator` function that allows you to:

- easy define [Custom Elements](https://www.webcomponents.org/introduction#custom-elements)
- styling a custom element
- creating elements from a template
- encapsulate style and markup using [Shadow DOM](https://www.webcomponents.org/introduction#shadow-dom)
- extending other custom elements or even the browser's built-in HTML

```javascript
import { WebComponent } from 'web-component'

@WebComponent('hello-world', {
  template: require('./hello-world.html'),// provide template
  styles: require('./hello-world.css'), //provide styles
  extends: 'button', //default does not extends any
  shadowDOM: true //default false
})
export class HelloWorld extends HTMLElement {}
```

If *_shadowDOM_* option is set to `true` then *_template_* and *_styles_* will be attached to [shadowRoot](https://w3c.github.io/webcomponents/spec/shadow/#concept-shadow-root). If there is no *_shadowRoot_*, it will be created with [mode](https://w3c.github.io/webcomponents/spec/shadow/#dom-shadowroot-mode) `open`.

1. [Hello World Example](https://github.com/vardius/web-component/wiki/Hello-World-Example)
2. [web-components-webpack-es6-boilerplate](https://github.com/vardius/web-components-webpack-es6-boilerplate)

## License

The code is available under the [MIT license](LICENSE.md).

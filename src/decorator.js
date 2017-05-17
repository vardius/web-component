import applyMiddleware from './applyMiddleware'
import connectedCallback from './connectedCallback';
import attributeChangedCallback from './attributeChangedCallback';
import proxy from './proxy';

export function WebComponent(name, options) {
  return function (target) {
    target = applyMiddleware(connectedCallback, proxy, attributeChangedCallback)(target)(options)

    if (options.extends) {
      customElements.define(name, target, {
        extends: options.extends
      });
    } else {
      customElements.define(name, target);
    }

    return target;
  }
}

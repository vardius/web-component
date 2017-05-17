import { applyMiddleware } from './middleware'
import connectedCallback from './connectedCallback';
import attributeChangedCallback from './attributeChangedCallback';
import proxy from './proxy';

export function WebComponent(name, options) {
  return function (target) {
    target = applyMiddleware(
      connectedCallback(options),
      attributeChangedCallback,
      proxy
    )(target)

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

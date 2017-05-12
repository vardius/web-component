import applyMiddleware from './applyMiddleware'
import setTemplate from './middleware/setTemplate'
import setStyles from './middleware/setStyles'

export default original => options => {
  const cb = original.prototype.connectedCallback;
  original.prototype.connectedCallback = function () {
    let target = this;
    if (options.shadowDOM === true) {
      let shadowRoot = constructor.shadowRoot;
      if (!shadowRoot) {
        shadowRoot = constructor.attachShadow({
          mode: 'open'
        });
      }
      target = shadowRoot
    }

    applyMiddleware(setTemplate, setStyles)(target)(options)

    if (cb) {
      cb.call(this);
    }
  }

  return original;
}

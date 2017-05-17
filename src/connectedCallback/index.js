import applyMiddleware from './../applyMiddleware';
import setTemplate from './setTemplate';
import setStyles from './setStyles';

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

    const oAttr = this.observedAttributes();
    if (oAttr.indexOf(name) > -1) {
      this['_' + name] = this.getAttribute(name);
    }

    if (cb) {
      cb.call(this);
    }
  }

  return original;
}

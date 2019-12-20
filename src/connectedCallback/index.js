import { applyOptionsMiddleware } from "./../middleware";
import setTemplate from "./setTemplate";
import setStyles from "./setStyles";

export default options => original => {
  const cb = original.prototype.connectedCallback;
  original.prototype.connectedCallback = function() {
    let target = this;
    if (options.shadowDOM === true) {
      let shadowRoot = target.shadowRoot;
      if (!shadowRoot) {
        shadowRoot = target.attachShadow({
          mode: options.mode ? options.mode : "open"
        });
      }
      target = shadowRoot;
    }

    applyOptionsMiddleware(setTemplate, setStyles)(target)(options);

    const oAttr = original.observedAttributes;
    if (oAttr && oAttr.indexOf(name) > -1) {
      this["_" + name] = this.getAttribute(name);
    }

    if (cb) {
      cb.call(this);
    }
  };

  return original;
};

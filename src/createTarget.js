import applyMiddleware from './applyMiddleware'
import setTemplate from './middleware/setTemplate'
import setStyles from './middleware/setStyles'

export default original => options => {
  return function (...args) {
    let constructor = original.apply(this, args);
    let target = constructor;

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

    return constructor;
  }
}

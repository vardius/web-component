export default original => {
  const oAttr = original.observedAttributes;

  if (oAttr) {
    oAttr.forEach(name => {
      Object.defineProperty(original.prototype, name, {
        get: function () {
          return this['_' + name];
        },
        set: function (value) {
          this.setAttribute(name, value);
        },
        configurable: true
      });
    });
  }

  return original;
}

export default original => {
  const oAttr = original.observedAttributes;

  if (oAttr && oAttr.indexOf(name) > -1) {
    oAttr.forEach(name => {
      Object.defineProperty(original.prototype, '_' + name, {
        get: function () {
          return this.attributes['_' + name];
        },
        set: function (value) {
          this.setAttribute(name, value);
        },
        configurable: true,
        writable: true
      });
    });
  }

  return original;
}

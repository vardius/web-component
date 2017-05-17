export default original => () => {
  const ac = original.prototype.attributeChangedCallback;
  original.prototype.attributeChangedCallback = function (name, oldValue, newValue) {
    const oAttr = this.observedAttributes();
    if (oAttr.indexOf(name) > -1) {
      this['_' + name] = newValue;
    }

    if (ac) {
      ac();
    }
  }

  return original;
}

export default original => () => {
  const ac = original.prototype.attributeChangedCallback;
  original.prototype.attributeChangedCallback = function (name, oldValue, newValue) {
    if (!(name in this)) {
      this['_' + name] = newValue;
    }

    if (ac) {
      ac();
    }
  }

  return original;
}

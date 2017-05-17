export default original => () => {
  const names = Object.getOwnPropertyNames(original.prototype);

  const getters = names.filter((name) => {
    const result = Object.getOwnPropertyDescriptor(original.prototype, name);
    return !!result.get;
  });

  const setters = names.filter((name) => {
    const result = Object.getOwnPropertyDescriptor(original.prototype, name);
    return !!result.set;
  });


  const handler = {
    get(target, name) {
      if (getters.indexOf(name) != -1) {
        return target[name];
      }

      return undefined;
    },

    set(target, name, value) {
      const oAttr = this.observedAttributes();
      if (oAttr.indexOf(name) > -1) {
        this.setAttribute(name, value);
      }

      if (setters.indexOf(name) != -1) {
        this['_' + name] = value;
      }

      return true;
    }
  };

  return new Proxy(original, handler);
}

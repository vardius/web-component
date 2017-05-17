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

      throw new Error('Getter "' + name + '" not found');
    },

    set(target, name, value) {
      if (setters.indexOf(name) != -1) {
        this.setAttribute(name, value);
        this['_' + name] = value;

        return true;
      }

      throw new Error('Setter "' + name + '" not found');
    }
  };

  return new Proxy(original, handler);
}

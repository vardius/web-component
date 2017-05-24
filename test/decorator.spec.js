import { WebComponent } from './../src';

class TestComponent extends HTMLElement {
  constructor() {
    super();
    }
}

window.customElements = {
  elements: [],
  define: (name, target) => window.customElements.elements[name] = target,
  get: name => window.customElements.elements[name],
}

describe('Decorator', () => {
  it('creates component', () => {
    const component = WebComponent('test-component')(TestComponent);
    expect(component).toBeDefined();

    const expected = customElements.get('test-component');
    expect(expected).toBeDefined();
  })
});

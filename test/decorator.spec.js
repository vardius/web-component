import {
  WebComponent
} from './../src';

//extends HTMLElement
class TestComponent {
  constructor() {
    // super();

    this.attribute = false;
    this.connected = false;
  }

  static get observedAttributes() {
    return ['name'];
  }

  attributeChangedCallback() {
    this.attribute = true;
  }

  connectedCallback() {
    this.connected = true;
  }

  setAttribute(name, value) {
    this.attributeChangedCallback(name, 'old', value);
  }
}

window.customElements = {
  elements: [],
  define: (name, target) => window.customElements.elements[name] = target,
  get: name => window.customElements.elements[name],
}

describe('Decorator', () => {
  it('creates component', () => {
    const DecoratedClass = WebComponent('test-component')(TestComponent);
    expect(DecoratedClass).toBeDefined();

    let component = new TestComponent();
    component.name = 'test';
    expect(component.name).toEqual('test');
    expect(component.attribute).toEqual(true);

    component.connectedCallback();
    expect(component.connected).toEqual(true);

    const expected = customElements.get('test-component');
    expect(expected).toBeDefined();
  })
});

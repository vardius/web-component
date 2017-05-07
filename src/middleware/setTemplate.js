export default target => options => {
  const template = createTemplate(options.template);
  if (template) {
    target.appendChild(template);
  }

  return options
}

function createTemplate(template) {
  if (!template) {
    return null
  }

  let t = document.createElement('template');
  t.innerHTML = template;

  return t.content.cloneNode(true)
}

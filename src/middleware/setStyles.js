export default target => options => {
  const styles = createStyles(options.styles);
  if (styles) {
    target.appendChild(styles);
  }

  return options
}

function createStyles(styles) {
  if (!styles) {
    return null
  }
  let s = document.createElement('style');
  s.textContent = styles;

  return s;
}

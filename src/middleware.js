export function applyMiddleware(...middlewares) {
  return target => {
    return compose(...middlewares)(target)
  }
}

export function applyOptionsMiddleware(...middlewares) {
  return target => options => {
    const chain = middlewares.map(middleware => middleware(target))
    return compose(...chain)(options)
  }
}

function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

import {
  applyMiddleware
} from './../src/middleware';

function thunk(original) {
  original.id = 'done';
  return original;
}

describe('Middleware', () => {
  it('wraps dispatch method with middleware once', () => {
    const spy = jest.fn();
    spy(thunk);

    const target = applyMiddleware(thunk)({
      id: 'test'
    });

    expect(spy.mock.calls.length).toEqual(1)
    expect(target.id).toEqual('done')
  })
});

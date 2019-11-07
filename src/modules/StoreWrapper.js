export default class StoreWrapper {
  constructor(store, middleware) {
    this.store = store;
    this.middleware = middleware;
  }

  dispatch(action) {
    this.middleware(
        this.store.dispatch.bind(this.store), action,
        this.store.getState.bind(this.store),
    );
  }

  getState() {
    return this.store.getState();
  }

  subscribe(...args) {
    this.store.subscribe(...args);
  }
}

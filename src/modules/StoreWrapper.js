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

  get state() { 
    return this.store.state;
  }
  // getState() {
  //   return this.store.getState();
  // }

  setState(state) {
    return this.store.setState(state);
  }

  mutated(...args) {
    return this.store.mutated(...args);
  }

  pumpMutation(mutation) {
    return this.store.pumpMutation(mutation);
  }

  subscribe(...args) {
    this.store.subscribe(...args);
  }
}

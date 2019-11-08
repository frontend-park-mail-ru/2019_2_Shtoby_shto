export default class StoreSaver {
  constructor(store, key='state') {
    this.store = store;
    this.key = key;
  }

  save(state) {
    const stateStringified = JSON.stringify(state);

    localStorage.setItem(this.key, stateStringified);
  }

  startSynchronizing() {
    const prevState = localStorage.getItem(this.key);

    if (!prevState) {
      this.save(this.store.getState());
    } else {
      console.log('prev state:', prevState);
      const jsonedState = JSON.parse(prevState);

      this.store.setState({});
      this.store.mutated(jsonedState);
      this.store.setState(jsonedState);
    }

    this.store.subscribe(this.save.bind(this));
  }
}

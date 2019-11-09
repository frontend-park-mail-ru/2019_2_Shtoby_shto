export default class StoreSaver {
  constructor(store, key='state') {
    this.store = store;
    this.key = key;
  }

  save(state) {
    const stateStringified = JSON.stringify(state);

    try {
      localStorage.setItem(this.key, stateStringified);
    } catch (e) {
      console.log(e);
    }
  }

  startSynchronizing() {
    let prevState = undefined;

    try {
      prevState = localStorage.getItem(this.key);
    } catch (e) {
      console.log(e);
    }

    if (!prevState) {
      this.save(this.store.getState());
    } else {
      const jsonedState = JSON.parse(prevState);

      this.store.setState({});
      this.store.mutated(jsonedState);
      this.store.setState(jsonedState);
    }

    this.store.subscribe(this.save.bind(this));
  }
}

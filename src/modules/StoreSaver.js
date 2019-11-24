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
    let prevState = this.store.state;

    try {
      prevState = localStorage.getItem(this.key);

      if (!prevState) {
        this.save(this.store.state);
      } else {
        const jsonedState = JSON.parse(prevState);
        this.store.setState(jsonedState);
      }
    } catch (e) {
      console.log(e);
    }

    this.store.subscribe(this.save.bind(this));
  }
}

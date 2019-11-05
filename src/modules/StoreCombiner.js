import Store from '../modules/Store';

export default class StoreCombiner extends Store {
  constructor(storesWithNames) {
    super({});

    this.stores = {...storesWithNames};

    Object.entries(this.stores).forEach(([name, store]) => {
      this.state[name] = store.getState();
    });
  }

  reducer(state, action) {
    const nextState = {};

    let mutated = false;

    Object.entries(this.stores).forEach(([name, store]) => {
      nextState[name] = store.reducer(state[name], action);

      if (!mutated) {
        mutated = this.state[name] != nextState[name];
      }
    });

    return mutated ? nextState : this.state;
  }
}

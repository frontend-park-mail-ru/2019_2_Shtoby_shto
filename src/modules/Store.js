export default class Store {
  constructor(initialState) {
    this.state = initialState;

    this.listeners = [];
  }

  dispatch(action) {
    const newState = this.reducer(this.state, action);
    if (newState != this.state) {
      this.mutated(newState);
      this.state = newState;
    }
  }

  mutated(mutatedState) {
    this.listeners.forEach((l) => {
      l(mutatedState);
    });
  }

  subscribe(fun, selector) {
    if (selector) {
      const filter = this.makeFilter(selector);

      this.listeners.push((mutation) => {
        const filtered = filter(mutation);
        if (filtered) {
          fun(filtered);
        }
      });
    } else {
      this.listeners.push(fun);
    }
  }

  makeFilter(selector) {
    return (mutation) => {
      let selectedOldProps = undefined;
      let selectedNewProps = undefined;

      let gotOld = false;
      let gotNew = false;

      try {
        selectedOldProps = selector(this.state);
        gotOld = true;
      } catch (e) {}

      try {
        selectedNewProps = selector(mutation);
        gotNew = true;
      } catch (e) {}

      switch (gotOld) {
        case false:
          switch (gotNew) {
            case false:
              return;
            case true:
              return selectedNewProps;
          }
        case true:
          switch (gotNew) {
            case false:
              return selectedNewProps;
            case true:
              if (selectedOldProps != selectedNewProps) {
                return selectedNewProps;
              }
              return;
          }
      }
    };
  }

  getState() {
    return this.state;
  }

  reducer(state, action) {}
}

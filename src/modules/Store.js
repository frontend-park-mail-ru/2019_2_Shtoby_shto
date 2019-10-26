export default class Store {
  constructor(reducer, initialState) {
    this.reducer = reducer;
    this.state = initialState;
  }

  dispatch(action) {
    state = reducer(state, action);
  }

  getState() {
    return state;
  }
}

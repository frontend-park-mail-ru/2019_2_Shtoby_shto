export default class Store {
  constructor(reducer, initialState) {
    this.reducer = reducer;
    this.state = initialState;
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
  }

  getState() {
    return this.state;
  }
}

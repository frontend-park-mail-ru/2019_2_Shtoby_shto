import Store from '../modules/Store';

export default class BoardStore extends Store {
  constructor() {
    super([]);
  }

  reducer(state, action) {
    switch (action.type) {
      case 'NEW_BOARD':
        return [
          ...state,
          {
            id: action.id,
            name: action.name,
            cards: action.cards || [],
          },
        ];
      default:
        return state;
    }
  }
}

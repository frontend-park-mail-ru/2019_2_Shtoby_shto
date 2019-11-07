import Store from '../modules/Store';

export default class BoardStore extends Store {
  constructor() {
    super([]);
  }

  reducer(state, action) {
    switch (action.type) {
      case 'ADD_BOARD':
        return [
          ...state,
          {
            id: action.id,
            name: action.name,
            cardGroups: action.cardGroups || [],
          },
        ];
      case 'CLEAR_BOARDS':
        return [];
      default:
        return state;
    }
  }
}

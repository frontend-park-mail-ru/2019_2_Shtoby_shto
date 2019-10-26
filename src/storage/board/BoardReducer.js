import Board from './Board';

export default function boardReducer(state, action) {
  switch (action.type) {
    case 'new_board':
      return [
        ...state,
        new Board(action.boardName)
      ]
    default:
      return state;
  }
}

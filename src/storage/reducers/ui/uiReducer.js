export default function uiReducer(state, action) {
  switch (action.type) {
    case 'SELECT_BOARD':
      return {
        ...state,
        selectedIndex: action.index,
      };
    case 'DESELECT_BOARD':
      return {
        ...state,
        selectedIndex: undefined,
      };
    case 'RESET':
      return {};
    default:
      return state;
  }
}

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
    case 'SELECT_UPPER':
      return {
        ...state,
        selectedIndex: state.selectedIndex ?
        state.selectedIndex + 1 : undefined,
      };
    case 'SELECT_LOWER':
      return {
        ...state,
        selectedIndex: state.selectedIndex ?
        state.selectedIndex - 1 : undefined,
      };
    case 'RESET':
      return {};
    default:
      return state;
  }
}

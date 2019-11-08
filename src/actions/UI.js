export function selectBoard(index) {
  return {
    type: 'SELECT_BOARD',
    index: index + 1,
  };
}

export function deselectBoard(index) {
  return function(dispatch, getState) {
    if (getState()['ui'].selectedIndex === index + 1) {
      dispatch({
        type: 'DESELECT_BOARD',
      });
    }
  };
}

export function reset() {
  return {
    type: 'RESET',
  };
}

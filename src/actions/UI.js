export function selectBoard(index) {
  return {
    type: 'SELECT_BOARD',
    index: index,
  };
}

export function deselectBoard() {
  return {
    type: 'DESELECT_BOARD',
  };
}

export function selectUpper() {
  return {
    type: 'SELECT_UPPER',
  };
}

export function selectLower() {
  return {
    type: 'SELECT_LOWER',
  };
}

export function tryDeselect(id) {
  return function(dispatch, getState) {
    const selectedIndex = getState().ui.selectedIndex;

    if (typeof selectedIndex !== 'undefined') {
      let deletedIndex = undefined;

      getState().boards.forEach((b, index) => {
        if (b.id == id) {
          deletedIndex = index;
        }
      });

      if (deletedIndex === selectedIndex) {
        dispatch(deselectBoard());
      } else if (deletedIndex < selectedIndex) {
        dispatch(selectLower());
        // dispatch(selectBoard(selectedIndex - 1));
      }
    }
  };
}

export function reset() {
  return {
    type: 'RESET',
  };
}

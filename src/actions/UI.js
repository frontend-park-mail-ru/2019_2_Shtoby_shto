export function showCard(card) {
  return {
    type: 'OPEN_MODAL',
    card: card,
  };
}

export function closeModal() {
  return {
    type: 'CLOSE_MODAL',
  };
}

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
  return function(dispatch, getState) {
    if (getState().ui.selectedIndex > 0) {
      dispatch({
        type: 'SELECT_UPPER',
      });
    }
  };
}

export function selectLower() {
  return function(dispatch, getState) {
    if (getState().ui.selectedIndex < getState().boards.length - 1) {
      dispatch({
        type: 'SELECT_LOWER',
      });
    }
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
        dispatch(selectUpper());
      }
    }
  };
}

export function reset() {
  return {
    type: 'RESET',
  };
}

import BoardApi from '../apis/BoardApi';

import {fakeBoards, makeFakeBoard} from './fakes/fakeBoards';
import {fake} from './fakes/fake';

import * as uiActions from './UI';

const boardApi = new BoardApi();

function addBoard(boardModel) {
  return {
    type: 'ADD_BOARD',
    ...boardModel,
  };
}

function fillBoard(boardModel) {
  return {
    type: 'FILL_BOARD',
    ...boardModel,
    // id: board.id,
    // name: board.name,
    // cardGroups: board['card_groups'],
  };
}

export function getBoard(id) {
  return function(dispatch) {
    boardApi.fetchBoard(id)
        .then((board) => {
          dispatch(fillBoard(board));
        });
  };
}

export function create(name) {
  return function(dispatch) {
    if (!fake) {
      boardApi.createBoard(name).then((board) => {
        dispatch(addBoard({...board, cardGroups: board['card_groups']}));
      });
    } else {
      dispatch(addBoard(makeFakeBoard(name, name, [])));
    }
  };
}

export function fetchBoards() {
  return function(dispatch, getState) {
    if (!fake) {
      boardApi.fetchBoards(getState().user.id).then((boards) => {
        boards.forEach((board) => {
          dispatch(addBoard({...board, cardGroups: board['card_groups']}));
        });
      });
    } else {
      fakeBoards.forEach((b) => {
        dispatch(addBoard(b));
      });
    }
  };
}

function trueDeleteBoard(id) {
  return function(dispatch) {
    dispatch(uiActions.tryDeselect(id));

    dispatch({
      type: 'DELETE_BOARD',
      id: id,
    });
  };
}

export function deleteBoard(id) {
  return function(dispatch) {
    if (!fake) {
      boardApi.deleteBoard(id)
          .then(() => {
            dispatch(trueDeleteBoard(id));
          });
    } else {}
  };
}

function trueUpdateBoard(id, name) {
  return {
    type: 'UPDATE_BOARD',
    id: id,
    name: name,
  };
}

export function updateBoard(id, name) {
  return function(dispatch) {
    if (!fake) {
      boardApi.updateBoard(id, name)
          .then(() => {
            dispatch(trueUpdateBoard(id, name));
          });
    }
  };
}

export function insertAfter(index, indexAfter) {
  return function(dispatch, getState) {
    if (indexAfter - index !== 1) {
      dispatch({
        type: 'INSERT_AFTER',
        which: index,
        after: indexAfter,
      });

      const selectedIndex = getState().ui.selectedIndex;

      if (typeof selectedIndex !== 'undefined') {
        if (selectedIndex === index) {
          dispatch(uiActions.selectBoard(indexAfter));
        } else if (selectedIndex >= indexAfter) {
          dispatch(uiActions.selectLower());
        }
      }
    }
  };
}

export function insertBefore(index, indexBefore) {
  console.log(index, indexBefore);

  return function(dispatch, getState) {
    if (index - indexBefore !== 1) {
      dispatch({
        type: 'INSERT_BEFORE',
        which: index,
        before: indexBefore,
      });

      const selectedIndex = getState().ui.selectedIndex;

      if (typeof selectedIndex !== 'undefined') {
        if (selectedIndex === index) {
          dispatch(uiActions.selectBoard(indexBefore));
        } else if (index < selectedIndex) {
          dispatch(uiActions.selectUpper());
        } else if (selectedIndex === indexBefore) {
          dispatch(uiActions.selectUpper());
        } else if (selectedIndex > indexBefore) {
          dispatch(uiActions.selectLower());
        }
      }
    };
  };
}


export function shiftFrom(index) {
  return {
    type: 'SHIFT_FROM',
    index: index,
  };
}

export function shiftIncluding(index) {
  return {
    type: 'SHIFT_INCLUDING',
    index: index,
  };
}

export function clearStore() {
  return {
    type: 'CLEAR_BOARDS',
  };
}



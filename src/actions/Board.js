import BoardApi from '../apis/BoardApi';

import {fakeBoards, makeFakeBoard} from './fakes/fakeBoards';
import {fake} from './fakes/fake';

const boardApi = new BoardApi();

function addBoard(boardModel) {
  return {
    type: 'ADD_BOARD',
    ...boardModel,
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

export function clearStore() {
  return {
    type: 'CLEAR_BOARDS',
  };
}

// export function create(name) {
//   return {
//     type: 'NEW_BOARD',
//     id: 1,
//     name: name,
//   };
// }

// export function update() {

// }

// export function remove() {

// }


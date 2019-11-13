import BoardApi from '../apis/BoardApi';

const boardApi = new BoardApi();

function trueCreateGroup(groupModel) {
  return {
    type: 'CREATE_GROUP',
    boardId: groupModel['board_id'],
    cards: groupModel.cards,
    id: groupModel.id,
    name: groupModel.name,
  };
}

export function createGroup(name) {
  return function(dispatch, getState) {
    const selectedBoard = getState()['ui']['selectedIndex'];
    const boardId = getState()['boards'][selectedBoard].id;

    boardApi.createGroup(name, boardId)
        .then((group) => {
          dispatch(trueCreateGroup(group));
        });
  };
}

export function deleteGroup(id) {
  return function(dispatch) {
    boardApi.deleteGroup(id)
        .then(() => {
          dispatch({
            type: 'DELETE_GROUP',
            id: id,
          });
        });
  };
}


function editGroup(boardId, groupId, name) {
  return {
    type: 'EDIT_GROUP',
    id: groupId,
    name: name,
    boardId: boardId,
  };
}

export function swapGroup(groupId1, groupId2) {
  return {
    type: 'SWAP_GROUP',
    which: groupId1,
    where: groupId2,
  };
}

export function rename(name, boardId, id) {
  return function(dispatch) {
    boardApi.renameGroup(name, boardId, id)
        .then((groupModel) => {
          console.log(groupModel),
          dispatch(editGroup(
              groupModel['board_id'],
              groupModel.id,
              groupModel.name,
          ));
        });
  };
}

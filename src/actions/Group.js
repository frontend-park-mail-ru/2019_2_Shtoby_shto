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
    const boardId = getState()['boards'][selectedBoard - 1].id;

    boardApi.createGroup(name, boardId)
        .then((group) => {
          dispatch(trueCreateGroup(group));
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

import BoardApi from '../apis/BoardApi';

const boardApi = new BoardApi();

function addCard(cardModel) {
  return {
    type: 'ADD_CARD',
    id: cardModel.id,
    caption: cardModel.caption,
    priority: cardModel.priority,
    cardGroupId: cardModel['card_group_id'],
    tasks: cardModel.tasks,
  };
}

export function createCard(caption, cardGroupId) {
  return function(dispatch) {
    boardApi.createCard(caption, cardGroupId)
        .then((card) => {
          dispatch(addCard(card));
        });
  };
}

function updateCard(cardModel) {
  console.log(cardModel);
  return {
    type: 'UPDATE_CARD',
    id: cardModel.id,
    caption: cardModel.caption,
    priority: 0,
    boardId: cardModel['board_id'],
    cardUserId: cardModel['card_user_id'],
    cardGroupId: cardModel['card_group_id'],
  };
}

// {
// "caption": "В работе",
// "priority": 0,
// "board_id": "0eeee470-0cd9-442c-b302-e04ddd69233f",
// "card_user_id": "",
// "card_group_id": "503510af-c577-46d7-b33d-598f41c0fba4",
// "id": "da2303a7-5123-4f6b-98a8-2abaa72cc8b0"
// }

export function setCaption(
    cardId, newCaption, priority, boardId, cardUserId, cardGroupId) {
  return function(dispatch) {
    boardApi.updateCard(cardId, newCaption, priority,
        boardId, cardUserId, cardGroupId)
        .then((cardModel) => {
          dispatch(updateCard(cardModel));
        });
  };
}

export function deleteCard(id) {
  return function(dispatch) {
    boardApi.deleteCard(id)
        .then(() => {
          dispatch({
            type: 'DELETE_CARD',
            id: id,
          });
        });
  };
}

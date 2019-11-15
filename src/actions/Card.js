import BoardApi from '../apis/BoardApi';

const boardApi = new BoardApi();

function addCard(cardModel) {
  return function(dispatch, getState) {
    dispatch({
      type: 'ADD_CARD',
      id: cardModel.id,
      caption: cardModel.caption,
      priority: cardModel.priority,
      cardGroupId: cardModel['card_group_id'],
      tasks: cardModel.tasks,
      users: [getState().user.id],
    });
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
  return {
    type: 'UPDATE_CARD',
    id: cardModel.id,
    caption: cardModel.caption,
  };
}

export function setCaption(
    cardId, newCaption) {
  return function(dispatch) {
    boardApi.updateCard(cardId, newCaption)
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

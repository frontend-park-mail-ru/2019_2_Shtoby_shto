import BoardApi from '../apis/BoardApi';

const boardApi = new BoardApi();

function addCard(cardModel) {
  return function(dispatch, getState) {
    const newModel = {};

    Object.entries(cardModel).forEach(([name, value]) => {
      if (name !== 'card_group_id') {
        if (name !== 'type') {
          newModel[name] = value ? value : (name === 'text' ? '' : []);
        }
      } else {
        newModel['cardGroupId'] = value;
      }
    });

    dispatch({
      type: 'ADD_CARD',
      ...{
        ...newModel,
        users: [getState().user.id],
      },
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

function updateCard(id, update) {
  return {
    type: 'UPDATE_CARD',
    id,
    update,
    // id: cardModel.id,
    // caption: cardModel.caption,
    // text: cardModel.text,
  };
}

export function setCaption(
    cardId, newCaption) {
  return function(dispatch) {
    boardApi.updateCard(cardId, {caption: newCaption})
        .then(() => {
          dispatch(updateCard(cardId, {caption: newCaption}));
        });
  };
}

export function setText(
    cardId, newText) {
  return function(dispatch) {
    boardApi.updateCard(cardId, {text: newText})
        .then(() => {
          dispatch(updateCard(cardId, {text: newText}));
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

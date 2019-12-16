import BoardApi from '../apis/BoardApi';

// import * as boardActions from './Board';

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
  };
}

// function getBoardId(state, cardId) {
//   let foundId = undefined;

//   const {boards} = state;

//   boards.forEach((b) => {
//     b.cardGroups.forEach((gr) => {
//       gr.cards.forEach((c) => {
//         if (c.id === cardId) {
//           foundId = b.id;
//         }
//       });
//     });
//   });

//   return foundId;
// }

export function addComment(cardId, comment) {
  return function(dispatch, getState) {
    const state = getState();
    const userId = state.user.id;

    boardApi.addComment(cardId, userId, comment)
        .then((comment) => {
          dispatch({
            type: 'ADD_COMMENT',
            comment: comment,
          });
        });
  };
}

export function addTag(cardId, text, color) {
  return function(dispatch) {
    boardApi.addTag(cardId, text, color).then(() => {
      boardApi.getCard(cardId)
          .then((res) => {
            dispatch(updateCard(cardId, res));
          });
    });
  };
}

export function deleteTag(tagId, cardId) {
  return function(dispatch) {
    boardApi.deleteTag(tagId).then(() => {
      boardApi.getCard(cardId)
          .then((res) => {
            dispatch(updateCard(cardId, res));
          });
    });
  };
}

export function changeDeadline(cardId, date) {
  return function(dispatch) {
    boardApi.changeDeadline(cardId, date).then(() => {
      boardApi.getCard(cardId)
          .then((res) => {
            dispatch(updateCard(cardId, res));
          });
    });
  };
}

export function downloadAttachment(cardId) {
  return function() {
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = `https://hb.bizmrg.com/photo_storage/${cardId}`;
    a.download = 'attachment';
    document.body.appendChild(a);
    a.click();
  };
}

export function uploadAttachment(cardId, file) {
  return function(dispatch) {
    boardApi.uploadFile(cardId, file)
        .then(() => {
          boardApi.getCard(cardId).then((res) => {
            dispatch(updateCard(cardId, res));
          });
        });
  };
}


export function deleteComment(id) {
  return function(dispatch) {
    boardApi.deleteComment(id)
        .then(() => {
          dispatch({type: 'DELETE_COMMENT', id});
        });
  };
}

export function attachUser(userId, cardId) {
  return function(dispatch) {
    boardApi.attachUserToCard(userId, cardId)
        .then(() => {
          dispatch({type: 'CARD_ATTACH', userId, cardId});
        });
  };
}

export function detachUser(userId, cardId) {
  return function(dispatch) {
    boardApi.detachUserFromCard(userId, cardId)
        .then(() => {
          dispatch({type: 'CARD_DETACH', userId, cardId});
        });
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

// export function getAttachLink() {
//   return this.board_id;
// }

import Ajax from './Ajax';

class BoardService {
  constructor(addr) {
    this.ajax = new Ajax(addr);
  }

  getBoards(uid) {
    return this.ajax.jsonRequest('GET', `/board/user/${uid}`);
  }

  getBoard(id) {
    return this.ajax.jsonRequest('GET', `/board/${id}`);
  }

  getGroup(id) {
    return this.ajax.jsonRequest('GET', `/card-group/${id}`);
  }

  deleteBoard(id) {
    return this.ajax.request('DELETE', `/board/${id}`);
  }

  deleteGroup(id) {
    return this.ajax.request('DELETE', `/card-group/${id}`);
  }

  deleteCard(id) {
    return this.ajax.request('DELETE', `/cards/${id}`);
  }

  changeGroup(group) {
    return this.ajax.jsonRequest('PUT', `/card-group/${group.id}`, group);
  }

  createBoard(boardName) {
    return this.ajax.jsonRequest('POST', '/board', {
      'name': `${boardName}`,
    });
  }

  createGroup(groupName, boardId) {
    return this.ajax.jsonRequest('POST', '/card-group', {
      'name': `${groupName}`,
      'board_id': boardId,
    });
  }

  createCard(cardCaption, priority, cardGroupId, boardId) {
    return this.ajax.jsonRequest('POST', '/cards', {
      'caption': cardCaption,
      'priority': priority,
      'card_group_id': cardGroupId,
      'board_id': boardId,
    });
  }

  createTask(text, cardId) {
    return this.ajax.jsonRequest('POST', '/tasks', {
      'text': text,
      'card_id': cardId,
    });
  }

  registerEvents(bus) {
    bus.on('new_board', (boardReq) => {
      this.createBoard(boardReq.name)
          .then((board) => {
            bus.emit('got_board', {
              board: board,
              uid: boardReq.uid,
            });
          });
    });

    bus.on('new_group', (groupReq) => {
      this.createGroup(
          groupReq.name,
          groupReq.boardId
      )
          .then((group) => {
            bus.emit('got_group', {
              group: group,
              uid: groupReq.uid,
            });
          });
    });

    bus.on('new_card', (cardReq) => {
      this.createCard(
          cardReq.caption,
          cardReq.priority,
          cardReq.groupId,
          cardReq.boardId
      )
          .then((card) => {
            bus.emit('got_card', {
              card: card,
              uid: cardReq.uid,
            });
          });
    });

    bus.on('new_task', (newTask) => {
      console.log(newTask);
      this.createTask(
          newTask.text,
          newTask.cardId
      )
          .then((task) => {
            bus.emit('got_task', task);
          });
    });

    bus.on('delete_board', (id) => {
      this.deleteBoard(id)
          .then(() => {
            bus.emit('deleted_board', id);
          });
    });

    bus.on('delete_card', (id) => {
      this.deleteCard(id)
          .then(() => {
            bus.emit('deleted_card', id);
          });
    });

    bus.on('delete_group', (id) => {
      this.deleteGroup(id)
          .then(() => {
            bus.emit('deleted_group', id);
          });
    });


    bus.on('rename_group', (groupReq) => {
      console.log(groupReq);
      this.changeGroup({
        id: groupReq.group.id, name: groupReq.newName,
      })
          .then((group) => {
            bus.emit('group_changed', group);
          });
    });

    bus.on('get_board', (boardReq) => {
      this.getBoard(boardReq.id)
          .then((board) => {
            bus.emit('got_board', {
              board: board,
              uid: boardReq.uid,
            });
          });
    });

    bus.on('get_group', (groupReq) => {
      this.getGroup(groupReq.id)
          .then((group) => {
            bus.emit('got_board', {
              group: group,
              uid: groupReq.uid,
            });
          });
    });

    bus.on('get_card', (cardReq) => {
      this.getGroup(cardReq.id)
          .then((card) => {
            bus.emit('got_card', {
              card: card,
              uid: cardReq.uid,
            });
          });
    });

    bus.on('fetch_boards', (uid) => {
      this.getBoards(uid)
          .then((boards) => {
            bus.emit('got_board_ids', boards);
          })
          .catch((err) => {
            console.log(err);
          });
    });
  }
}

export default BoardService;

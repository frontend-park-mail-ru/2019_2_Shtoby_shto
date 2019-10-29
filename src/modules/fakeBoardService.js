// import BoardStorage from '../storage/board/BoardStorage';

// function debugInit() {
//   BoardStorage.dispatch({type: 'new_board', board_name: 'board1'});
//   BoardStorage.dispatch({type: 'new_board', board_name: 'board2'});
//   BoardStorage.dispatch({
//     type: 'new_card',
//     board_name: 'board1',
//     card_caption: 'card1',
//   });

//   BoardStorage.dispatch({
//     type: 'new_task',
//     board_name: 'board1',
//     card_caption: 'card1',
//     task_id: 1,
//     task_text: 'make everythin cool',
//   });
// }

let counter = 0;

function makeCards(count, groups) {
  const retArr = [];

  for (let g = 0; g < groups; g++) {
    for (let i = 0; i < count; i++) {
      const tasks = [];
      for (let j = 0; j < i; j++) {
        tasks.push({
          text: `${i}_${j}`,
        });
      }

      retArr.push(
          {
            caption: `woah_${i}`,
            tasks: tasks,
            group: g,
          }
      );
    }
  }

  return retArr;
}

// function makeBoard(name, id, cards) {
//   return {
//     name: name,
//     id: id,
//     cards: cards
//   }
// }

function fakePostBoard(boardName) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      counter = counter + 1;

      resolve({
        name: boardName,
        board_users_id: 'f039f750-e6d2-46a9-a966-dc48c41c9d82',
        id: counter,
        cards: makeCards(0, 0),
      });
    },
    1500);
  });
}

function fakeGetBoards() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve([1, 2, 3]);
    },
    250);
  });
}

let otherCounter = 2;

function fakeGetBoard(id) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      otherCounter = otherCounter + 1;
      resolve({
        name: `board${id}`,
        board_users_id: 'f039f750-e6d2-46a9-a966-dc48c41c9d82',
        id: `${id}`,
        cards: makeCards(otherCounter, 2),
      });
    },
    450);
  });
}

class BoardService {
  getBoards() {
    return fakeGetBoards();
  }

  getBoard(id) {
    return fakeGetBoard(id);
  }

  createBoard(boardName) {
    return fakePostBoard(boardName);
  }

  registerEvents(bus) {
    bus.on('new_board', (boardName) => {
      this.createBoard(boardName)
          .then((board) => {
            bus.emit('got_board', board);
          });
    });

    bus.on('get_board', (boardId) => {
      this.getBoard(boardId)
          .then((board) => {
            bus.emit('got_board', board);
          });
    });

    bus.on('fetch_boards', () => {
      this.getBoards()
          .then((boardIds) => {
            bus.emit('got_board_ids', boardIds);
          });
    });
  }
}

export default BoardService;

import Board from './Board';
import Card from './Card';
import Task from './Task';

// обёртка для массива тасок
class TaskSelector {
  constructor(tasks, taskId) {
    this.task = null;

    tasks.forEach((task) => {
      if (task.id === taskId) {
        this.task = task;
      }
    });
  }

  setText(text) {
    if (this.task) {
      this.task.text = text;
    }

    return this;
  }

  setDone(done) {
    if (this.task) {
      this.task.done = done;
    }

    return this;
  }
}

// обёртка для массива карточек
class CardSelector {
  constructor(cards, cardCaption) {
    this.card = null;

    cards.forEach((card) => {
      if (card.caption === cardCaption) {
        this.card = card;
      }
    });
  }

  getTask(taskId) {
    let tasks = [];

    if (this.card) {
      tasks = this.card.tasks;
    }

    return new TaskSelector(tasks, taskId);
  }

  addTask(id, text, done) {
    if (this.card) {
      // обработка случая когда в done находится undefined
      done = false;
      if (done) {
        done = true;
      }

      this.card.tasks.push(new Task(id, text, done));
    }

    return this;
  }
}

// обёртка для массива досок
class BoardSelector {
  constructor(boards, boardName) {
    this.board = null;

    boards.forEach((board) => {
      if (board.name === boardName) {
        this.board = board;
      }
    });
  }

  getCard(cardName) {
    let cards = [];

    if (this.board) {
      cards = this.board.cards;
    }

    return new CardSelector(cards, cardName);
  }

  addCard(cardName) {
    if (this.board) {
      this.board.cards.push(new Card(cardName));
    }

    return this;
  }
}

function selectBoard(boards, boardName) {
  return new BoardSelector(boards, boardName);
}

export default function boardReducer(state, action) {
  switch (action.type) {
    case 'new_board':
      return [
        ...state,
        new Board(action.board_name),
      ];
    case 'new_card':
      selectBoard(state, action.board_name)
          .addCard(action.card_caption);
      return state;
    case 'new_task':
      selectBoard(state, action.board_name)
          .getCard(action.card_caption)
          .addTask(action.task_id, action.task_text, action.done);
      return state;
    default:
      return state;
  }
}

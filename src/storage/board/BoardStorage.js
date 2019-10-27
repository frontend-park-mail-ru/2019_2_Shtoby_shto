import Store from '../../modules/Store';
import boardReducer from './BoardReducer';

class BoardStore extends Store {
  constructor() {
    super(
        boardReducer,
        [], // доски
    );
  }
}

export default new BoardStore();

import Store from '../modules/Store';
import userReducer from './UserReducer';

class UserStore extends Store {
  constructor() {
    super({}, userReducer);
  }
}

export default new UserStore();

import MainView from './views/Main/MainView';
import LoginView from './views/Login/LoginView';
import ProfileView from './views/Profile/ProfileView';
import BoardView from './views/Board/BoardView';

const routes = {
  '/': MainView,
  '/login': LoginView,
  '/profile': ProfileView,
  '/board': BoardView,
};

export default routes;

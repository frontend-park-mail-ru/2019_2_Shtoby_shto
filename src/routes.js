import MainView from './views/Main/MainView';
import LoginView from './views/Login/LoginView';
import ProfileView from './views/Profile/ProfileView';
import BoardView from './views/Board/BoardView';
import LogoutView from './views/Logout/LogoutView';

const routes = {
  '/': MainView,
  '/login': LoginView,
  '/profile': ProfileView,
  '/board': BoardView,
  '/logout': LogoutView,
};

export default routes;

export default function routerReducer(state, action) {
  switch(action.type) {
    case 'REGISTER_ROUTER': {
      console.log(`tryna register router ${action.id}`);

      const defaultRoute = action.defaultRoute;
      const newState = {...state};

      const newRouter = {route: undefined, defaultRoute};
      if (action.defaultRoute) {
        newRouter.route = action.defaultRoute;
      }

      newState[action.id] = newRouter;

      return newState;
    }
    case 'RESET': {
      return {}
    }
    default:
      return state;
  }
}

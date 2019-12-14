export default function routerReducer(state, action) {
  switch(action.type) {
    case 'REGISTER_ROUTER': {
      console.log(`tryna register router ${action.id}`);

      const defaultRoute = action.defaultRoute;
      const newState = {...state};
      newState[action.id] = {route: defaultRoute ? defaultRoute : ""};

      return newState;
    }
    case 'RESET': {
      return {}
    }
    default:
      return state;
  }
}

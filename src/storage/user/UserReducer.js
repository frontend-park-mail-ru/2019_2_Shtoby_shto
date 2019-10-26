export default function userReducer(state, action) {
  switch (action.type) {
    case 'set_user':
      return {
        id: action.id,
        name: action.name,
        password: action.password,
      };

    default:
      return state;
  }
}

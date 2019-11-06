export default function thunkDispatcher(dispatch, action) {
  if (action instanceof Function) {
    action(dispatch);
  } else {
    dispatch(action);
  }
}

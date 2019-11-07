export default function thunkDispatcher(dispatch, action, getState) {
  if (action instanceof Function) {
    action((action) => {
      thunkDispatcher(dispatch, action, getState);
    }, getState);
  } else {
    dispatch(action, getState);
  }
}

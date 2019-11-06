export default function logger(dispatch, action) {
  console.log(action);
  dispatch(action);
}

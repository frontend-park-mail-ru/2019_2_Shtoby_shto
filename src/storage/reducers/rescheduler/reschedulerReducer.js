export default function rescheduledReducer(state, action) {
  switch (action.type) {
    case 'RESCHEDULE':
      return [...state, action.Thunk()];

    case 'RESCHEDULED':
      const retState = [...state];
      retState.shift();

      return retState;
  }
}

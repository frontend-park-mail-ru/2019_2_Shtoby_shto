export function reschedule(thunk, action) {
    return function (dispatch) {
        if (!navigator.onLine) {
            dispatch({
                type: 'RESCHEDULE',
                thunk,
            });
            dispatch(action);
        } else {
            dispatch({
                type: 'RESCHEDULED',
                thunk,
            });
            dispatch(action);
        }
    }
}
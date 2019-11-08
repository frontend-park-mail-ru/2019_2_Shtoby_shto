import Store from '../modules/Store';

export default class BoardStore extends Store {
  constructor() {
    super([]);
  }

  reducer(state, action) {
    switch (action.type) {
      case 'ADD_BOARD':
        return [
          ...state,
          {
            id: action.id,
            name: action.name,
            cardGroups: action.cardGroups || [],
          },
        ];

      case 'DELETE_BOARD':
        return state.filter((b) => {
          return b.id !== action.id;
        });

      case 'UPDATE_BOARD':
        return state.map((b) => {
          return b.id === action.id ?
            {...b, name: action.name} :
            b;
        });

      case 'CREATE_GROUP':
        return [...state.map((b) => {
          if (b.id === action.boardId) {
            const cardGroups = {
              id: action.id,
              boardId: action.boardId,
              name: action.name,
              cards: action.cards || [],
            };

            return {...b, cardGroups: [...(b.cardGroups), cardGroups]};
          }
          return {...b};
        })];

      case 'EDIT_GROUP':
        return [
          ...state.map((b) => {
            return b.id === action.boardId ?
            {...b, cardGroups: [
              ...b.cardGroups.map((gr) => {
                return gr.id === action.id ?
                {...gr, name: action.name} :
                {...gr};
              }),
            ]} :
            {...b};
          }),
        ];
      case 'FILL_BOARD':
        return [
          ...state.map((b) => {
            return b.id === action.id ?
              {...b,
                name: action.name,
                cardGroups: action.cardGroups,
                got: true,
              } : {...b, got: b.got || false};
          }),
        ];

      case 'INSERT_AFTER':
        if (action.after - action.which === 1) {
          return state;
        }

        const newState = [];
        const whatToInsert = state[action.which];

        state.forEach((b, i) => {
          if (!(i === action.which)) {
            if (i === action.after) {
              newState.push(whatToInsert);
            }
            newState.push(b);
          }
        });

        return newState;

      case 'INSERT_BEFORE':
        if (action.which - action.before === 1) {
          return state;
        }

        const newerState = [];
        const which = state[action.which];

        state.forEach((b, i) => {
          if (!(i === action.which)) {
            newerState.push(b);
            if (i === action.before) {
              newerState.push(which);
            }
          }
        });

        return newerState;

      case 'CLEAR_BOARDS':
        return [];
      default:
        return state;
    }
  }
}

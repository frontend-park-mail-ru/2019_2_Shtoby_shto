export default function boardReducer(state, action) {
  switch (action.type) {
    case 'ADD_BOARD':
      return [
        ...state,
        {
          id: action.model.id,
          name: action.model.name,
          cardGroups: action.model['card_groups'] || [],
          users: action.model.users,
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

    case 'SWAP_GROUP':
      return [
        ...state.map((b) => {
          const newBoard = {...b};

          let foundWhich = -1;
          let foundWhere = -1;

          b.cardGroups.forEach((gr, i) => {
            if (gr.id === action.which) {
              foundWhich = i;
            } else if (gr.id === action.where) {
              foundWhere = i;
            }
          });

          if (foundWhich > -1) {
            const newGroups = [];
            if (foundWhich < foundWhere) {
              b.cardGroups.forEach((gr, i) => {
                if (i !== foundWhich) {
                  newGroups.push(gr);
                  if (i === foundWhere) {
                    newGroups.push(b.cardGroups[foundWhich]);
                  }
                }
              });
            } else {
              b.cardGroups.forEach((gr, i) => {
                if (i !== foundWhich) {
                  if (i === foundWhere) {
                    newGroups.push(b.cardGroups[foundWhich]);
                  }
                  newGroups.push(gr);
                }
              });
            }

            newBoard.cardGroups = newGroups;
          }

          return newBoard;
        }),
      ];

    case 'DELETE_GROUP':
      return [
        ...state.map((b) => {
          return {...b, cardGroups: b.cardGroups.filter((gr) => {
            return gr.id !== action.id;
          })};
        }),
      ];

    case 'DELETE_CARD':
      return [
        ...state.map((b) => {
          return {...b, cardGroups: b.cardGroups.map((gr) => {
            return {...gr, cards: gr.cards.filter((c) => c.id !== action.id)};
          })};
        }),
      ];

    case 'ADD_CARD':
      return (() => {
        const cardModel = {};
        Object.entries(action).forEach(([name, value]) => {
          if (name !== 'type') cardModel[name] = value;
        });
        // const [type, ...cardModel] = action;
        // const cardGroupId = action['card_group_id'];

        return [
          ...state.map((b) => ({
            ...b, cardGroups: b.cardGroups.map((gr) => (
                gr.id === action.cardGroupId ?
                {...gr, cards: [...gr.cards, cardModel]} :
                gr
            )),
          })),
        ];
      })();

    case 'UPDATE_CARD':
      return [
        ...state.map((b) => {
          return {
            ...b, cardGroups: [
              ...b.cardGroups.map((gr) => {
                return {
                  ...gr, cards: [
                    ...gr.cards.map((c) => {
                      return c.id === action.id ?
                      {...c, ...action.update} :
                      {...c};
                    }),
                  ],
                };
              }),
            ],
          };
        }),
      ];
    case 'FILL_BOARD':
      return [
        ...(state.map((b) => {
          return b.id === action.model.id ?
            {...b,
              // ...action.model,
              cardGroups: action.model['card_groups'],
              users: action.model.users,
              // name: action.name,
              // cardGroups: action['card_groups'].map((gr) => {
              //   return {...gr, boardId: gr['board_id']};
              // }),
              got: true,
            } : {...b, got: b.got || false};
        })),
      ];

    case 'ADD_COMMENT':
      return state.map((b) => ({
        ...b, cardGroups: b.cardGroups.map((gr) => ({
          ...gr, cards: gr.cards.map((c) => ({
            ...c, comments: c.id === action.comment['card_id'] ?
              [...c.comments, action.comment] : c.comments,
          })),
        })),
      }));

    case 'DELETE_COMMENT':
      return state.map((b) => ({
        ...b, cardGroups: b.cardGroups.map((gr) => ({
          ...gr, cards: gr.cards.map((c) => ({
            ...c, comments: c.comments.filter((com) => (com.id !== action.id)),
            // ...c, comments: c.id === action.comment.cardId ?
            // c.comments.filter((com) => (com.id !== action.id)) : c.comments,
          })),
        })),
      }));

    case 'CARD_DETACH':
      return state.map((b) => ({
        ...b, cardGroups: b.cardGroups.map((gr) => ({
          ...gr, cards: gr.cards.map((c) => (
            c.id === action.cardId ?
            {...c, users: c.users.filter((userId) => (
              userId !== action.userId
            ))} :
            c
          )),
        })),
      }));

    case 'CARD_ATTACH':
      return state.map((b) => ({
        ...b, cardGroups: b.cardGroups.map((gr) => ({
          ...gr, cards: gr.cards.map((c) => (
            c.id === action.cardId ?
              c.users.filter(
                  (userId) => (userId === action.userId)).length === 0 ?
              {...c, users: [...c.users, action.userId]} : c :
              c
            // : {...c, users: c.users.filter((user) => (
            // user.id !== action.userId
            // ))}
          )),
        })),
      }));


    case 'INSERT_AFTER':
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

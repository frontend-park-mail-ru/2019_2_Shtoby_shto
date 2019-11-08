export function makeFakeBoard(id, name, groups) {
  return {id: id, name: name, cardGroups: groups};
}

export const fakeBoards = [1, 2, 3, 4, 5].map((i) => {
  return makeFakeBoard(i, `board${i}`, []);
});

// export default fakeBoards;

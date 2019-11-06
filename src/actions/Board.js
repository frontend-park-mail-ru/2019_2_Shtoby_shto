// тут должен быть action-функция, которая попытается создать
// доску, но пока так
export function create(name) {
  return {
    type: 'NEW_BOARD',
    id: 1,
    name: name,
  };
}

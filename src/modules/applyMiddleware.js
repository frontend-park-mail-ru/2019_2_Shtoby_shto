import StoreWrapper from './StoreWrapper';

export default function applyMiddleware(store, ...middleware) {
  return middleware.reduce(
      (storeWithM, m) => new StoreWrapper(storeWithM, m),
      store,
  );
}

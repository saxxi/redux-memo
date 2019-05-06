import { createStore, applyMiddleware, compose, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {reducers} from './redux/reducers';
import { rootSaga } from './redux/sagas';


export const generateStore = (preloadedState = {}): Store => {
  const reactDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() : (f: any) => f;
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducers, preloadedState, compose(applyMiddleware(sagaMiddleware), reactDevTools));
  sagaMiddleware.run(rootSaga);
  return store;
}

const store = generateStore();

export default store;

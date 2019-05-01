import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {reducers} from './redux/reducers';
import { rootSaga } from './redux/sagas';

const reactDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() : (f: any) => f;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers,{},
  compose(
    applyMiddleware(sagaMiddleware),
    reactDevTools
  )
);
sagaMiddleware.run(rootSaga);

export default store;

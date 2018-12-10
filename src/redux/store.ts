import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../redux/sagas';
import app from '../redux/reducers';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
    combineReducers({
        app
    }),
    compose(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export { store };
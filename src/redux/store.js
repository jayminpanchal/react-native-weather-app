import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './saga';
import {rootReducers} from './reducers';

export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [logger, sagaMiddleware];
    const store = createStore(rootReducers, applyMiddleware(...middlewares));
    sagaMiddleware.run(rootSaga);
    return {store};
};

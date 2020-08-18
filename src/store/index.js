import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga'
import TodoSagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
    // applyMiddleware(thunk)//在創建Store時，增加中間件
    );
    
sagaMiddleware.run(TodoSagas);    
export default store;
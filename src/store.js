import { createStore, applyMiddleware } from 'redux';
import weatherReducer from './redux/reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './redux/sagas'

const sagaMiddleware = createSagaMiddleware();

  export default createStore(
    weatherReducer, 
    applyMiddleware(sagaMiddleware)
    )

sagaMiddleware.run(rootSaga)
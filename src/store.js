import { createStore, applyMiddleware, compose } from 'redux';
import weatherReducer from './redux/reducer'
//thunk
// import thunk from 'redux-thunk'

//redux saga
import createSagaMiddleware from 'redux-saga'


import mySaga from './redux/sagas'

const sagaMiddleware = createSagaMiddleware();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//thunk
// const store = createStore(
//   weatherReducer, 
//   composeEnhancers(applyMiddleware(thunk))
//   )

//redux saga
  export default createStore(
    weatherReducer, 
    applyMiddleware(sagaMiddleware)
    )

sagaMiddleware.run(mySaga)
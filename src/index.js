import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'
//redux
import { Provider } from 'react-redux'
import weatherReducer from './redux/reducer'
import { createStore, applyMiddleware, compose } from 'redux';
//thunk
// import thunk from 'redux-thunk'

//redux saga
import createSagaMiddleware from 'redux-saga'


import {helloSaga} from './redux/saga'
//router
import { BrowserRouter as Router} from 'react-router-dom'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;





const sagaMiddleware = createSagaMiddleware();
//thunk
// const store = createStore(
//   weatherReducer, 
//   composeEnhancers(applyMiddleware(thunk))
//   )

//redux saga
  const store = createStore(
    weatherReducer, 
    applyMiddleware(sagaMiddleware)
    )

sagaMiddleware.run(helloSaga)

ReactDOM.render(
  
    <React.StrictMode>
      <Router>
        <Provider store={store}> 
          <App />
        </Provider> 
      </Router> 
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

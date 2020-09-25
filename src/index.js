import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'
//redux
import { Provider } from 'react-redux'
import weatherReducer from './redux/reducer'
import { createStore, applyMiddleware } from 'redux';
//redux saga
import createSagaMiddleware from 'redux-saga'


import {helloSaga} from './redux/saga'
//router
import { BrowserRouter as Router} from 'react-router-dom'




const sagaMiddleware = createSagaMiddleware();
console.log(sagaMiddleware())

const store = createStore(
  weatherReducer, 
  applyMiddleware(sagaMiddleWare)
  )




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

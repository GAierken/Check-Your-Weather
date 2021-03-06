import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// semantic ui for styling -- GA
import 'semantic-ui-css/semantic.min.css'
//redux prep -- GA
import { Provider } from 'react-redux'
import store from "./store";
//router -- GA (trying to use react router to make url work)
import { BrowserRouter as Router} from 'react-router-dom'

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

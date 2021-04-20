import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import history from './history';

import { Router, Route, Switch, Redirect } from "react-router-dom";

import rootReducer from './redux/reducers';


const middleware = [thunk]

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middleware),
));


ReactDOM.render(
     <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/main" component={App} />
          <Redirect from="/" to="/main" />
        </Switch>
      </Router>
      </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

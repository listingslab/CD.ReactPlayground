/* global APP_BASE_URL */
/* eslint-env browser */

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createHistory } from 'history';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { Router, Route, IndexRedirect, useRouterHistory } from 'react-router';
import debug from 'debug';

// Load the main SCSS file for the application
import 'assets/css/screen.scss';

import * as reducers from './reducers/index';
import rootSaga from './sagas/index';


import { App } from './components/App';
import { Dashboard } from './components/Dashboard';


window.myDebug = debug;

const browserHistory = useRouterHistory(createHistory)({ basename: APP_BASE_URL });

const sagaMiddleware = createSagaMiddleware();

function myCompose() {
    if (window.devToolsExtension) {
        return compose(applyMiddleware(sagaMiddleware, routerMiddleware(browserHistory)), window.devToolsExtension());
    }
    return applyMiddleware(sagaMiddleware, routerMiddleware(browserHistory));
}

const store = createStore(combineReducers({ ...reducers, routing: routerReducer }), myCompose());
sagaMiddleware.run(rootSaga);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRedirect to="dashboard" />
                <Route path="dashboard" component={Dashboard} />
            </Route>
        </Router>
    </Provider>
    , document.getElementById('root')
);

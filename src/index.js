import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// react-router
import { Router , hashHistory } from 'react-router'
// redux
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

// routes
import routes from './router';

// css
import 'normalize.css';
import './css/main.css';

// 创建一个store
const store = createStore(
    reducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
    //     name: 'test'
    // }),
    applyMiddleware(thunk)
);



ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}>
        </Router>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();

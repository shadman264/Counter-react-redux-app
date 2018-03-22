import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App.js';
import counterReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(counterReducer);

// render the main component
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('app')
);

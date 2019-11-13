import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import store from './store'
import {Provider} from 'react-redux'
import './index.css';

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(<Root />, document.body.appendChild(document.createElement('div')));



import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';   //sau khi đã install xong thì kéo vào
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import store from './redux/store';

ReactDOM.render(
    <Provider store = { store}>
        <App />
    </Provider>

, document.getElementById('root'));
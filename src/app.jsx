import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import App from './containers/App'
import 'react-select/dist/react-select.css';
import configureStore from './configureStore';

const initialState = {};
const history = createHistory();

const store = configureStore(initialState, history);



ReactDOM.render(
<Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
</Provider>, 
document.getElementById('app-root'));
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom';
import allReducers from './reducers'
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import './index.css';


const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
      <Router>
      <App />
      </Router>
    </Provider>,
  document.getElementById('root'));
registerServiceWorker();

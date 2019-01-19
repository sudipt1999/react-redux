import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import reducer from './store/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const store = createStore(reducer);
const app = (
   <Provider store={store} >
      <App />
   </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import  store  from './store/index';

import {ErrorBoundary} from './providers';

ReactDOM.render(
  <ErrorBoundary>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>      
    </BrowserRouter>    
  </ErrorBoundary>,
  document.getElementById('root')
);



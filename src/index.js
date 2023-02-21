import React from 'react';
import ReactDOM from 'react-dom/client';

//  external imports
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

//  internal imports
import './index.css';
import App from './App';
import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

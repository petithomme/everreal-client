import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {boardReducer} from "./reducers/reducers";
import { createStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const store: any = createStore(boardReducer);

ReactDOM.render(
  <React.StrictMode>
      <Provider store = {store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

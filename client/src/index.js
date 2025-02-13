import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ArrReducer from "./Store/ArrReducer"
import { combineReducers,createStore } from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <React.StrictMode>
   <Provider store={createStore(combineReducers({arr:ArrReducer}))}>
    <App />
    </Provider>
   </React.StrictMode>
  </BrowserRouter>
);
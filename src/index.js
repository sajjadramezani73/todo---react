import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { TodosProvider } from './context/TodosContext';

ReactDOM.render(
  <BrowserRouter>
    <TodosProvider>
      <App />
    </TodosProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


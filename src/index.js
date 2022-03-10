import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { TodosProvider } from './context/CounterContext';

ReactDOM.render(
  <TodosProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TodosProvider>,
  document.getElementById('root')
);


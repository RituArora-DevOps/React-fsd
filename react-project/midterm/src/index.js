import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CatsProvider } from './context/CatsContext';
import { StrictMode } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
    <CatsProvider>
      <App />
    </CatsProvider>
  </StrictMode>

);


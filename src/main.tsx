import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { TreatmentProvider } from './context/TreatmentContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TreatmentProvider>
      <App />
    </TreatmentProvider>
  </StrictMode>,
);

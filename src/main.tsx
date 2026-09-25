import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { loadFonts } from './fonts';

// Perf fix: kick off the Google Fonts request as early as possible, in
// parallel with the rest of the app bootstrapping (see fonts.ts for why
// this replaced two blocking <link> tags in index.html).
loadFonts();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

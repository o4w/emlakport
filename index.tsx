
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const container = document.getElementById('root');
if (!container) {
  throw new Error("Kritik Hata: Root element bulunamadı.");
}

const root = createRoot(container);
root.render(<App />);

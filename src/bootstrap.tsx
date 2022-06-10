import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const mount = (el: HTMLElement) => {
  const root = createRoot(el!);
  root.render(<App />);
};

if (process.env.NODE_ENV === 'development') {
  const root = document.getElementById('root');

  if (root) {
    mount(root);
  }
}

export default mount;

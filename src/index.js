import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ClerkProvider } from "@clerk/clerk-react";


const clerk_pub_key = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ClerkProvider publishableKey={clerk_pub_key}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ClerkProvider>
);



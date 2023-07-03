import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18next'
import './index.css'

const loadingMarkup = (
  <div className="p-2"><h1>Loading...</h1></div>
)

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);

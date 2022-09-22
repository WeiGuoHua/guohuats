import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';
import './assect/animate.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Suspense>
    <Router>
      <App />
    </Router>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals)
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

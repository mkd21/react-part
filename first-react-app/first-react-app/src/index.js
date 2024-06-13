import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import HelloFunction from "./about_default_export";
import {greet , health} from "./named_export_example";
import CreatorFunc from "./pure-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



HelloFunction();

greet();
health();

CreatorFunc();
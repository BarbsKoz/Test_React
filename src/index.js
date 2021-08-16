import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button.jsx';


ReactDOM.render(
  <React.StrictMode>
    <Button text="Random"/>
    <Button text="Success"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

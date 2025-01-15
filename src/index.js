import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import FormatName from './component/formatName'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

// const user = {firstname : 'John', lastname : 'Doe'};

// let element=(
//   <div>
//     <h1>Hello World</h1>
//     <h1>Hello, {FormatName(user)}</h1>
//   </div>
// )

// root.render(element);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

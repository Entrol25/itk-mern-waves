//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state.js'
//import { addLang } from './redux/state.js'
import { reRender } from './render.js'
/*
let reRender = () => {
  ReactDOM.render(
    <React.StrictMode>

      <App state={state} addLang={addLang} />

    </React.StrictMode>,
    document.getElementById('root')
  );
}
*/
reRender(state)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

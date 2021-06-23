import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state.js'
import { addLang, addMessage, updateMessage } from './redux/state.js'

let reRender = (state) => {
  ReactDOM.render(
    <React.StrictMode>

      <App state={state}
        addLang={addLang} addMessage={addMessage} updateMessage={updateMessage}
      />

    </React.StrictMode>,
    document.getElementById('root')
  );
}
reRender(state)
subscribe(reRender)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

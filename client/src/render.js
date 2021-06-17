import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addLang } from './redux/state.js'
import { addMessage } from './redux/state.js'
import { updateMessage } from './redux/state.js'

export let reRender = (state) => {
  ReactDOM.render(
    <React.StrictMode>

      <App state={state}
        addLang={addLang} addMessage={addMessage} updateMessage={updateMessage}
      />

    </React.StrictMode>,
    document.getElementById('root')
  );
}

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { DragDropContextProvider } from 'react-dnd';
import HTML5BackendContext from 'react-dnd-html5-backend';

ReactDOM.render(
  <DragDropContextProvider backend={HTML5BackendContext}>
    <App />
  </DragDropContextProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

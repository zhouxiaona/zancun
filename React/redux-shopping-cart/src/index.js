import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'

// import App from './pages/Add/App.js'
// import App from './pages/Hoc/HocShow.js'
// import App from './pages/Count/Hook.js'
// import App from './pages/Count/CountRoll.js'
import App from './pages/Pixi/index'

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider> ,
  document.getElementById('root')
);


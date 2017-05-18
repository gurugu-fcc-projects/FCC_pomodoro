import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root')
);

/*
TO-DOs

1 - no sound on mobile!!
=== 2 - no long press on mobile!! ===
3 - main buttons have selection halo!!
4 - data should be saved locally

*/

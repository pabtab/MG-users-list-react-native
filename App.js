import React from 'react';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import ScreensNavigation from './src/navigation';
import rootReducer from './src/store/reducers';
import rootSaga from './src/store/actions';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);


const App = () => {
  return (
    <Provider store={store}>
      <ScreensNavigation />
    </Provider>
  );
};

export default App;

import {Provider} from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import React, {ReactElement, ReactNode} from 'react';
import reduxThunk from 'redux-thunk'

import reducers from './reducers'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

interface ReduxProviderProps {
  children: ReactElement | ReactNode
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(reduxThunk)))

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children } ): ReactElement => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ReduxProvider
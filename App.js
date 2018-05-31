import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Navigation from './src/view/navigation/Navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import reducers from './src/redux/reducers';
import ReduxThunk from 'redux-thunk';

export default class App extends React.Component {

    render() {
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
      return (
          <Provider store={store}>
            <Navigation />
          </Provider>
      );
    }
}

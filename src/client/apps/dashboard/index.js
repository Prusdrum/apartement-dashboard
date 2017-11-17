import './boot/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux';

import DashboardApp from './dashboard-app';
import createStore from './boot/create-store';
import createReducers from './boot/create-reducers';

const store = createStore(createReducers());

const App = () => (
    <Provider store={store}>
      <MuiThemeProvider>
        <DashboardApp />
      </MuiThemeProvider>
    </Provider>
  );

ReactDOM.render(<App />, document.getElementById('dashboard-root'));
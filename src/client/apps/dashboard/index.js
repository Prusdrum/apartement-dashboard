import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DashboardApp from './DashboardApp';


const App = () => (
    <MuiThemeProvider>
      <DashboardApp />
    </MuiThemeProvider>
  );

ReactDOM.render(<App />, document.getElementById('dashboard-root'));
import {combineReducers} from 'redux';

import dashboardReducer from '../state/reducers/dashboard';

export default () => combineReducers({
    dashboard: dashboardReducer
});
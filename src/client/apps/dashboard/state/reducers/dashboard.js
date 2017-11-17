import {handleActions} from 'redux-actions';
import {
    TRAMS_LOADED
} from '../actions/dashboard';

const initialState = {
    tramStop: '',
    tramLine: null,
    tramDepartures: []
};

export default handleActions({
    [TRAMS_LOADED]: (state, {payload:trams}) => ({
        ...state,
        tramStop: trams.stopName,
        tramLine: trams.lineNumber,
        tramDepartures: trams.departures
    })
}, initialState);
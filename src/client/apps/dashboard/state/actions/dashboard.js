import {createAction} from 'redux-actions';
import getTrams from '../../services/api/tram-api';

export const TRAMS_LOADED = 'DASHBOARD/TRAMS_LOADED';
const tramsLoaded = createAction(TRAMS_LOADED);

export const loadTrams = () => (dispatch, getState) => {
    const line = 20;
    const direction = 1;
    const stop = 1;
    getTrams({line, direction, stop})
        .then((trams) => dispatch(tramsLoaded(trams)));
}
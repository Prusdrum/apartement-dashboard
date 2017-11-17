import {createSelector} from 'reselect';
import moment from 'moment';

const getTramStop = (state) => state.dashboard.tramStop;
const getTramLine = (state) => state.dashboard.tramLine;
const getTramDepartures = (state) => state.dashboard.tramDepartures;

export const getNearestTram = createSelector(
    getTramDepartures,
    (tramDepartures) => {
        
    }
)
import {createSelector} from 'reselect';
import moment from 'moment';
import getTramsForSpecificHour from '../../services/tram/get-tram-for-specific-hour';

const getTramStop = (state) => state.dashboard.tramStop;
const getTramLine = (state) => state.dashboard.tramLine;
const getTramDepartures = (state) => state.dashboard.tramDepartures;

export const getNearestTramDepartures = createSelector(
    getTramDepartures,
    (tramDepartures) => {
        const now = moment();

        const formatTime = (time) => moment(time).format('HH:mm');
        
        const getDepartures = (time) => ({
            hour: time.hour(),
            departures: getTramsForSpecificHour(time, tramDepartures).map(formatTime)
        });

        return {
            currentHour: getDepartures(now), 
            nextHour: getDepartures(now.add(1, 'hour'))
        }
    }
)
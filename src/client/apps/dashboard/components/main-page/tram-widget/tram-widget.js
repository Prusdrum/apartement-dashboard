import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {loadTrams} from '../../../state/actions/dashboard';
import {
    getNearestTramDepartures, 
    getTramStopName,
    areTramsLoaded,
    getTramLine
} from '../../../state/selectors/dashboard';
import moment from 'moment';
import './tram-widget.css';

class TramWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTime: moment().format('HH:mm:ss')
        };
    }

    componentWillMount() {
        this.props.loadTrams();
    }

    componentDidMount() {
        this.currentTimeInterval = setInterval(() => {
            this.setState({
                currentTime: moment().format('HH:mm:ss')
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.currentTimeInterval);
    }

    renderHeader() {
        const {stopName, tramLine} = this.props;

        return (
            <h1 className="TramWidget__header">Tramwaj {tramLine} z {stopName}</h1>
        );
    }

    render() {
        const {currentHour, nextHour, stopName, areTramsLoaded} = this.props;

        if (!areTramsLoaded) {
            return <div>Ładuję...</div>
        }

        return (
            <Card>
                <CardText>
                    <div className="TramWidget__content">
                        {this.renderHeader()}
                        <h2 className="TramWidget__currentTime">Czas: {this.state.currentTime}</h2>
                        <div className="TramWidget__schedule--current">
                            <h1 className="TramWidget__schedule-header">Godzina: {currentHour.hour}</h1>
                            <ul>
                                {currentHour.departures.map((time, index) => (
                                    <li key={`current-hour-${index}`} className="TramWidget__schedule-minute">{time}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="TramWidget__schedule--next">
                            <h1 className="TramWidget__schedule-header">Godzina: {nextHour.hour}</h1>
                            <ul>
                                {nextHour.departures.map((time, index) => (
                                    <li key={`next-hour-${index}`} className="TramWidget__schedule-minute">{time}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </CardText>
            </Card>
        );
    }
};

const mapStateToProps = (state) => {
    const departures = getNearestTramDepartures(state);
    const {currentHour, nextHour} = departures;

    return {
        currentHour,
        nextHour,
        stopName: getTramStopName(state),
        areTramsLoaded: areTramsLoaded(state),
        tramLine: getTramLine(state)
    }
}

const mapDispatchToProps = {
    loadTrams
};

export default connect(mapStateToProps, mapDispatchToProps)(TramWidget);
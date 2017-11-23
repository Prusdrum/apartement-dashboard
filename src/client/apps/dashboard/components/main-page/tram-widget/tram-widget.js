import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {loadTrams} from '../../../state/actions/dashboard';
import {getNearestTramDepartures} from '../../../state/selectors/dashboard';
import moment from 'moment';
import { setInterval } from 'timers';

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

    render() {
        const {currentHour, nextHour} = this.props;

        return (
            <Card>
                <CardText>
                    <h1>Najbliższe tramwaje</h1>
                    <h2>Czas: {this.state.currentTime}</h2>
                    <div>
                        <div>
                            <h1>Godzina: {currentHour.hour}</h1>
                            <ul>
                                {currentHour.departures.map((time, index) => <li key={`current-hour-${index}`}>{time}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h1>Godzina: {nextHour.hour}</h1>
                            <ul>
                                {nextHour.departures.map((time, index) => <li key={`next-hour-${index}`}>{time}</li>)}
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
        nextHour
    }
}

const mapDispatchToProps = {
    loadTrams
};

export default connect(mapStateToProps, mapDispatchToProps)(TramWidget);
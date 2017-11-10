import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';


class DashboardApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return (
            <div>
                <AppBar title="Aparatement dashboard"/>
                <h1>Dashboard app working: {this.state.counter}</h1>
                <RaisedButton label="+1" primary={true} onClick={this.increment}/>
            </div>
        )
    }
}

export default DashboardApp;
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MainPage from './components/main-page/main-page';
import SearchPage from './components/search-page/search-page';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionSearch from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


class DashboardApp extends Component {
    renderLeftIcon() {
        return (
            <Link to="/">
                <IconButton>
                    <ActionHome />
                </IconButton>
            </Link>
        );
    }

    renderRightIcon() {
        return (
            <Link to="/search">
                <IconButton>
                    <ActionSearch />
                </IconButton>
            </Link>
        );
    }

    render() {
        return (
            <Router>
                <div>
                    <AppBar title="Aparatement dashboard"
                            iconElementLeft={this.renderLeftIcon()}
                            iconElementRight={this.renderRightIcon()}/>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/search" component={SearchPage}/>
                </div>
            </Router>
        )
    }
}

export default DashboardApp;
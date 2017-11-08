import React from 'react';
import DefaultLayout from './layouts/default';

class IndexPage extends React.Component {
    render() {
        return (
            <DefaultLayout title="Dashboard" scriptsPath="/assets/dashboard.js">
                <div id="dashboard-root"></div>
            </DefaultLayout>
        );
    }
}

module.exports = IndexPage;
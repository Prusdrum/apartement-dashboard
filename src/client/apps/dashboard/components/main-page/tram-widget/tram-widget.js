import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {loadTrams} from '../../../state/actions/dashboard';

class TramWidget extends Component {
    componentWillMount() {
        this.props.loadTrams();
    }
    render() {
        return (
            <Card>
                <CardText>
                    <div>
                        Tutaj będzie pogoda
                    </div>
                </CardText>
            </Card>
        );
    }
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
    loadTrams
};

export default connect(mapStateToProps, mapDispatchToProps)(TramWidget);
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import PageWrapper from '../page-wrapper/page-wrapper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const listElementStyle = {
    margin: '25px 0'
}

class MainPage extends Component {
    render() {
        return (
            <PageWrapper>
                <ul>
                    <li style={listElementStyle}>
                        <Card>
                            <CardText>
                                <div>
                                    Tutaj będzie pogoda
                                </div>
                            </CardText>
                        </Card>
                    </li>
                    <li style={listElementStyle}>
                        <Card>
                            <CardText>
                                <div>
                                    Tuta będzie ile do tramwaju
                                </div>
                            </CardText>
                        </Card>
                    </li>
                </ul>
            </PageWrapper>
        )
    }
}

export default MainPage;
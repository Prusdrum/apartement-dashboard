import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import PageWrapper from '../page-wrapper/page-wrapper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TramWidget from './tram-widget/tram-widget';
import WidgetWrapper from './widgets/widget-wrapper';
import WidgetList from './widgets/widget-list-wrapper';

class MainPage extends Component {
    render() {
        return (
            <PageWrapper>
                <WidgetList>
                    <WidgetWrapper>
                        <TramWidget />
                    </WidgetWrapper>
                    <WidgetWrapper>
                        <Card>
                            <CardText>
                                <div>
                                    Tuta będzie ile do tramwaju
                                </div>
                            </CardText>
                        </Card>
                    </WidgetWrapper>
                </WidgetList>
            </PageWrapper>
        )
    }
}

export default MainPage;
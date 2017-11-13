import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import PageWrapper from '../page-wrapper/page-wrapper';

class SearchPage extends Component {
    render() {
        return (
            <PageWrapper>
                <TextField hintText="Klucz francuski"
                           floatingLabelText="Wpisz czego szukasz"/>
            </PageWrapper>
        );
    }
}

export default SearchPage;
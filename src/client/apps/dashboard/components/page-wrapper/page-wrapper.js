import React from 'react';

const style = {
    margin: '0px 50px',
    textAlign: 'center'
}

const PageWrapper = ({children}) => (
    <div style={style}>
        {children}
    </div>
);

export default PageWrapper;
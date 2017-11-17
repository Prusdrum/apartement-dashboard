import React from 'react';

const listElementStyle = {
    margin: '25px 0'
}

const WidgetWrapper = ({children}) => (
    <li style={listElementStyle}>
        {children}
    </li>
);

export default WidgetWrapper;
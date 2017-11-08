import React from 'react';

const DefaultLayout = ({title, children, initialState, scriptsPath}) => {
    return (
        <html>
            <head>
                <title>{title}</title>
                {initialState && <script>
                    window.__APP_INITIAL_STATE__ = ${initialState}
                </script>}
            </head>
            <body>{children}</body>
            <script src={scriptsPath}></script>
        </html>
    );
}

module.exports = DefaultLayout;
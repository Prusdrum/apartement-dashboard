import React from 'react';

const DefaultLayout = ({title, children, initialState, scriptsPath}) => {
    return (
        <html>
            <head>
                <title>{title}</title>
                {initialState && <script>
                    window.__APP_INITIAL_STATE__ = ${initialState}
                </script>}
                <link href="assets/reset.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
            </head>
            <body>{children}</body>
            <script src={scriptsPath}></script>
        </html>
    );
}

module.exports = DefaultLayout;
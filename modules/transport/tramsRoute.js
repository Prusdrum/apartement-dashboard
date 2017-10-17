const request = require('request-promise');

const getRequestOptions = require('./getRequestOptions');
const getTimetable = require('./timeTableScraper').getTimetable;

const tramRoute = (req, res) => {
    const params = req.query;
    
    const {lineNumber, direction, stop} = params;

    return request(getRequestOptions(lineNumber, direction, stop)).then((response, html) => {
        const timeTable = getTimetable(response);
        res.json(Object.assign({}, timeTable, {lineNumber}));
    }).catch(error => {
        res.json(error)
    });
}

module.exports = tramRoute;
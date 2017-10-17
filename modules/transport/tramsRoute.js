const request = require('request-promise');

const getRequestOptions = require('./getRequestOptions');
const getTimetable = require('./timeTableScraper').getTimetable;

const tramRoute = (req, res) => {
    return request(getRequestOptions()).then((response, html) => {
        const timeTable = getTimetable(response);
        res.json(timeTable);
    }).catch(error => {
        res.json(error)
    });
}

module.exports = tramRoute;
const promisify = require('util').promisify;

const request = promisify(require('request'));

const getUrl = require('./getUrl');
const getRequestOptions = require('./getRequestOptions');
const getTimetable = require('./timeTableScraper').getTimetable;

const getTrams = (lineNumber, direction, stop) => {
    const date = new Date(Date.now());
    const url = getUrl(lineNumber, date, direction, stop);
    const options = getRequestOptions(url);
    
    return request(options).then((response) => {
        const timeTable = getTimetable(response.body);

        return Object.assign({}, timeTable, {
            lineNumber
        });
    });
}

module.exports = {
    getTrams
};
const promisify = require('util').promisify;

const request = promisify(require('request'));

const getUrl = require('../get-url/get-url');
const getRequestOptions = require('../get-request-options/get-request-options');
const getTimetable = require('../scrapper/time-table-scraper').getTimetable;

const createTramsController = () => {

    const getTrams = (req, res) => {
        const {lineNumber, direction, stop} = req.params;
        
        const date = new Date(Date.now());
        const url = getUrl(lineNumber, date, direction, stop);
        const options = getRequestOptions(url);
        
        return request(options)
            .then((response) => {
                const timeTable = getTimetable(response.body);
        
                return Object.assign({}, timeTable, {
                    lineNumber
                });
            })
            .then((trams => {
                res.json(trams);
            })).catch(error => {
                res.json(error);
            });
    }


    return {
        getTrams
    }
}




module.exports = createTramsController;
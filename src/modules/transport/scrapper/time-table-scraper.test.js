const fs = require('fs');
const path = require('path');
const promisify = require('util').promisify;

const getTimetable = require('./time-table-scraper').getTimetable;

const fileName = path.join(__dirname, 'test-fixtures/timetable.html');
const readFile = promisify(fs.readFile);

describe('getTimetable', () => {
    let timetable;

    beforeEach((done) => {
        readFile(fileName, 'utf8').then(html => {
            timetable = getTimetable(html);
            done();
        });
    });

    it('should extract stop name', () => {
        const expected = 'Mały Płaszów';
        const actual = timetable.stopName;

        expect(actual).toEqual(expected);
    });
});

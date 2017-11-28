const getUrl = require('./get-url');

//helpers
const getQueryStringValue = (queryName, url) => {
    const regexp = new RegExp(`${queryName}=([^&]*)`);

    return url.match(regexp)[1];
}

describe('get url', () => {
    let url = 

    beforeEach(() => {
        const lineNumber = 20;
        const direction = 1;
        const stop = 4;
        const date = new Date(2010, 5, 10);

        url = getUrl(lineNumber, date, direction, stop);
    });


    it('should create line number with underscore pattern', () => {
        const actual = getQueryStringValue('linia', url);
        const expected = '20__1_4';

        expect(actual).toEqual(expected);
    });

    it('should create date format with no delimeter - indexed from 1', () => {
        const actual = getQueryStringValue('rozklad', url);
        const expected = '2010610';

        //probably it should have left pad
        expect(actual).toEqual(expected);
    });
});
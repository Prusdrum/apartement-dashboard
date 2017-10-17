const cheerio = require('cheerio');

const getTimetable = (html) => {
    const $ = cheerio.load(html);
    const $timeTable = $(
        `table.main > tbody > tr > td > 
        table > tbody > tr > td:nth-child(2) > 
        table > tbody > tr:nth-child(2) > td > 
        table > tbody > tr > td:nth-child(2) > 
        table > tbody`);

    const stopName = $timeTable
        .find('tr:nth-child(1) > td > table > tbody > tr > td:nth-child(2) > div > span')
        .text()
        .trim();

    const $timeTableBody = $timeTable.find('tr:nth-child(2) > td > table > tbody');

    let departures = [];

    $timeTableBody.find('tr').each((index, rowElement) => {
        const cells = $(rowElement).find('td');

        if (cells.length === 4) {
            
            const hourElement =$(cells).eq(0).text();
            const hour = Number.parseInt(getCellData(hourElement), 10);

            const weekdayElement = $(cells).eq(1).text();
            const weekday = getNumbers(weekdayElement);

            const saturdaysElement = $(cells).eq(2).text();
            const saturdays = getNumbers(saturdaysElement);

            const holidaysElement = $(cells).eq(3).text();
            const holidays = getNumbers(holidaysElement);


            departures.push({
                hour, 
                weekday, 
                saturdays, 
                holidays
            });
        }
    });

    return {
        stopName: stopName,
        departures: departures
    }
}

const getNumbers = (cellData) => {
    return getCellData(cellData)
        .split(' ')
        .filter(cell => cell !== '')
        .map(cell => Number.parseInt(cell, 10));
}

const getCellData = (cellData) => {
    return cellData
    .replace('\n', '')
    .trim();
}

module.exports = {
    getTimetable
};
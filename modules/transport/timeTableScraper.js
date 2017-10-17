const cheerio = require('cheerio');

const getTimetable = (html) => {
    const $ = cheerio.load(html);
    const $timeTable = $(
        `table.main > tbody > tr > td > 
        table > tbody > tr > td:nth-child(2) > 
        table > tbody > tr:nth-child(2) > td > 
        table > tbody > tr > td:nth-child(2) > 
        table > tbody`);

    const stopName = $timeTable.find('tr:nth-child(1) > td > table > tbody > tr > td:nth-child(2) > div > span').text()

    const $timeTableBody = $timeTable.find('tr:nth-child(2) > td > table > tbody');

    let departures = [];

    $timeTableBody.find('tr').each((index, element) => {
        const cells = $(element).find('td');

        if (cells.length === 4) {
            
            const hour = getCellData($(cells).eq(0));


            const weekday = getNumbers($(cells).eq(1));


            const saturdays = getNumbers($(cells).eq(2));


            const holidays = getNumbers($(cells).eq(3));


            departures.push({
                hour: Number.parseInt(hour, 10), 
                weekday, 
                saturdays, 
                holidays
            });
        }
    });

    return {
        departures: departures,
        stopName: stopName
    }
}


const getNumbers = ($cells) => {
    return getCellData($cells)
        .split(' ')
        .filter(a => a!=='')
        .map(a => Number.parseInt(a, 10));
}

const getCellData = ($cells) => {
    return $cells
    .text()
    .replace('\n', '')
    .trim();
}

module.exports = {
    getTimetable
};
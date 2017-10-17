const getUrl = (lineNumber, date) => {
    console.log(date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const dateParam = `${year}${month}${day}`
    return `http://rozklady.mpk.krakow.pl/?lang=PL&rozklad=${dateParam}&linia=${lineNumber}`;
}

module.exports = getUrl;
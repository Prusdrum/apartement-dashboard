const getUrl = (lineNumber, date, direction, stop) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const dateParam = `${year}${month}${day}`;

    const lineParam = `${lineNumber}__${direction}_${stop}`;
    return `http://rozklady.mpk.krakow.pl/?lang=PL&rozklad=${dateParam}&linia=${lineParam}`;
}

module.exports = getUrl;
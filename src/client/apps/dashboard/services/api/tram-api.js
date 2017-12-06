const parseResponse = (response) => {
    if (response.status !== 200) {
        throw new Error("Bad response");
    }

    return response.json();
}

const mapDeparture = (data) => ({
    holidays: data.holidays,
    hour: data.hour,
    saturdays: data.saturdays,
    weekday: data.weekday
})

const mapResponse = (data) => ({
    lineNumber: data.lineNumber,
    stopName: data.stopName,
    departures: data.departures.map(mapDeparture)
});

export default ({line, direction, stop}) => {
    const url = `/api/trams/${line}/${direction}/${stop}`;

    return fetch(url)
        .then(parseResponse)
        .then(mapResponse);
}
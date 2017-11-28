const moment = require('moment');
const getTramForSpecificHour = require('./get-tram-for-specific-hour');

const departures = [
    { 
       "hour":3,
       "weekday":[ ],
       "saturdays":[ ],
       "holidays":[ ]
    },
    {
       "hour":4,
       "weekday":[ 52 ],
       "saturdays":[ 44 ],
       "holidays":[ 41 ]
    },
    {
       "hour":5,
       "weekday":[ 10, 27, 36, 46, 56 ],
       "saturdays":[ 4, 24, 44 ],
       "holidays":[ 11, 41 ]
    },
    {
        "hour":6,
        "weekday":[],
        "saturdays":[ ],
        "holidays":[ ]
    }
];


describe('when day is regular day', () => {
    it('should return minutes for specific hour', () => {
        const now = moment('2017-11-23 05:00:00');
        const timesInHour = getTramForSpecificHour(now, departures);

        expect(timesInHour.length).toEqual(5);

        const expected = [
            moment('2017-11-23T05:10:00').toDate(),
            moment('2017-11-23T05:27:00').toDate(),
            moment('2017-11-23T05:36:00').toDate(),
            moment('2017-11-23T05:46:00').toDate(),
            moment('2017-11-23T05:56:00').toDate()
        ];

        expect(timesInHour).toEqual(expect.arrayContaining(expected));
    });
});
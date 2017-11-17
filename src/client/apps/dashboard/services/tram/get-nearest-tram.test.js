const expect = require('chai').expect;
const getNearestTram = require('./get-nearest-tram');
const moment = require('moment');

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
       "weekday":[ 6, 16, 26, 36, 46, 56 ],
       "saturdays":[ 4, 24, 44 ],
       "holidays":[ 11, 41 ]
    },
    {
       "hour":7,
       "weekday":[ 6, 16, 26, 36, 46, 56 ],
       "saturdays":[ 6,  26, 47 ],
       "holidays":[ 11, 41 ]
    },
    {
       "hour":8,
       "weekday":[ 6, 16, 26, 36, 46, 56 ],
       "saturdays":[ 7, 27, 47 ],
       "holidays":[ 7, 27, 47 ]
    },
    {
       "hour":9,
       "weekday":[ 6, 16, 26, 36, 46, 56 ],
       "saturdays":[ 7, 27, 47 ],
       "holidays":[ 7, 27, 47 ]
    },
    {
       "hour":10,
       "weekday":[ 6, 16, 26, 36, 46, 56 ],
       "saturdays":[ 7, 27, 47 ],
       "holidays":[ 7, 27, 47 ]
    },
    {
       "hour":11,
       "weekday":[ 6, 16, 26, 36, 46, 56 ],
       "saturdays":[ 7, 27, 47 ],
       "holidays":[ 7, 27, 47 ]
    },
    {
       "hour":12,
       "weekday":[ 6, 16, 26, 36, 49 ],
       "saturdays":[ 7, 27, 47 ],
       "holidays":[ 7, 27, 47 ]
    },
    {
       "hour":13,
       "weekday":[ 1, 11, 21, 31, 41, 51 ],
       "saturdays":[ 7, 27, 47 ],
       "holidays":[ 7, 27, 47 ]
    },
    {
       "hour":14,
       "weekday":[ 1, 11, 21, 31, 41, 51 ],
       "saturdays":[ 7, 27, 47 ],
       "holidays":[ 7, 27, 47 ]
    },
    {
       "hour":15,
       "weekday":[ 1, 11, 21, 31, 41, 51 ],
       "saturdays":[ 7, 27, 47 ],
       "holidays":[ 7, 27, 47 ]
    },
    {
       "hour":16,
       "weekday":[ 1, 11, 21, 31, 41, 51 ],
       "saturdays":[ 7, 27, 47 ],
       "holidays":[ 7, 27, 47 ]
    },
    {
       "hour":17,
       "weekday":[ 5, 15, 25, 35, 45, 55 ],
       "saturdays":[ 7, 27, 47 ],
       "holidays":[ 7, 27, 47 ]
    },
    {
       "hour":18,
       "weekday":[ 5, 15, 25, 33, 43, 53 ],
       "saturdays":[ 7, 27, 47 ],
       "holidays":[ 7, 27, 47 ]
    },
    {
       "hour":19,
       "weekday":[ 3, 13, 23, 33, 43, 53 ],
       "saturdays":[ 6, 26, 45 ],
       "holidays":[ 6, 26, 45 ]
    },
    {
       "hour":20,
       "weekday":[ 10, 30, 50 ],
       "saturdays":[ 6, 24, 44 ],
       "holidays":[ 6, 24, 44 ]
    },
    {
       "hour":21,
       "weekday":[ 10, 30, 50 ],
       "saturdays":[ 4, 24, 44 ],
       "holidays":[ 4, 24, 44 ]
    },
    {
       "hour":22,
       "weekday":[ 10, 30 ],
       "saturdays":[ 14, 44 ],
       "holidays":[ 14, 44 ]
    },
    {
       "hour":23,
       "weekday":[ ],
       "saturdays":[ ],
       "holidays":[ ]
    }
];

const testHour = (given, expected) => {
    const now = moment(given);
    
    const nearestTram = getNearestTram(departures, now);
    const actual = moment(nearestTram).format('HH:mm');
    expect(actual).to.equal(expected);
}

describe('get nearest tram', () => {
    describe('when there are departues in specific hour', () => {
        it('should return time of the nearest tram', () => {
            //Thursday
            testHour('2017-10-12 12:10:00', '12:16');
        });

    });

    describe('when there are no departues in specific hour', () => {
        it('should return nearest tram departure in next hour', () => {
            //Thursday
            testHour('2017-10-12 21:51:00', '22:10');
            testHour('2017-10-12 18:54:00', '19:03');
        });
    });

    describe('when there are no departures in specific day', () => {
        it('should return to the begining of departures', () => {
            //Thursday
            testHour('2017-10-12 23:00:00', '04:52');
            testHour('2017-10-12 22:50:00', '04:52');
        });
    });
});
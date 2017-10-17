const getUrl = require('./getUrl');

const getRequestOptions = () => {
    const url = getUrl(20, new Date(Date.now()));
    
    const options = {
        uri: url,
        method: 'GET',
        headers: {
            'host': 'rozklady.mpk.krakow.pl',
            'Connection': 'keep-alive',
            'Cache-Control': 'no-cache',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'pl,en-US;q=0.8,en;q=0.6',
            'Cookie': 'ROZKLADY_JEZYK=PL; ROZKLADY_WIDTH=2000; ROZKLADY_WIZYTA=3; ROZKLADY_OSTATNIA=1508240373; ROZKLADY_LWT=20__1__1'
        }   
    }

    return options;
}

module.exports = getRequestOptions;
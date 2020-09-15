const axios = require('axios');
const cheerio = require('cheerio');

var contentsFromWorker = [];

const fecthData = async (url)=>{
  const response = await axios.get(url);
  return response.data;
};

const worker = async ()=>{
    const content = await fecthData('https://time.com/');
    const $ = cheerio.load(content);
    
    $('body > div.homepage-wrapper > section.homepage-module.latest > ol > li> article > div > h2 > a').each((index,element)=>{
        const title = $(element).text();
        const link = 'https://time.com/'+$(element).attr('href');
        const content = {title : title,link : link};
        contentsFromWorker.push(content);
    });
};

worker();
module.exports = contentsFromWorker;
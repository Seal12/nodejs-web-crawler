const axios = require('axios');
const cheerio = require('cheerio');

const urlList = [];
let MaxDepth = 1;

async function crawl(url, depth = 0) {
  console.log('depth: ', depth);

  if (depth > MaxDepth) {
    return;
  }

  console.log('Crawling: ', url);

  urlList.push(url);

  try {
    const res = await axios.get(url);

    const $ = cheerio.load(res.data);

    const links = $('a').map((i, link) => $(link).attr('href')).get();

    console.log('links: ', links);

    for (const link of links) {
      crawl(link, depth + 1);
    }
  } catch (e) {
    console.error(`Could not crawl "${url}": `, e);
  }
}

module.exports = {
  crawl
};

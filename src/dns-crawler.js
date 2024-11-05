const dns = require('dns');

function crawl(server) {

  try {
    dns.lookup(server, (err, address, family) => {
      if (err) {
        console.error('DNS lookup failed:', err);
      } else {
        console.log('IP address:', address, 'Family:', family);
      }
    });
  } catch (e) {
    console.error(`Could not lookup ${server}: `, e);
  }
  
}

module.exports = {
  crawl
};

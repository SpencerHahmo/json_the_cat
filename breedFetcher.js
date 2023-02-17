const request = require('request');

const args = process.argv.slice(2);
const catBreed = args[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (error, response, body) => {
  // If there is an issue with the url
  if (error) {
    console.log(`${error.message}\nPlease enter the url correctly (i.e http://example.domain)`);
    // Ends the program
    return;
  }
    
  const data = JSON.parse(body);
  if (data[0] !== undefined) {
    console.log(data[0].description);
    return;
  } if (catBreed === undefined) {
    console.log(`No cat breed was entered ...`);
    return;
  } else {
    console.log(`There was no data on the breed you requested (${catBreed}).\nDid you enter the breed correctly?`);
  }
});
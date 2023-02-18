const request = require('request');

// const args = process.argv.slice(2);
// const breedName = args[0];

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback("Breed not found", null);
      return;
    }
        
    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };
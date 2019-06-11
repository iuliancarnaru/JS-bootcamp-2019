// const getPuzzle = (wordCount, callback) => {
//   const request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", event => {
//     if (event.target.readyState === 4 && event.target.status === 200) {
//       const data = JSON.parse(event.target.responseText);
//       callback(undefined, data.puzzle);
//     } else if (event.target.readyState === 4) {
//       callback(`An error has taken place!`, undefined);
//     }
//   });

//   request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//   request.send();
// };

const getPuzzle = wordCount =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", event => {
      if (event.target.readyState === 4 && event.target.status === 200) {
        const data = JSON.parse(event.target.responseText);
        resolve(data.puzzle);
      } else if (event.target.readyState === 4) {
        reject(`An error has taken place!`);
      }
    });

    request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send();
  });

// EXERCISE

// const getCountry = (countryCode, callback) => {
//   const countryRequest = new XMLHttpRequest();

//   countryRequest.addEventListener("readystatechange", event => {
//     if (event.target.readyState === 4 && event.target.status === 200) {
//       const data = JSON.parse(event.target.responseText);
//       const country = data.find(country => country.alpha2Code === countryCode);
//       callback(undefined, country);
//     } else if (event.target.readyState === 4) {
//       callback(`Unable to fetch data.`, undefined);
//     }
//   });

//   countryRequest.open("GET", `https://restcountries.eu/rest/v2/all`);
//   countryRequest.send();
// };

const getCountry = countryCode =>
  new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest();

    countryRequest.addEventListener("readystatechange", event => {
      if (event.target.readyState === 4 && event.target.status === 200) {
        const data = JSON.parse(event.target.responseText);
        const country = data.find(
          country => country.alpha2Code === countryCode
        );
        resolve(country);
      } else if (event.target.readyState === 4) {
        reject(`Unable to fetch data.`);
      }
    });

    countryRequest.open("GET", `https://restcountries.eu/rest/v2/all`);
    countryRequest.send();
  });

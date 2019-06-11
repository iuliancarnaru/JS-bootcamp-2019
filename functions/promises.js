// CALLBACK
const getDataCallback = callback => {
  setTimeout(() => {
    // success
    callback(undefined, `This is the data`);
    // fail
    // callback(`Upps! Something happened!`, undefined);
  }, 2000);
};

getDataCallback((error, data) => {
  if (error) {
    console.log(`Error:`, error);
  } else {
    console.log(data);
  }
});

// PROMISE
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // success
    // resolve(`This is the promise data`);
    // fail
    reject(`Upps! Something happened!`);
  }, 2000);
});

myPromise.then(
  data => {
    console.log(data);
  },
  error => {
    console.log(`Error:`, error);
  }
);

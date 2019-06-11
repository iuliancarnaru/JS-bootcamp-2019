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
const getDataPromise = data =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // success
      resolve(`This is the promise data`, data);
      // fail
      // reject(`Upps! Something happened!`);
    }, 2000);
  });

const myPromise = getDataPromise({ name: "Iulian" });

myPromise.then(
  data => {
    console.log(data);
  },
  error => {
    console.log(`Error:`, error);
  }
);

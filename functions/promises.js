// CALLBACK
const getDataCallback = (num, callback) => {
  setTimeout(() => {
    if (typeof num === "number") {
      // success
      callback(undefined, num * 2);
    } else {
      // fail
      callback(`Number must be provided!`, undefined);
    }
  }, 2000);
};

// CALLBACK HELL --> deep nested code
getDataCallback(2, (error, data) => {
  if (error) {
    console.log(`Error:`, error);
  } else {
    getDataCallback(data, (error, data) => {
      if (error) {
        console.log(`Error:`, error);
      } else {
        console.log(data);
      }
    });
  }
});

// PROMISE
const getDataPromise = num =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number"
        ? resolve(num * 2)
        : reject(`Number must be provided!`);
    }, 2000);
  });

// PROMISE CHAIN
getDataPromise(10)
  .then(data => {
    return getDataPromise(data);
  })
  .then(data => {
    return getDataPromise(data);
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

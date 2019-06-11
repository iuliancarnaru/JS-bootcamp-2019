// const getPuzzle = wordCount => {
//   return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
//     .then(response => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error(`Unable to fetch data.`);
//       }
//     })
//     .then(data => data.puzzle);
// };

// ASYNC AWAIT
const getPuzzle = async wordCount => {
  const response = await fetch(
    `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`,
    {}
  );
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error(`Unable to get data...`);
  }
};

let myBook = {
  title: "A New Earth",
  author: "Eckhart Tolle",
  pageCount: 326
};

let otherBook = {
  title: "The Power of Now",
  author: "Eckhart Tolle",
  pageCount: 236
};

let getSummary = function(book) {
  return {
    description: `${book.title} by ${book.author}.`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
  };
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(otherBookSummary.description);
console.log(bookSummary.pageCountSummary);

// ----- CHALLENGE -----

const tempConvertor = function(tempFarenheit) {
  let celsius = ((tempFarenheit - 32) * 5) / 9;
  let kelvin = ((tempFarenheit + 459.67) * 5) / 9;

  return {
    tempInCelsius: `${tempFarenheit} degree fahrenheit is ${celsius} degree celsius`,
    tempInKelvin: `${tempFarenheit} degree fahrenheit is ${kelvin} degree kelvin`
  };
};

let tempValues = tempConvertor(50);
console.log(tempValues.tempInCelsius);
console.log(tempValues.tempInKelvin);

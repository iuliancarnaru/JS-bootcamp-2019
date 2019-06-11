const myFunc = () => {
  const message = `This is my message`;

  const printMessage = () => {
    console.log(message);
  };

  return printMessage;
};

const myPrintMessage = myFunc();
myPrintMessage();

// ---------------

const createCounter = () => {
  let count = 0;

  // Interface to modify count
  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    }
  };
};

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.get());

// ---------------

const createAdder = a => {
  return b => {
    return a + b;
  };
};

const add10 = createAdder(10);
console.log(add10(-2));
console.log(add10(20));

const add50 = createAdder(50);
console.log(add50(-2));
console.log(add50(20));

// ---------------

const createTipper = baseTip => {
  return amount => {
    return baseTip * amount;
  };
};

const tip20 = createTipper(.2);
const tip30 = createTipper(.3);

console.log(tip20(65));
console.log(tip30(65));
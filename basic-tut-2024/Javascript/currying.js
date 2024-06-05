//currying
// basic use case
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(sum(3)(4)(5));

// real life use case of event logger with time, type, message

const logger = (time) => (type) => (message) =>
  `At ${time}, an event of type: ${type} occurred full details as: ${message}`;

const eventsNow = logger("5am");
const errorEvent = eventsNow("error");
console.log(errorEvent("cannot set properties of null"));

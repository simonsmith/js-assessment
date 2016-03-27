exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz(num) {
    if (!num || typeof num !== 'number') {return false;}

    if (!(num % 5) && !(num % 3)) {return 'fizzbuzz';}
    if (!(num % 3)) {return 'fizz';}
    if (!(num % 5)) {return 'buzz';}

    return num;
  }
};

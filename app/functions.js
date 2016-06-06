exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray(fn, arr) {
    return fn.apply(fn, arr);
  },

  speak(fn, obj) {
    return fn.call(obj);
  },

  functionFunction(str) {
    return newStr => `${str}, ${newStr}`;
  },

  makeClosures(arr, fn) {
    return arr.map(num => {
      return (i => fn.bind(null, i))(num);
    });
  },

  partial(fn, str1, str2) {
    return fn.bind(null, str1, str2);
  },

  useArguments(...args) {
    return args.reduce((initial, num) => initial + num, 0);
  },

  callIt(fn, ...args) {
    return fn.apply(null, args);
  },

  partialUsingArguments(fn, ...args) {
    return fn.bind(null, ...args);
  },

  curryIt(fn) {
    return function curried(...args) {
      if (args.length < fn.length) {
        return function () {
          curried.apply(null, args.concat(Array.from(arguments)));
        };
      }
      return fn.apply(null, args);
    };
  }
};

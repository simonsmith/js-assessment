exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf(arr, item) {
    return arr.indexOf(item);
  },

  sum(arr) {
    return arr.reduce((sum, num) => sum += num, 0);
  },

  remove(arr, item) {
    return arr.filter(num => num !== item);
  },

  removeWithoutCopy(arr, item) {
    let len = arr.length;
    while (len--) {
      if (arr[len] === item) {
        arr.splice(len, 1);
      }
    }
    return arr;
  },

  append(arr, item) {
    return arr.push(item), arr;
  },

  truncate(arr) {
    return arr.pop(), arr;
  },

  prepend(arr, item) {
    return arr.unshift(item), arr;
  },

  curtail(arr) {
    return arr.shift(), arr;
  },

  concat(arr1, arr2) {
    return [...arr1, ...arr2];
  },

  insert(arr, item, index) {
    return arr.splice(index, 0, item), arr;
  },

  count(arr, item) {
    return arr.filter(num => num === item).length;
  },

  duplicates(arr) {
    return arr.reduce((found, item, index) => {
      if (arr.includes(item, ++index) && !found.includes(item)) {
        found.push(item);
      }
      return found;
    }, []);
  },

  square(arr) {
    return arr.map(num => num * num);
  },

  findAllOccurrences(arr, target) {
    return arr.reduce((matches, item, index) => {
      if (item === target) {
        matches.push(index);
      }
      return matches;
    }, []);
  }
};

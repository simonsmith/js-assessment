exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async(value) {
    return Promise.resolve(value);
  },

  manipulateRemoteData(url) {
    return fetch(url)
      .then(response => response.json())
      .then(json => json.people.map(person => person.name).sort());
  }
};

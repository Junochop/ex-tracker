const loadLocation = (susccessFunction, errorFunction) => {
  $.get('../db/locations.json')
    .done(susccessFunction)
    .fail(errorFunction);
};

module.exports = loadLocation;

const loadEx = (susccessFunction, errorFunction) => {
  $.get('../db/ex.json')
    .done(susccessFunction)
    .fail(errorFunction);
};

module.exports = loadEx;

const writeEx = (exes) => {
  let domString = '';
  exes.forEach(exx => {
    domString += `<div class="ex card col-md-6 col-md-offset-6">`;
    domString += `<div class="thumbnail">`;
    domString += `<img src="${exx.imageSoure}" alt="" width="40%">`;
    domString += `<div class="caption">`;
    domString += `<h3 id="thumbnail-label">${exx.name}</h3>`;
    domString += `<p>${exx.flaws}</p>`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `</div>`;
  });
  return domString;

};

const writeLocation = (locations) => {
  let domString = '';
  locations.forEach(location => {
    domString += `<div class="${location.time} locationcard col-md-6">`;
    domString += `<div class="thumbnail">`;
    domString += `<img src="${location.locationImage}" alt="" width="40%">`;
    domString += `<div class="caption">`;
    domString += `<h3 id="thumbnail-label">${location.name}</h3>`;
    domString += `<p>${location.locationAddress}</p>`;
    domString += `</div>`;
    domString += `<div class="caption card-footer">`;
    domString += `<p class="zone">${location.time}</p>`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `</div>`;
  });
  return domString;

};

module.exports = {
  writeEx,
  writeLocation,
};

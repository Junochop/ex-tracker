const loadEx = require('./ex');
const loadLocation = require('./locations');
const dom = require('./dom');

const whenExLoad = (data) => {
  console.log('data', data);
  $('#ex').append(dom.writeEx(data.ex));

};

const whenExDontLoad = (error) => {
  console.log('error', error);
};

const whenLocationLoad = (data) => {
  console.log('data', data);
  $('#spot').append(dom.writeLocation(data.location));

};

const whenLocationDontLoad = (error) => {
  console.log('error', error);
};

const initializer = () => {
  loadEx(whenExLoad, whenExDontLoad);
  loadLocation(whenLocationLoad, whenLocationDontLoad);

};

module.exports = initializer;

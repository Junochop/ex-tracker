const loadEx = require('./ex');
const dom = require('./dom');

const whenExLoad = (data) => {
  console.log('data', data);
  $('#ex').append(dom.writeEx(data.ex));

};

const whenExDontLoad = (error) => {
  console.log('error', error);
};

const initializer = () => {
  loadEx(whenExLoad, whenExDontLoad);

};

module.exports = initializer;

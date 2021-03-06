jQuery.expr[':'].icontains = function (a, i, m) {
  return jQuery(a).text().toUpperCase()
    .indexOf(m[3].toUpperCase()) >= 0;
};
const timebuttonAction = () => {

  $('#morning').click(() => {

    console.log('hi');
    const morningCard = $('.Morning').closest('.locationcard');
    const otherCard = $('.Evening, .Afternoon, .Dark').closest('.locationcard');
    // $('#spot').append(morningCard);
    morningCard.show();
    otherCard.hide();

  });

  $('#noon').click(() => {

    console.log('noon');
    const noonCard = $('.Afternoon').closest('.locationcard');
    const otherCard1 = $('.Evening, .Morning, .Dark').closest('.locationcard');
    // $('#spot').append(noonCard);
    noonCard.show();
    otherCard1.hide();
  });

  $('#evening').click(() => {
    const eveningCard = $('.Evening').closest('.locationcard');
    const otherCard2 = $('.Afternoon, .Dark, .Morning').closest('.locationcard');
    eveningCard.show();
    otherCard2.hide();
  });

  $('#dark').click(() => {
    const darkCard = $('.Dark').closest('.locationcard');
    const otherCard3 = $('.Afternoon, .Evening, .Morning').closest('.locationcard');
    darkCard.show();
    otherCard3.hide();
  });

  $('#reset').click(() => {
    const allCard = $('.locationcard');

    allCard.show();
  });

};

const keyPress = () => {

  $('#inputField').keypress((e) => {
    const key = e.keyCode;
    const search = $('#inputField').val();
    if (key === 13) {
      console.log(search);
      $('.locationcard').not($(`:icontains(${search})`)).hide();

      $('#inputField').val('');
    }
  });
};

const buttonAction = () => {
  timebuttonAction();
  keyPress();

};

module.exports = buttonAction;

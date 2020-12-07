/* Add any JavaScript you need to this file. */
window.onload = function() {
  // to set all radio buttons unchecked and all contact reason text  areas invisible.

  document.querySelector('#question').checked = false;
  document.querySelector('#comment').checked = false;
  document.querySelector('#order-problem').checked = false;
  document.querySelector('.order-number').style.display = 'none';
  document.querySelector('#contact-reason-detail').style.display = 'none';

  //event listener: to adjust the form in regard to selected contact reason
  let radioButtons = Array.from(document.querySelectorAll('.radio-button'));
  radioButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      let elementId = e.target.id;
      document.querySelector('#contact-reason-detail').style.display = 'unset';
      document.querySelector('#contact-reason-detail').value = '';

      if (elementId === 'order-problem') {
        document.querySelector('.order-number').style.display = 'unset';
        document.querySelector('#contact-reason-detail').placeholder =
          'Please, type your order problem and related order details here...';
        document.querySelector('#contact-reason-detail').rows = '6';
      } else if (elementId === 'comment') {
        document.querySelector('#order-num').value = '';
        document.querySelector('.order-number').style.display = 'none';
        document.querySelector('#contact-reason-detail').placeholder =
          'Please, type your comment here...';
        document.querySelector('#contact-reason-detail').rows = '3';
      } else if (elementId === 'question') {
        document.querySelector('#order-num').value = '';
        document.querySelector('.order-number').style.display = 'none';
        document.querySelector('#contact-reason-detail').placeholder =
          'Please, type your question here...';
        document.querySelector('#contact-reason-detail').rows = '3';
      }
    });
  });

  //event listener: to reset the form
  let resetButton = document.querySelector('#reset-btn');
  resetButton.addEventListener('click', function(e) {
    document.querySelector('.contact-form').reset();
    document.querySelector('#question').checked = false;
    document.querySelector('#comment').checked = false;
    document.querySelector('#order-problem').checked = false;
    document.querySelector('#contact-reason-detail').style.display = 'none';
    document.querySelector('.order-number').style.display = 'none';
  });
};

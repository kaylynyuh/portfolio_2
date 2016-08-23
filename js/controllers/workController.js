(function () {

  function goToWorkPage () {
    $('#see-work').on('click', function(){
      page('/work');
    });
  };

  function displayWorkPage () {
    var workController = {};
    workController.reveal = function() {
      // $('.nav-item').hide();
      $('[data-section=work]').fadeIn();
    };
  };

  goToWorkPage();
  displayWorkPage();

})(window);

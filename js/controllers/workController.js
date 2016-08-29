(function (module) {

  var workController = {};

  function goToWorkPage () {
    $('#see-work').on('click', function(){
      page('/work');
    });
  };

  function displayWorkPage () {
    workController.reveal = function() {
      $('[data-section=work]').fadeIn();
    };
  };

  goToWorkPage();
  displayWorkPage();

  module.workController = workController;
})(window);

(function (module) {

  var workController = {};

  function goToWorkPage () {
    $('#see-work').on('click', function(){
      page('/work');
    });
  };

  function displayWorkPage () {
    workController.reveal = function() {
      $('.work').fadeIn();
    };
  };

  goToWorkPage();
  displayWorkPage();

  module.workController = workController;
})(window);

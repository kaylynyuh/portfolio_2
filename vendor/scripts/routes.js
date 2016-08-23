page('/', home);
page('/about', about);
page('/contact', contact);
page('/work', work);
page();

function work() {
  workController.reveal();
}

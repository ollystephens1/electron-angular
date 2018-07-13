$(() => {
  /**
   * Tabs
   */
  $('body').on('click', 'a.tab-toggle', function(event) {
    event.preventDefault();
    const id = event.target.id;

    $(`[data-tab='${id}']`).addClass('in');
    $(`[data-tab!='${id}']`).removeClass('in');
  });
});

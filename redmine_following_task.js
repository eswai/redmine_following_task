/*
Path pattern: /issues/[0-9]+
Type: JavaScript

add 'Following task' link under 'Sub task' on issue page

start date & due date = due date of preceeding task
parent issue, version, category are copied

*/

$(function(){
  var ddate = $('#issue_due_date').val();
  var parent = $('#issue_parent_issue_id').val();
  var version = $('#issue_fixed_version_id').val();
  var category = $('#issue_category_id').val();

  var subtask = $('#issue_tree');
  var addsubtask= $('#issue_tree a[href*="/issues/new"]')[0];
  if (!addsubtask) {
    return;
  }
  var addftask = new String(addsubtask.href);

  addftask = addftask.replace(/issue%5Bparent_issue_id%5D=[0-9]+&/,'');
  if (parent) {
    addftask += '&issue%5Bparent_issue_id%5D=' + parent;
  }
  if (version) {
    addftask += '&issue%5Bfixed_version_id%5D=' + version;
  }
  if (category) {
    addftask += '&issue%5Bcategory_id%5D=' + category;
  }
  if (ddate) {
    addftask += '&issue%5Bstart_date%5D=' + ddate;
    addftask += '&issue%5Bdue_date%5D=' + ddate;
  }
  subtask.after('<hr /><div id="following_task"><div class="contextual"><a href="' + addftask + '">Add</a></div><p><strong>Following task</strong></p></div>');

});
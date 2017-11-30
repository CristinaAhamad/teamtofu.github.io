var source = $('#filter-template').html();
var template = Handlebars.compile(source);
var profiles = JSON.parse(localStorage.getItem('profiles-list'));
var parentDiv = $('#filters');

$(document).ready(function() {

  parentDiv.append(html);
});

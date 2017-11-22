var source = $('#display-template').html();
var template = Handlebars.compile(source);
var profiles = JSON.parse(localStorage.getItem('profiles-list'));
var parentDiv = $('#profilespg');

function newPage() {
  var temp;

  // for (var i = 0; i < profiles.length; i++) {
  //   temp = profiles[i];

    var elems = {
      elems: profiles
    };

    // console.log(elem);

    var html = template(elems);
    parentDiv.append(html);
  // }
}

function goToProfile(elem) {
  localStorage.setItem('currentProfile', elem);

  window.location = 'profile.html';
}

$(document).ready(function() {
  newPage();
});

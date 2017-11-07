$( document ).ready(function() {
    console.log( "ready!" );
});

function getFormInfo() {
  //if there isn't an array yet, make one
  console.log(localStorage.length);
  if (localStorage.length == 0) {
    var arrayOfProfiles = [];
  } else {
    var arrayOfProfiles = JSON.parse(localStorage.getItem("profiles-list"));
  }
    //creates new profile entry
  var entry = [];
  entry.push($("#firstname").val());
  entry.push($("#lastname").val());
  entry.push($("#age").val());
  entry.push($("#sex").val());
  entry.push($("#weight").val());
  entry.push($("#height-ft").val());
  entry.push($("#height-in").val());

      //Create individual arrays to save Preferences
      //var allergies;
      //var health;
      //var dislikes;
      //var likes;
  console.log(entry);
  console.log(arrayOfProfiles);
  arrayOfProfiles.push(entry);
  localStorage.setItem("profiles-list", JSON.stringify(arrayOfProfiles));

  //for (var key in entry) {
    //var person = JSON.parse(entry[key]);
    //var div = document.getElementById('profiles-list').lastChild;
    //div.innerHTML = div.innerHTML + "<div class='entry'><ul class='no-list-style'><li><h3>"+person.firstname+" "+person.lastname+"</h3>
    //</li><li>"+person.sex+"</li><li>"+person.lbs+"</li><li>"+person.ft+"</li><li>"+person.inch+"</li></ul></div>";
  //}
};

function showInfo() {
  //window.onload = function() {
    var storedProfiles = JSON.parse(localStorage.getItem("profiles-list"));
    if (storedProfiles) {
      //figure out how to display one profile at a time
      //arrayOfProfiles[0] should be the first one
      document.getElementById('display-profile').innerHTML = storedProfiles[0];
    }
    $("#firstname").text("name");
};

function addToProfilePage(profName) {
  //dynamically add profile photo and name to profiles page
  var currentFirst = localStorage.getItem('firstname');
  var currentLast = localStorage.getItem('lastname');
  var currentPhoto = localStorage.getItem('profile-photo');

  document.getElementById('firstname').value = currentFirst;
  document.getElementById('lastname').value = currentLast;

  //if no profile photo, default
  if(!currentPhoto) {
    document.getElementById('profile-photo').value="img/jrdo.png";
  } else {
    document.getElementById('profile-photo').value = currentPhoto;
  }
};

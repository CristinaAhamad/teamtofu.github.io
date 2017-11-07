function getFormInfo() {
  //if there isn't an array yet, make one
  if (!arrayOfProfiles) {
    var arrayOfProfiles = [];
  } else {
    //creates new profile entry
    var entry = {
      firstname:document.getElementById('firstname').value,
      lastname:document.getElementById('lastname').value,
      sex:document.getElementById('sex').value,
      lbs:document.getElementById('weight').value,
      ft:document.getElementById('height-ft').value,
      inch:document.getElementById('height-in').value,

      //Create individual arrays to save Preferences
      //var allergies;
      //var health;
      //var dislikes;
      //var likes;
    };

    arrayOfProfiles.push(entry);
    localStorage.setItem("profiles-list", JSON.stringify(arrayOfProfiles));
  }
  //for (var key in entry) {
    //var person = JSON.parse(entry[key]);
    //var div = document.getElementById('profiles-list').lastChild;
    //div.innerHTML = div.innerHTML + "<div class='entry'><ul class='no-list-style'><li><h3>"+person.firstname+" "+person.lastname+"</h3>
    //</li><li>"+person.sex+"</li><li>"+person.lbs+"</li><li>"+person.ft+"</li><li>"+person.inch+"</li></ul></div>";
  //}
};

function showInfo() {
  window.onload = function() {
    var storedProfiles = JSON.parse(localStorage.getItem("profiles-list"));
    if (storedProfiles) {
      //figure out how to display one profile at a time
      //arrayOfProfiles[0] should be the first one
      document.getElementById('display-profile').innerHTML;
    }
  }
}

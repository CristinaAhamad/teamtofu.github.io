function getFormInfo() {
  //if there isn't an array yet, make one
  if (localStorage.length == 0) {
    var arrayOfProfiles = [];
    janeLikes = ['Black Beans', 'Cauliflower'];
    johnHealth = ['Vegetarian'];
    johnDislikes = ['Cauliflower'];
    johnLikes = ['Quinoa'];
    arrayOfProfiles = [
      {'firsname': 'Jane', 'lastname': 'Doe', 'age': '47', 'sex': 'Female', 'weight:': '130', 'height-ft': '5',
      'height-in': '4', 'allergies':'', 'health':'', 'dislikes':'', 'likes': janeLikes },
      {'firsname': 'John', 'lastname': 'Doe', 'age': '50', 'sex': 'Male', 'weight:': '170', 'height-ft': '5',
        'height-in': '11', 'allergies':'', 'health':johnHealth, 'dislikes':johnDislikes, 'likes': johnLikes}
      ]
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
  var aArray = [];
    aArray.push($("#allergies").val());
  entry.push(aArray);

  var hArray = [];
      hArray.push($("#health").val());
  entry.push(hArray);

  var dArray = [];
      dArray.push($("#dislikes").val());
  entry.push(dArray);

  var lArray =[];
      lArray.push($("#likes").val());
  entry.push(lArray);

  arrayOfProfiles.push(entry);
  localStorage.setItem("profiles-list", JSON.stringify(arrayOfProfiles));

  addToProfilePage();
};


function showInfo() {

    var storedProfiles = JSON.parse(localStorage.getItem("profiles-list"));
    var person = storedProfiles[storedProfiles.length-1];

    $(".newprof").append('<h1 display="inline" clear="none" id="firstname">'+person[0]+'<h1 display="inline" clear="none" id="lastname">'+" "+person[1]+ '</h1>');
    $(".newprof").append('</br> </br> <legend>GENERAL</legend>');
    $(".newprof").append('<text size="30" id="age"/>'+person[2]+' yrs. old </text></br>');
    $(".newprof").append('<text size="30" id="sex"/>'+person[3]+'</text></br>');
    $(".newprof").append('<text size="30" id="weight"/>'+person[4]+' lbs.</text> </br>');
    $(".newprof").append('<text size="30" id="height-ft"/>'+person[5]+' ft.');
    $(".newprof").append('<text size="30" id="height-in"/>'+person[6]+' in. </text></text></br></br>');
    $(".newprof").append('<legend>PREFERENCES</legend> <div> <h3> Allergies: </h3> <text size="30"/> '+person[7]+' </text></div>');
    $(".newprof").append('<div> <h3> Health Concerns: </h3> <text size="30"/> '+person[8]+' </text></div>');
    $(".newprof").append('<div> <h3> Dislikes: </h3><text size="30"/> '+person[9]+' </text></div>');
    $(".newprof").append('<div> <h3> Likes: </h3><text size="30"/> '+person[10]+' </text></div>');
    //$(".newprof").append('</fieldset>');
};

function updateProfileInfo(num) {

    var storedProfiles = JSON.parse(localStorage.getItem("profiles-list"));
    var person = storedProfiles[num];

    person[0] = $("#firstname").val();
    person[1] = $("#lastname").val();
    person[2] = $("#age").val();
    person[3] = ($("#sex").val());
    person[4] = ($("#weight").val());
    person[5] = ($("#height-ft").val());
    person[6] = ($("#height-in").val());
    person[7] = ($("#allergies").val());
    person[8] = ($("#health").val());
    person[9] = ($("#dislikes").val());
    person[10] = ($("#likes").val());
};

function updateProfile(num) {
  var storedProfiles = JSON.parse(localStorage.getItem("profiles-list"));
  var person = storedProfiles[num];

  document.getElementbyID("firstname").innerHTML = person[0];
  document.getElementbyID("lastname").innerHTML = person[1];
  document.getElementbyID("age").innerHTML = person[2];
  document.getElementbyID("sex").innerHTML = person[3];
  document.getElementbyID("weight").innerHTML = person[4];
  document.getElementbyID("height-ft").innerHTML = person[5];
  document.getElementbyID("height-in").innerHTML = person[6];
  document.getElementbyID("allergies").innerHTML = person[7];
  document.getElementbyID("health").innerHTML = person[8];
  document.getElementbyID("dislikes").innerHTML = person[9];
  document.getElementbyID("likes").innerHTML = person[10];
};

function addToProfilePage() {
  console.log("add prof");
  //dynamically add profile photo and name to profiles page
  var storedProfiles = JSON.parse(localStorage.getItem("profiles-list"));
  var person = storedProfiles[storedProfiles.length - 1]; //get newly added profile

  var currentFirst = person[0];
  var currentLast = person[1];
  var fullName = currentFirst+" "+currentLast;

  var currentPhoto = "img/jrdo.png";

  $(".profilespg").append('<img src='+currentPhoto+' style="width:150px;height:140px;border:0;" href="https://cristinaahamad.github.io/teamtofu/profile.html">');
  $(".profilespg").append('a href="https://cristinaahamad.github.io/teamtofu/profile.html"> <font class="prof-name" size="5">'+fullName+'</font></a> </br> </br>');

};

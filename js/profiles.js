function getFormInfo() {
  //if there isn't an array yet, make one
  if (localStorage.length == 0) {
    var arrayOfProfiles = [];
    arrayOfProfiles = [
      ['Jane','Doe','47','Female','130','5','4','[]','[]','[]', '["Black Beans", "Cauliflower"]' ],
      ['John','Doe','50','Male','170','5','11','[]','["Vegetarian"]','["Cauliflower"]', '["Quinoa"]' ]
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
  $(".allergies").each(function() {
    aArray.push($(this).val());
  });
  entry.push(aArray);

  var hArray = [];
  $(".health").each(function() {
    hArray.push($(this).val());
  });
  entry.push(hArray);

  var dArray = [];
  $(".dislikes").each(function() {
    dArray.push($(this).val());
  });
  entry.push(dArray);

  var lArray =[];
  $(".likes").each(function() {
    lArray.push($(this).val());
  });
  entry.push(lArray);

  arrayOfProfiles.push(entry);
  localStorage.setItem("profiles-list", JSON.stringify(arrayOfProfiles));

  addToProfilePage();
};


function showInfo() {

    var storedProfiles = JSON.parse(localStorage.getItem("profiles-list"));
    var person = storedProfiles[storedProfiles.length-1];

    $(".newprof").append('<h1 display="inline" clear="none" id="firstname">'+person[0]+'<h1 display="inline" clear="none" id="lastname">'+" "+person[1]+ '</h1>');
    $(".newprof").append('<div class="titlebar"> <h2>General</h2> </div><text size="30" id="age"/>'+person[2]+' yrs. old </text></br>');
    $(".newprof").append('<text size="30" id="sex"/>'+person[3]+'</text></br> <text size="30" id="weight"/>'+person[4]+' lbs.</text></br>');
    $(".newprof").append('<text size="30" id="height-ft"/>'+person[5]+' ft. <text size="30" id="height-in"/>'+person[6]+' in. </text></text></br>');
    $(".newprof").append('<div class="titlebar" style="background-color:#2f8c66;"><h2>Preferences</h2></div> <div> <h3> Allergies: </h3> <text size="30"/> '+person[7]+' </text>');
    $(".newprof").append('</div> <div> <h3> Health Concerns: </h3> <text size="30"/> '+person[8]+' </text></div> <div> <h3> Dislikes: </h3><text size="30"/> '+person[9]+' </text></div>');
    $(".newprof").append('<div> <h3> Likes: </h3><text size="30"/> '+person[10]+' </text></div>');
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
  document.getElementbyID("age").innerHTML = person[2] + "yrs. old";
  document.getElementbyID("sex").innerHTML = person[3];
  document.getElementbyID("weight").innerHTML = person[4];
  document.getElementbyID("height-ft").innerHTML = person[5] + "ft. ";
  document.getElementbyID("height-in").innerHTML = person[6] + "in.";
  document.getElementbyID("allergies").innerHTML = person[7];
  document.getElementbyID("health").innerHTML = person[8];
  document.getElementbyID("dislikes").innerHTML = person[9];
  document.getElementbyID("likes").innerHTML = person[10];
};

function addToProfilePage() {
  console.log("add prof");
  //dynamically add profile photo and name to profiles page
  var storedProfiles = JSON.parse(localStorage.getItem("profiles-list"));
  console.log(storedProfiles.length - 1);
  var person = storedProfiles[storedProfiles.length - 1]; //get newly added profile

  var currentFirst = person[0];
  var currentLast = person[1];
  var fullName = currentFirst+" "+currentLast;

  var data = '<a style="display:block" href="https://cristinaahamad.github.io/teamtofu/profile.html"> <img src="img/jrdo.png" style="width:40%;height:40%;border:0;"> <font class="prof-name" size="5">'+ fullName+'</font> </a>';

  $.get("https://cristinaahamad.github.io/teamtofu/profiles-page.html", function(data) {
    $("#profilespg").append(data);
  });

  window.location ="https://cristinaahamad.github.io/teamtofu/profiles-page.html";
};

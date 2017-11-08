function getFormInfo() {
  //if there isn't an array yet, make one
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
  var aArray = [];
    aArray.push($(".allergies").val());
  entry.push(aArray);

  var hArray = [];
      hArray.push($(".health").val());
  entry.push(hArray);

  var dArray = [];
      dArray.push($(".dislikes").val());
  entry.push(dArray);

  var lArray =[];
      lArray.push($(".likes").val());
  entry.push(lArray);

  arrayOfProfiles.push(entry);
  localStorage.setItem("profiles-list", JSON.stringify(arrayOfProfiles));
};


function showInfo() {
    console.log("showinfo");

    var storedProfiles = JSON.parse(localStorage.getItem("profiles-list"));
    var person = storedProfiles[storedProfiles.length-1];
    console.log(person);

    $(".newprof").append('<h1 display="inline" clear="none" id="firstname">'+person[0]+'<h1 display="inline" clear="none" id="lastname">'+ person[1]+ '</h1>');
    $(".newprof").append('</br> </br> <fieldset> <legend>GENERAL</legend>');
    $(".newprof").append('<text size="30" id="age"/>'+person[2]+' yrs. old </text></br>');
    $(".newprof").append('<text size="30" id="sex"/>'+person[3]+'</text></br>');
    $(".newprof").append('<text size="30" id="weight"/>'+person[4]+'lbs.</text> </br>');
    $(".newprof").append('<text size="30" id="height-ft"/>'+person[5]+'ft.');
    $(".newprof").append('<text size="30" id="height-in"/>'+person[6]+'in. </text></text></br>');
    $(".newprof").append('</fieldset> <fieldset> <legend>PREFERENCES</legend> <div> <h3> Allergies: </h3> <text size="30"/> '+person[7]+' </text></div>');
    $(".newprof").append('<div> <h3> Health Concerns: </h3> <text size="30"/> '+person[8]+' </text></div>');
    $(".newprof").append('<div> <h3> Dislikes: </h3><text size="30"/> '+person[9]+' </text></div>');
    $(".newprof").append('<div> <h3> Likes: </h3><text size="30"/> '+person[10]+' </text></div>');
    $(".newprof").append('</fieldset>');
};


function addToProfilePage() {
  console.log("add prof");
  //dynamically add profile photo and name to profiles page
  var storedProfiles = JSON.parse(localStorage.getItem("profiles-list"));
  var person = storedProfiles[storedProfiles.length - 1]; //get newly added profile

  var currentFirst = person[0];
  var currentLast = person[1];
  var fullName = currentFirst+" "+currentLast;

  var currentPhoto = person[10];

  //if no profile photo, default
  if(!currentPhoto) {
    currentPhoto = "img/jrdo.png";
  }

  $.get("https://cristinaahamad.github.io/teamtofu/profiles-page.html", function () {
    $(".profilespg").append('<img src='+currentPhoto+' style="width:150px;height:140px;border:0;" href="https://cristinaahamad.github.io/teamtofu/profile.html">');
    $(".profilespg").append('a href="https://cristinaahamad.github.io/teamtofu/profile.html"> <font class="prof-name" size="5">'+fullName+'</font>');
    $(".profilespg").append('</a> </br> </br>');
  });

};

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

    person[0] = $(".firstname").val() + " ";
    person[1] = $(".lastname").val();
    person[2] = $(".age").val();
    person[3] = ($(".sex").val());
    person[4] = ($(".weight").val());
    person[5] = ($(".height-ft").val());
    person[6] = ($(".height-in").val());

    var aArray = [];
    $(".allergies").each(function() {
      aArray.push($(this).val());
    });
    person[7] = aArray;

    var hArray = [];
    $(".health").each(function() {
      hArray.push($(this).val());
    });
    person[8] = hArray;

    var dArray = [];
    $(".dislikes").each(function() {
      dArray.push($(this).val());
    });
    person[9] = dArray;

    var lArray =[];
    $(".likes").each(function() {
      lArray.push($(this).val());
    });
    person[10] = hArray;


    storedProfiles[num] = person;
    localStorage.setItem("profiles-list", JSON.stringify(storedProfiles));

    updateProfile(num);

    history.back();
    return false;
};

function updateProfile(num) {
  var storedProfiles = JSON.parse(localStorage.getItem("profiles-list"));
  var person = storedProfiles[num];

  for (i=0; i < 11; i++) {
      if (!person[i]) {
        person[i] = " ";
      }
  }

  if (num == 0) {
    document.getElementById("jane-first").innerHTML = person[0];
    document.getElementById("jane-last").innerHTML = person[1];
    document.getElementById("jane-age").innerHTML = person[2] + "yrs. old";
    document.getElementById("jane-sex").innerHTML = person[3];
    document.getElementById("jane-weight").innerHTML = person[4];
    document.getElementById("jane-height-ft").innerHTML = person[5] + "ft. ";
    document.getElementById("jane-height-in").innerHTML = person[6] + "in.";
    document.getElementById("jane-allergies").innerHTML = person[7];
    document.getElementById("jane-health").innerHTML = person[8];
    document.getElementById("jane-dislikes").innerHTML = person[9];
    document.getElementById("jane-likes").innerHTML = person[10];
  }

  else {
    document.getElementById("john-first").innerHTML = person[0];
    document.getElementById("john-last").innerHTML = person[1];
    document.getElementById("john-age").innerHTML = person[2] + "yrs. old";
    document.getElementById("john-sex").innerHTML = person[3];
    document.getElementById("john-weight").innerHTML = person[4];
    document.getElementById("john-height-ft").innerHTML = person[5] + "ft. ";
    document.getElementById("john-height-in").innerHTML = person[6] + "in.";
    document.getElementById("john-allergies").innerHTML = person[7];
    document.getElementById("john-health").innerHTML = person[8];
    document.getElementById("john-dislikes").innerHTML = person[9];
    document.getElementById("john-likes").innerHTML = person[10];
  }

  history.back();
  return false;
};

function addToProfilePage() {
  //dynamically add profile photo and name to profiles page
  var storedProfiles = JSON.parse(localStorage.getItem("profiles-list"));
  var person = storedProfiles[storedProfiles.length - 1]; //get newly added profile

  var currentFirst = person[0];
  var currentLast = person[1];
  var fullName = currentFirst+" "+currentLast;
  var currentPhoto="img/jrdo.png";

  /*
  <img src='+currentPhoto+' style="width:37%;height:37%;border:0;">
  */

  window.location="https://cristinaahamad.github.io/teamtofu/profiles-page.html";

  $("#newprof").append('<font class="prof-name" size="5">'+ fullName+'</font> </a>');
  return false;
};

function deleteProfile(num) {
  if (num == 0){
    if (confirm("Are you sure you want to delete this profile?") == true) {
       $("#profjane").remove();
       alert("Deleted!");
       window.location="https://cristinaahamad.github.io/teamtofu/profiles-page.html";
    } else {
       alert("Your profile remains unchanged.");
       history.back();
    }
  }

  else if (num == 1){
    if (confirm("Are you sure you want to delete Jane's profile?") == true) {
       $("#profjohn").remove();
       alert("Deleted!");
       window.location="https://cristinaahamad.github.io/teamtofu/profiles-page.html";
    } else {
       alert("Your profile remains unchanged.");
       history.back();
    }
  }

  else {
    if (confirm("Are you sure you want to delete John's profile?") == true) {
       $(".newprof").remove();
       alert("Deleted!");
       window.location="https://cristinaahamad.github.io/teamtofu/profiles-page.html";
    } else {
       alert("Your profile remains unchanged.");
       history.back();
    }
  }

};

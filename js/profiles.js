function getFormInfo() {
  //if there isn't an array yet, make one
  if (localStorage.length == 0) {
    var arrayOfProfiles = [];
    arrayOfProfiles = [
      ['Jane','Doe','47','Female','130','5','4','','','', 'Black Beans, </br> Cauliflower' ],
      ['John','Doe','50','Male','170','5','11','','Vegetarian','Cauliflower', 'Quinoa' ]
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
    aArray.push('</br>');
  });
  entry.push(aArray);

  var hArray = [];
  $(".health").each(function() {
    hArray.push($(this).val());
    hArray.push('</br>');
  });
  entry.push(hArray);

  var dArray = [];
  $(".dislikes").each(function() {
    dArray.push($(this).val());
    dArray.push('</br>');
  });
  entry.push(dArray);

  var lArray =[];
  $(".likes").each(function() {
    lArray.push($(this).val());
    lArray.push('</br>');
  });
  entry.push(lArray);

  arrayOfProfiles.push(entry);
  localStorage.setItem("profiles-list", JSON.stringify(arrayOfProfiles));

  addToProfilePage();
};


function showInfo() {

    var storedProfiles = JSON.parse(localStorage.getItem("profiles-list"));
    var elem = JSON.parse(localStorage.getItem("currentProfile"));
    var person = storedProfiles[elem];

    $(".newprof").append('<h1 display="inline" clear="none" id="firstname">'+person[0]+'<h1 display="inline" clear="none" id="lastname">'+" "+person[1]+ '</h1>');
    $(".newprof").append('<div class="titlebar"> <h2>General</h2> </div><text size="30" id="age"/>'+person[2]+' yrs. old </text></br>');
    $(".newprof").append('<text size="30" id="sex"/>'+person[3]+'</text></br> <text size="30" id="weight"/>'+person[4]+' lbs.</text></br>');
    $(".newprof").append('<text size="30" id="height-ft"/>'+person[5]+' ft. <text size="30" id="height-in"/>'+person[6]+' in. </text></text></br>');
    $(".newprof").append('<div class="titlebar" style="background-color:#2f8c66;"><h2>Preferences</h2></div> <div> <h3> Allergies: </h3> <text size="30"/> '+person[7]+' </text>');
    $(".newprof").append('</div> <div> <h3> Health Concerns: </h3> <text size="30"/> '+person[8]+' </text></div> <div> <h3> Dislikes: </h3><text size="30"/> '+person[9]+' </text></div>');
    $(".newprof").append('<div> <h3> Likes: </h3><text size="30"/> '+person[10]+' </text></div>');
};


function updateProfileInfo() {
    var storedProfiles = JSON.parse(localStorage.getItem("profiles-list"));
    var elem = JSON.parse(localStorage.getItem("currentProfile"));
    var person = storedProfiles[elem];

    if ($(".firstname").val() == ''){
      //no change
      person[0] = person [0];
    } else {
      person[0] = $(".firstname").val() + " ";
    }
    if ($(".lastname").val() == ''){
      //no change
      person[1] = person [1];
    } else {
      person[1] = $(".lastname").val();
    }
    if ($(".age").val() == ''){
      //no change
      person[2] = person [2];
    } else {
      person[2] = $(".age").val();
    }
    if ($(".sex").val() == null){
      //no change
      person[3] = person [3];
    } else {
      person[3] = ($(".sex").val());
    }
    if ($(".weight").val() == ''){
      //no change
      person[4] = person [4];
    } else {
      person[4] = ($(".weight").val());
    }
    if ($(".height-ft").val() == ''){
      //no change
      person[5] = person [5];
    } else {
      person[5] = ($(".height-ft").val());
    }
    if ($(".height-in").val() == ''){
      //no change
      person[6] = person [6];
    } else {
      person[6] = ($(".height-in").val());
    }


    if ($(".allergies").val() == null){
      //no change
      person[7] = person [7];
    } else {
      var aArray = [];
      $(".allergies").each(function() {
        aArray.push($(this).val());
        aArray.push('</br>');
      });
      person[7] = aArray;
    }

    if ($(".health").val() == null){
      //no change
      person[8] = person [8];
    } else {
      var hArray = [];
      $(".health").each(function() {
        hArray.push($(this).val());
        hArray.push('</br>');
      });
      person[8] = hArray;
    }

    if ($(".dislikes").val() == null){
      //no change
      person[9] = person [9];
    } else {
      var dArray = [];
      $(".dislikes").each(function() {
        dArray.push($(this).val());
        dArray.push('</br>');
      });
      person[9] = dArray;
    }

    if ($(".likes").val() == null){
      //no change
      person[10] = person [10];
    } else {
      var lArray =[];
      $(".likes").each(function() {
        lArray.push($(this).val());
        lArray.push('</br>');
      });
      person[10] = hArray;
    }

    storedProfiles[elem] = person;
    localStorage.setItem("profiles-list", JSON.stringify(storedProfiles));

    history.back();
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

  window.location="profiles-page.html";

  $("#newprof").append('<font class="prof-name" size="5">'+ fullName+'</font> </a>');
  return false;
};

function deleteProfile(num) {
  var storedProfiles = JSON.parse(localStorage.getItem("profiles-list"));
  var elem = JSON.parse(localStorage.getItem("currentProfile"));
  console.log(elem);
  console.log(storedProfiles.length);
  var person = storedProfiles[elem];

    if (confirm("Are you sure you want to delete this profile?") == true) {
      if (elem == storedProfiles.length+1) {
        storedProfiles.pop();
        localStorage.setItem("profiles-list", JSON.stringify(storedProfiles));
        alert("Deleted!");
        window.location="profiles-page.html";
      } else {
        var j = elem + 1;
        for (var i = elem; i < storedProfiles.length; i++){
          storedProfiles[i] = storedProfiles [j];
          j++;
        }
        storedProfiles[storedProfiles.length-1] = person;
        storedProfiles.pop();
        localStorage.setItem("profiles-list", JSON.stringify(storedProfiles));
        alert("Deleted!");
        window.location="profiles-page.html";
      }
    }
    else {
      alert("Your profile remains unchanged.");
      history.back();
    }

};

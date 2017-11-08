$( document ).ready(function getFormInfo() {
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

  localStorage.length = arrayOfProfiles.length;

  arrayOfProfiles.push(entry);
  localStorage.setItem("profiles-list", JSON.stringify(arrayOfProfiles));
  
  addToProfilePage();
});


function showInfo(index) {
  //window.onload = function() {
    var storedProfiles = JSON.parse(localStorage.getItem("profiles-list"));
    var person = storedProfiles[index];

    $(document).append('<h1 display="inline" clear="none" id="firstname">'+person[0]+'<h1 display="inline" clear="none" id="lastname">'+ person[1]+ '</h1>');
    $(document).append('</br> </br> <fieldset> <legend>GENERAL</legend>');
    $(document).append('<text size="30" id="age"/>'+person[2]+' yrs. old </text></br>');
    $(document).append('<text size="30" id="sex"/>'+person[3]+'</text></br>');
    $(document).append('<text size="30" id="weight"/>'+person[4]+'lbs.</text> </br>');
    $(document).append('<text size="30" id="height-ft"/>'+person[5]+'ft.');
    $(document).append('<text size="30" id="height-in"/>'+person[6]+'in. </text></text></br>');
    $(document).append('</fieldset> <fieldset> <legend>PREFERENCES</legend> <div> <h3> Allergies: </h3>');
    $(document).append('<div> <h3> Health Concerns: </h3>');
    $(document).append('<div> <h3> Dislikes: </h3>');
    $(document).append('<div> <h3> Likes: </h3>');
    $(document).append('</fieldset>');
};


function addToProfilePage() {
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

    $(".profilespg").append('<img src='+currentPhoto+' style="width:150px;height:140px;border:0;" href="http://cristinaahamad.github.io/teamtofu/profile.html">');
    $(".profilespg").append('a href="http://cristinaahamad.github.io/teamtofu/profile.html"> <font class="prof-name" size="5">'+fullName+'</font>');
    $(".profilespg").append('</a> </br> </br>');

};




/* Buttons for Preferences */
$(document).ready(function() {
    var max_fields      = 10; //maximum input boxes allowed
    var wrapper         = $(".input_fields_wrap1"); //Fields wrapper
    var add_button      = $(".add_field_button1"); //Add button ID

    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div><input type="text" class="allergies" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
        }
    });

    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});

$(document).ready(function() {
    var max_fields      = 10; //maximum input boxes allowed
    var wrapper         = $(".input_fields_wrap2"); //Fields wrapper
    var add_button      = $(".add_field_button2"); //Add button ID

    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div><input type="text" class="health" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
        }
    });

    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});

$(document).ready(function() {
    var max_fields      = 10; //maximum input boxes allowed
    var wrapper         = $(".input_fields_wrap3"); //Fields wrapper
    var add_button      = $(".add_field_button3"); //Add button ID

    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div><input type="text" class="dislikes" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
        }
    });

    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});

$(document).ready(function() {
    var max_fields      = 10; //maximum input boxes allowed
    var wrapper         = $(".input_fields_wrap4"); //Fields wrapper
    var add_button      = $(".add_field_button4"); //Add button ID

    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div><input type="text" class="likes" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
        }
    });

    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});

function getFormInfo() {
  var firstname = document.getElementById('firstname').value;
  localStorage.setItem("firstname", firstname.value);
  var lastname = localStorage.getElementItem('lastname').value;
  localStorage.setItem("lastname", lastname.value);
  var sex = localStorage.getElementItem('sex').value;
  localStorage.setItem("sex", sex.value);
  var lbs = localStorage.getElementItem('weight').value;
  localStorage.setItem("weight", lbs.value);
  var ft = localStorage.getElementItem('height-ft').value;
  localStorage.setItem("height-ft", ft.value);
  var inch = localStorage.getElementItem('height-in').value;
  localStorage.setItem("height-in", inch.value);

  //Preferences


}

$('#profile').showInfo() {
  var storedFN = localStorage.getItem("firstname");
}

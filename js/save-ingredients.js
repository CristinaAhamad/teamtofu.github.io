function getIngredients() {
  if (localStorage.length == 0) {
    var arrayOfIngredients = [];
    arrayOfIngredients = [
      {'ingredients': ['Black Beans', 'Cauliflower', 'Quinoa', 'onion'] },
      ]
  } else {
    var arrayOfIngredients = JSON.parse(localStorage.getItem("ingredients-list")); //not sure about this one
  }

  //creates new ingredients entry
  var entry = [];
  entry.push($("#ingredients").val()); //do I need to copy this line for every ingrdient?

  //Create individual arrays to save ingrdients
  var iArray = [];
    aArray.push($("#ingrdients").val());
  entry.push(aArray);

  addToMyShoppingList();
};

function showInfo() {

    var storedIngredients = JSON.parse(localStorage.getItem("ingredients-list"));
    var food = storedIngredients[storedIngredients.length-1];

    $(".newprof").append('<h1 display="inline" clear="none" id="ingrdients">'+person[0]);

function updateShoppingList(num) {

    var storedIngredients = JSON.parse(localStorage.getItem("ingredients-list"));
    var food = storedIngredients[num];

    food[0] = $("#ingredients").val();
};

function updateList(num) {
  var storedIngredients = JSON.parse(localStorage.getItem("ingredients-list"));
  var food = storedIngredients[num];

  document.getElementbyID("ingredients").innerHTML = food[0];
};

function addToMyShoppingList() {
  console.log("add food");
  //dynamically add profile photo and name to profiles page
  var storedIngredients = JSON.parse(localStorage.getItem("ingredients-list"));
  var food = storedIngredients[storedIngredients.length - 1]; //get newly added profile

  var foodlist = food[0];
  var fullList = foodlist+" ";

  $("#ingredients").append('<div onclick="https://cristinaahamad.github.io/teamtofu/profile.html">' );

};

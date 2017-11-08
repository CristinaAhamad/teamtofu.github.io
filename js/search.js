resetAll();

function resetAll() {
  var x, i;
  x = document.getElementsByClassName("filterDiv");

  for (i = 0; i < x.length; i++) {
    AddClass(x[i], "show");
  }
}

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");

  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    if (x[i].className.indexOf(c) < 0) RemoveClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var filters = document.getElementById('filters');

filters.addEventListener('click', handleFilters);

function handleFilters(event) {
  if (event.target.type === 'checkbox') {
    resetAll();

    var selected = document.querySelectorAll('#filters input[type="checkbox"]:checked');
    if (selected.length) {
      selected.forEach(function (item) {
        filterSelection(item.name);
      })
    }
  }
}

/**
 * Author:    Name
 * Created:   11.05.2009
 *
 * (c) Copyright by Blub Corp.
 **/




 // Gets the value of your input field


 // Runs that value through your sort() or anagram() function and saves the results.
function putNameInTitle() {

  var field = document.getElementById("myfield");
var name = field.value

// Replaces the html in <div id=output> with the results.

  var headingEl = document.getElementById("output");
  headingEl.innerHTML = "Hello " + name;
}

// Attach an event listener to your button that does the following:
var buttonEl = document.getElementById("user-name");
buttonEl.addEventListener("click", putNameInTitle);

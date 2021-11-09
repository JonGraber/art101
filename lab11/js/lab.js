/**
 * Author:    Jonathan Graber
 * Created:   11.05.2021
 *
 * (c) Copyright by Blub Corp.
 **/

// Add a click event to each button
$("#c-button").click(function(){

  $(this).parent().toggleClass("special");
})

$("#p-button").click(function(){

  $(this).parent().toggleClass("special");
})

$("#r-button").click(function(){

  $(this).parent().toggleClass("special");
})
// Using jQuery, do the following for each button:
// Add a click event to each button
// Find the challenge, problems, or results section the button is in.
// Toggle a class special within the <div> of the section
// Go into your css and style each of the classes
// Test each button

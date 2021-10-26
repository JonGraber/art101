/**
 * Author:    Name
 * Created:   11.05.2009
 *
 * (c) Copyright by Blub Corp.
 **/

//Declare and define variables

//Sort the letters of the user's name and return those from the function. Hint: You can't sort strings, but you can sort arrays. Can you convert it back and forth?
function sortUserName() {
  var userName = window.prompt("Hello, please write your name");
  //console.log("userName =", userName);
  //string to arrays
  var nameArray = userName.split('');
  //console.log("nameArray =", nameArray);
  //sort array
  var nameSorted = nameArray.sort();
  //console.log("nameArraySort =", nameArraySort);
  //Array back to strings
  var nameArraySort = nameSorted.join('');
//console.log("nameSorted =", nameSorted);
  return nameArraySort;
}

//output
document.writeln("Here is your new name: ",
  sortUserName(),"</br>");

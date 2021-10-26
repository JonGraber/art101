/**
 * Author:    Name
 * Created:   11.05.2009
 *
 * (c) Copyright by Blub Corp.
 **/

//array of numbers

 var jArray = [2, 10, 11, 24, 26]

console.log("My array", jArray)

//multiply array by 2

 function timesTwo(jArray){
    var results = 2 * jArray
    return results
}

array2x = jArray.map(timesTwo);
console.log("Times two: ", array2x)

//get the square root of the numbers in the array

sqrroot = jArray.map(function(n){
  return Math.sqrt(n);
});
console.log("Square root of: ", sqrroot)

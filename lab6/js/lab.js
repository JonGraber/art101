/**
 * Author:    Name
 * Created:   11.05.2009
 *
 * (c) Copyright by Blub Corp.
 **/

//Declare and define variables

 var myTransport = ["car", "skateboard", "walk", "bus"]


 var myMainRide = {
    make: "Ford",
    model: "Focus",
    color: "Blue",
    year: 2013,
    ownIt: true,
    age: function() {
      return 2021 - age;
    }
}

//Output

document.writeln("Kinds of Transport I use: ",myTransport, " </br>");
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

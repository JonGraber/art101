/**
 * Author:    Jonathan Graber
 * Created:   11.05.2009
 *
 * (c) Copyright by Blub Corp.
 **/
 function sortinghat(str) {
   len = str.length;
   mod = len % 4;
   if (mod == 0) {
     return "Gryffindor , Gryffindor valued bravery, daring, nerve, and chivalry. Its emblematic animal was the lion, and its colours were scarlet and gold. Minerva McGonagall was the most recent Head of Gryffindor."
   }
   else if (mod == 1) {
     return "Ravenclaw , Ravenclaw valued intelligence, knowledge, curiosity, creativity and wit. Its emblematic animal was the eagle, and its colours were blue and bronze. The Ravenclaw Head of House in the 1990s was Filius Flitwick. The ghost of Ravenclaw was the Grey Lady, who was the daughter of Rowena Ravenclaw, the House's founder."
   }
   else if (mod == 2) {
     return "Slytherin , Slytherin valued ambition, leadership, self-preservation, cunning and resourcefulness and was founded by Salazar Slytherin. Its emblematic animal was the serpent, and its colours were emerald green and silver. Professor Horace Slughorn was the Head of Slytherin during the 1997–1998 school year, replacing Severus Snape, who as well replaced Slughorn as Potions Professor when he retired for the first time several years prior."
   }
   else if (mod == 3) {
     return "Hufflepuff , Hufflepuff valued hard work, dedication, patience, loyalty, and fair play. Its emblematic animal was the badger, and yellow and black were its colours. Pomona Sprout was the Head of Hufflepuff during 1991–1998, Sprout left the post of Head of Hufflepuff and Herbology Professor sometime before 2017 and her successor for the position of Head of Hufflepuff was currently unknown. The Fat Friar was its ghost. The founder of the House was Helga Hufflepuff."
   }
 }
 var mybutton = document.getElementById("button");
 mybutton.addEventListener("click", function() {
   var name = document.getElementById("input").value;
   var house = sortinghat(name);
   newText = "<p> The Sorting Hat has placed you into " + house + "</p>";
   document.getElementById("output").innerHTML = newText;
 })

"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Clint Crockett
   Date:   Feb 5
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/
var reportHTML = "<h1>" + raceTitle + "</h1>";
for(var i = 0; i<race.length; i++){
   var totalVotes = 0;
   //this will calculate the votes
   votes[i].forEach(calcSum);
   reportHTML += "<table>";
   reportHTML += "<caption>" + race[i] + "</caption>";
   reportHTML += "<tr><th>Candidate</th><th>Votes</th></tr>";
   reportHTML += candidateRows(i, totalVotes);
   reportHTML += "</table>";
}

document.getElementsByTagName("section")[0].innerHTML = reportHTML;

function candidateRows(raceNum, totalVotes){
   var rowHTML = "";
   for(var j = 0; j<3; j++){
      var candidateName = candidate[i][j];
      var candidateParty = party[i][j];
      var candidateVotes = votes[i][j];
      //this will tell the k array how to find the graph percent
      var candidatePercent = calcPercent(candidateVotes, totalVotes);

      rowHTML += "<tr>";
      rowHTML += "<td>" + candidateName + " (" + candidateParty + ")</td>";
      rowHTML += "<td>" + candidateVotes.toLocaleString() + " (" + candidatePercent.toFixed(1) + ") </td>";
      //this will calculate the percent for the graphs
      for(var k = 0; k<candidatePercent; k++){
         rowHTML += createBar(candidateParty);
      }
      rowHTML += "</tr>";
   }
   return rowHTML;
}


/* Callback Function to calculate an array sum */
function calcSum(value) {
   totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
   return (100*value/sum);
}

// this function will create the bar graphs
function createBar(partyType){
   var barHTML = "";
   //these will test for the party type
   if(partyType === "D"){
      barHTML = "<td class='dem'></td>";
   }
   else if(partyType === "R"){
      barHTML = "<td class='rep'></td>";
   }
   else if(partyType === "I"){
      barHTML = "<td class='ind'></td>";
   }
   return barHTML;
}


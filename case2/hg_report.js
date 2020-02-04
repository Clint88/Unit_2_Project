"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Clint Crockett
   Date:   Feb 3
   
   Filename: hg_report.js
	
*/

var gameReport = "<h1>" + itemTitle + "</h1>";
gameReport += "<h2>By:" + itemManufacturer +"</h2>";
gameReport += "<img src='hg_" + itemID + ".png' alt='" + itemID + "' id='gameImg' />";
gameReport += "<table>";
gameReport += "<tr><th>Product ID</th> <td>" + itemID + "</td></tr>";
gameReport += "<tr><th>List Price</th> <td>" + itemPrice + "</td></tr>";
gameReport += "<tr><th>Platform</th> <td>" + itemPlatform + "</td></tr>";
gameReport += "<tr><th>ESRB Rating</th> <td>" + itemESRB + "</td></tr>";
gameReport += "<tr><th>Condition</th> <td>" + itemCondition + "</td></tr>";
gameReport += "<tr><th>Release</th> <td>" + itemRelease + "</td></tr>";
gameReport += "</table>";
gameReport += itemSummary;

// this will display the text for the article
document.getElementsByTagName("article")[0].innerHTML = gameReport;

var ratingsSum = 0;
var ratingsCount = ratings.length;

for(var i = 0; i<ratings.length; i++){
   ratingsSum += ratings[i];
}

var ratingsAvg = ratingsSum / ratingsCount;
var ratingReport = "<h1>Customer Reviews</h1>";
ratingReport += "<h2>" + ratingsAvg +" out of 5 stars (" + ratingsCount + " reviews) </h2>";
//this will reset the stars if it is more that 2
for(var i = 0; i < 3; i++){
   ratingReport += "<div class='review'>";
   ratingReport += "<h1>" + ratingTitles[i] +"</h1>";
   ratingReport += "<table>";
   ratingReport += "<tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr>";
   ratingReport += "<tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr>";
   ratingReport += "<tr><th>Rating</th><td>";

   for(var r = 0; r < ratings[i]; r++){
      ratingReport += "<img src='hg_star.png' />";
   }
   ratingReport += "</td></tr></table>";
   ratingReport += ratingSummaries[r];
   ratingReport += "</div>";
}

document.getElementsByTagName("aside")[0].innerHTML = ratingReport;
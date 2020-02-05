"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 3

   Author:  Clint Crockett
   Date:   Feb 4
   
   Filename: ah_report.js
   
   Functions:
   
   calcSum(donorAmt)
      A callback function that adds the current donation amount in the array to the donationTotal variable
   
   findMajorDonors(donorAmt)
      A callback function that returns the value true only if the current donation amount in the array
      is greater than or equal to 1000
      
   donorSortDescending(a, b)
      A callback function used to sort the donation amounts from the array in descending order
      
   writeDonorRow(value)
      A callback function that writes the HTML code for each table row that provides the contact
      information for the donor
      
*/
var donationTotal = 0;

//this will calculate the sum for each donation
donors.forEach(calcSum);


var summaryTable = "<table>"
summaryTable += "<tr><th>Donors</th><td>" + donors.length + "</td></tr>";
//displays the total of all donations
summaryTable += "<tr><th>Total Donations</th><td>$" + donationTotal.toLocaleString() + "</td></tr>";
summaryTable += "</table>";

document.getElementById("donationSummary").innerHTML = summaryTable;
//this will find all major donors to display
var majorDonors = donors.filter(findMajorDonors);
//this will order them greatest to least
majorDonors.sort(donorSortDescending);

var donorTable = "<table>";
donorTable += "<caption>Major Donors</caption>";
donorTable += "<tr>";
donorTable += "<th>Donation</th><th>Donor</th>";
donorTable += "<th>Date</th><th>Name</th><th>Address</th>";
donorTable += "<th>Phone</th><th>E-mail</th>";
donorTable += "</tr>";

majorDonors.forEach(writeDonorRow);

donorTable += "</table>"

document.getElementById("donorTable").innerHTML = donorTable;


function calcSum(donorAmt) {
   donationTotal += donorAmt[9];
}

function findMajorDonors(donorAmt) {
   return donorAmt[9] >= 1000;
}

function donorSortDescending(a, b) {
   return b[9] - a[9];
}

function writeDonorRow(value) {
   donorTable += "<tr>";
   donorTable += "<td>$" + value[9].toLocaleString() + "</td>";   
   donorTable += "<td>" + value[0] + "</td>";
   donorTable += "<td>" + value[10] + "</td>";   
   donorTable += "<td>" + value[2] + ", " + value[1] + "</td>";  
   donorTable += "<td>" + value[3] + "<br />" + value[4] + ", " + value[5] + " " + value[6]  + "</td>";    
   donorTable += "<td>" + value[7] + "</td>";   
   donorTable += "<td>" + value[8] + "</td>";         
   donorTable += "</tr>";
}



"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Clint Crockett
   Date:   Feb 3
   
   Filename: tc_cart.js
	
*/

var orderTotal = 0;

var cartHTML = "<table>" + "<tr>" + "<th>Item</th> <th>Description</th> <th>Price</th> <th>Qty</th> <th>Total</th>" + "</tr>";
//this loop will add the items up
for(var i = 0; i<item.length; i++){
   cartHTML += "<tr>" 
   cartHTML += "<td><img src='tc_"+ item[i] +".png' alt='"+ item[i] +"'" + "/></td>";
   cartHTML += "<td>" + itemDescription[i] + "</td>";
   cartHTML += "<td>" + "$" + itemPrice[i] + "</td>";
   cartHTML += "<td>" +  itemQty[i] + "</td>";

   var itemCost = itemPrice[i] * itemQty[i];

   cartHTML += "<td>" + "$" + itemCost + "</td></tr>";

   orderTotal += itemCost;
}
// this will give the subtotal to buy all the items
cartHTML += "<tr>";
cartHTML += "<td colspan='4'>Subtotal</td>";
cartHTML += "<td>" + "$" + orderTotal + "</td>";
cartHTML += "</tr>";
cartHTML += "<table>";

document.getElementById("cart").innerHTML = cartHTML;
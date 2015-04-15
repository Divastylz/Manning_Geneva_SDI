/**
 * Geneva Manning
 * 04/15/2015
 * Assignment: Expression Worksheet
 */

 //Problem Dog Years
 //Conversion which is done from Sparky humans years to dog years

 // First I need to declare the variables

 var sparkyAge;
 var dogYears;
 var result;

 //Now i will define the variables

 sparkyAge = prompt("How old is Sparky in human years?"); //This prompt will ask the user how old Sparky is in human years.
 dogYears = sparkyAge * 7; //This is how the expression will be calculated.
 result =("Sparky is " + sparkyAge + " human years old which is " + dogYears + " in dog years. ") //This si the results from the calculation from calculating over from human years to dog years.

 alert(result); //This is the calculation of what the user will get on their screen.
 console.log(result); //This shows what is logged into the console.
 //I said that sparky is was 3 human years old and and after the calculation the calculation was 21 in in dog years.

//Problem Slice of Pie Pt 1
//Calculating total slices of pie between people at the party

//First I declare the variables

var slicesPerPizza;
var peopleAtParty;
var pizzasOrdered;
var pizzaPerPerson;
var result;

//Next I will define the variables

slicesPerPizza = prompt("How many slices per pizza?"); //This prompts the user to answer how many slices of pizza it is.

peopleAtParty = prompt("How many people is at the party?"); //This prompt the user to answer how many people is at the party.

pizzasOrdered = prompt("How many pizzas was ordered?"); //This prompts the user to answer how many people was at the party.

pizzaPerPerson = slicesPerPizza * pizzasOrdered / peopleAtParty; //This is the expression being calculated

result = ("Each person ate " + pizzaPerPerson + " slices of pizza at the party"); //This is the result from the variables.

alert(result); //This is the final result to solution and this is what the user will see.

console.log(result); //This is what is logged into the browser console.


// function query(){
//     document.querySelector('h1').innerHTML = "goodbye";
// }


// let counter = 0;

// function count(){
//     counter++;
//     document.querySelector("#counter").innerHTML = counter;
// }

// let counter = 0;

// function count(){
//     counter++;
//     document.querySelector("#counter").innerHTML = counter;

//     if (counter % 10 === 0){
//         alert(`counter is at ${counter}!`);
//     }
// }


// document.addEventListener('DOMContentLoaded', function (){
//     document.querySelector('button').onclick = count;
    
// });

// let counter = 0;

// function count(){
//     counter++;
//     document.querySelector("#counter").innerHTML = counter;

//     if (counter % 10 === 0){
//         alert(`counter is at ${counter}!`);
//     }
// }


// document.addEventListener('DOMContentLoaded', function(){
//     document.querySelector('#form').onsubmit = function(){
//         const name = document.querySelector('#name').value;
//         alert(`hello ${name}`);
//     };
// });


// document.addEventListener('DOMContentLoaded',function(){

//     //change font color to red
//     document.querySelector('#red').onclick = function(){
//         document.querySelector('#hello').style.color = 'red';
//     };

//     //change font color to blue
//     document.querySelector('#blue').onclick = function(){
//         document.querySelector('#hello').style.color = 'blue';
//     };
//     document.querySelector('#green').onclick = function(){
//         document.querySelector('#hello').style.color = 'green';
//     };

// });


// document.addEventListener('DOMContentLoaded',function(){

//     document.querySelectorAll('.color-change').forEach(function(button){
//         button.onclick = function(){
//             document.querySelector('#hello').style.color = button.dataset.color;
//         };
//     });
// });


//  arrow function

// document.addEventListener('DOMContentLoaded',() => {

//     document.querySelectorAll('.color-change').forEach((button) => {
//         button.onclick = () => {
//             document.querySelector('#hello').style.color = button.dataset.color;
//         };
//     });
// });


// document.addEventListener('DOMContentLoaded',() => {
//     document.querySelector('#color-change').onchange = function(){
//         document.querySelector('#hello').style.color = this.value;
//     };
// });


// document.addEventListener('DOMContentLoaded',() => {
//     setInterval(count, 1000);
// })

// let counter = 0;

// function count(){
//     counter++;
//     document.querySelector('#counter').innerHTML = counter;
// }


// if (!localStorage.getItem('counter'))
//     localStorage.setItem('counter', 0);

// document.addEventListener('DOMContentLoaded',() => {
//     document.querySelector('#counter').innerHTML = localStorage.getItem('counter');

//     document.querySelector('button').onclick = () => {

//         let counter = localStorage.getItem('counter');
//         counter++;

//         document.querySelector('#counter').innerHTML = counter;
        
//     }

// });

// var studentName = "John";
// var haveEnrolledInCourse = true;
// var haveCompletedTheCourse = false;

// if(haveEnrolledInCourse){
//     console.log("welcome " +studentName+" to udacity");
// }

// var a = 10;
// var b = 20;

// if (a>b){
//     console.log("variable `a` has higher value");

// }
// else{
//     console.log("variable `b` has higher value");
// }


// var kamau 

// console.log(kamau);

// var ans = Math.sqrt(-10)

// console.log(ans);// not a number

// let num = "hello" % 10

// console.log(num);

// Number("hello")


// let thingOne = "red"

// let thingTwo = "blue"

// console.log(thingOne +" "+ thingTwo);


// var adjective1 = "amazing";
// var adjective2 = "fun";
// var adjective3 = "entertaining";
// var madLib = "The Intro to JavaScript course is "+ adjective1 +". James and Julia are so "+ adjective2 +". I cannot wait to work through the rest of this "+ adjective3 +" content!";

// console.log(madLib);


// var firstName = "peter";

// var interest = "dogs";

// var hobby = "play football";

// var awesoeMessage = "Hi, my name is " +firstName+ ". I love "+interest+". In my spare time, I like to "+hobby+" .";

// console.log(awesoeMessage);


// var number = 12;

// if (number % 2 === 0){
//     console.log("the number is even");

// }else{
//     console.log("number is odd")
// }


// var room = "billiards room";

// var suspect = "Mrs. Sparr";

// var weapon = "pool stick";

// var solved = false;

// if (room === "billiards room"){

//     weapon = "pool stick";

//     if(suspect === "Mrs. Sparr")

//        solved = true;

// }else if(room === "gallery"){
//     weapon = "trophy";

//     if(suspect === "Ms. Van Cleve")

//        solved = true;
// }else if(room === "dinning room"){
//     weapon = "knife";

//     if(suspect === "Mr.Parkes")

//       solved = true;

// }else if(room === "ballroom"){

//     weapon = "poison"


//     if(suspect === "Mr. Kalehoff")

//      solved = true;

// }
// if (solved){
//     console.log(suspect + " did it in the "+room+" with the "+weapon+"!");
// }


// var balance = -325.00

// var checkBalance = true;

// var isActive = true;

// if(checkBalance === true){

//     if(isActive === true && balance < 0){
//         console.log("contact the bank you have a negative balance");
//     }

//     else if (isActive === true && balance === 0){
//         console.log("your account is empty");
//     }

//     else if (isActive === true && balance > 0){
//         console.log("your account has a balance of "+ balance.toFixed(2) +" .");

//     }
//     else if (isActive === false){

//         console.log("your account is not active.");

//     }
// }
// else{
//     console.log("check balance unsuccessful");
// }

// var flavour = "vanilla";

// var vessel = "cone";

// var toppings = "peanuts";



// if((flavour === "vanilla" || flavour === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings ==="peanuts")){
//     console.log("I'd like two scoops of "+flavour+" ice cream in a "+vessel+" with "+toppings+".");
// }else{
//     console.log("you get nothing");
    
// }


// var shirtWidth = 28 ;

// var shirtLength = 34;
 
// var shirtSleeve = 10.13;

// if(shirtWidth === 18 && shirtLength === 28 && shirtSleeve === 8.13){
//     console.log("S");
// }else if(shirtWidth === 20 && shirtLength === 29 && shirtSleeve === 8.38){
//     console.log("M");
// }else if(shirtWidth === 22 && shirtLength === 30 && shirtSleeve === 8.63){
//     console.log("L");
// }else if(shirtWidth === 24 && shirtLength === 31 && shirtSleeve === 8.88){
//     console.log("XL");
// }else if(shirtWidth === 26 && shirtLength === 33 && shirtSleeve === 9.63){
//     console.log("2XL");
// }else if(shirtWidth === 28 && shirtLength === 34 && shirtSleeve === 10.13){
//     console.log("3XL");
// }
// else{
//     console.log("N/A");
    
// }

// var shirtWidth = 21;
// var shirtLength = 99;
// var shirtSleeve = 8.40;

// var size = "NA";

// if ((shirtWidth>=18 && shirtWidth<20) && (shirtLength>=28 && shirtLength<29) && (shirtSleeve>=8.13 && shirtSleeve<8.38) ) {
//     size = "S";
// }
// else if ((shirtWidth>=20 && shirtWidth<22) && (shirtLength>=29 && shirtLength<30) && (shirtSleeve>=8.38 && shirtSleeve<8.63) ) {
//     size = "M";
// }
// else if ((shirtWidth>=22 && shirtWidth<24) && (shirtLength>=30 && shirtLength<31) && (shirtSleeve>=8.63 && shirtSleeve<8.88) ) {
//     size = "L";
// }
// else if ((shirtWidth>=24 && shirtWidth<26) && (shirtLength>=31 && shirtLength<33) && (shirtSleeve>=8.88 && shirtSleeve<9.63) ) {
//     size = "XL";
// }
// else if ((shirtWidth>=26 && shirtWidth<28) && (shirtLength>=33 && shirtLength<34) && (shirtSleeve>=9.63 && shirtSleeve<10.13) ) {
//     size = "2XL";
// }
// else if ((shirtWidth>=28) && (shirtLength>=34) && (shirtSleeve>=10.13) ) {
//     size = "3XL";
// }
// else {
//     size = "NA";
// }
// console.log(size);


// if(""){
//     console.log("the value is truty")
// }else{
//     console.log("the value is falsy");
// }

if([]){
    console.log("the value is truthy");
}
else{
    console.log("the value is falsy");
    
}



// isGoing = true;

// var color;

// if (isGoing){
//     color = "green"
// }else{
//     color = "red"
// }
// console.log(color);


// color = isGoing ? ("green"):("red");
// console.log(color);



// var eatsPlants = false;

// var eatsAnimals = true;

// var category = eatsPlants? (eatsAnimals ? "omnivore": "herbivore") : (eatsAnimals? "carnivor" : "undefined");

// console.log(category);


// var tier = "nsfw deck";
// var output = "You’ll receive "

// switch (tier) {
//   case "deck of legends":
//     output += "a custom card, ";
//   case "collector's deck":
//     output += "a signed version of the Exploding Kittens deck, ";
//   case "nsfw deck":
//     output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
//   default:
//     output += "one copy of the Exploding Kittens card game.";
// }

// console.log(output);



// var education = "a Professional degree";

// var salary =  89960;

// switch(education){
//     case "no high school diploma":
//         salary = 25636;
    
//         break;
//     case "a high school diploma":
//         salary = 35256;
//         break;
//     case "an Associate's degree":
//         salary = 41496;
//         break;

    
//     case "a Bachelor's degree":
//         salary = 59124;
//         break;
//     case "a Master's degree":
//         salary = 69732;
//         break;
    
//     case "a Professional degree":
//         salary = 89960;
//         break;
//     case "a Doctoral degree":
//         salary = 84396;
//         break;
    
// }
// console.log("In 2015, a person with"+education+" earned an average of " +salary+"/year")


// var start = 0;

// while(start < 10){
//     console.log(start);
//     start += 2;
// }

// var x = 10;
// while (x <= 25) {
//   console.log('Printing out x = ' + x);
//   x = x + 2;
// }


// var x = 1;
// while(x <= 20){
//     if(x%3 === 0 && x%5 === 0){
//         console.log("juliajames");
//     }
//     else if(x%5 === 0){
//         console.log("james");
//     }

//     else if(x%3 === 0){
//         console.log("julia");
//     }else{
//         console.log(x);
//     }

//     x = x + 1;
// }

// var number = 99;

// while(number <= 100){

// }

// var num = 99;

// while (num >=1) {
//     // Last iteration. Note occurances of bottle, bottle, bottleS
//     if (num === 1) {
//         console.log(num + " bottle of juice on the wall! "
//                     + num + " bottle of juice! Take one down, pass it around... "
//                     + (num-1) + " bottles of juice on the wall!");
//     }
//     // Second-last iteration. Note occurances of bottleS, bottleS, bottle
//     else if (num === 2){
//         console.log(num + " bottles of juice on the wall! "
//                     + num + " bottles of juice! Take one down, pass it around... "
//                     + (num-1) + " bottle of juice on the wall!");
//     }
//     // All other iterations. Note occurances of bottleS, bottleS, bottleS
//     else {
//         console.log(num + " bottles of juice on the wall! "
//                     + num + " bottles of juice! Take one down, pass it around... "
//                     + (num-1) + " bottles of juice on the wall!");
//     }
//     num = num - 1;

// }


// var countDown = 60;

// while(countDown >= 0){
//     if(countDown === 50){
//         console.log("Orbiter transfers from ground to internal power")
//     }
//     else if(countDown === 31){
//         console.log("Ground launch sequencer is go for auto sequence start")
//     }
//     else if(countDown === 16){
//         console.log("Activate launch pad sound suppression system")
//     }
//     else if(countDown === 10){
//         console.log("Activate main engine hydrogen burnoff system")
//     }
//     else if(countDown === 6){
//         console.log("Main engine start")
//     }
//     else if(countDown === 0){
//         console.log("Solid rocket booster ignition and liftoff!")
//     }
//     else{
//         console.log("T-"+countDown+" seconds")
//     }
//     countDown = countDown - 1;


// }

// for(var i = 0; i<6; i= i +1){
//     console.log('printing out i = '+ i);
// }


// let solution = 1

// for (let i = 1; i <= 5; i++){
//     solution *= i;
// }
// console.log(solution);


// for (let row = 0; row <= 25; row ++){
//     for(let seat = 0; seat <= 99; seat ++){
//         console.log(row+"-"+seat)
//     }
// }

// function sayHello() {
//     var message = "Hello!"
//     return message; // returns value instead of printing it
//   }

// console.log(sayHello())
// var sound = ""
// function laugh(num){
//     for(var x = 0; x < num; x++){
//         sound = sound + "ha";
//     }
//     sound = sound + "!";
//     return sound;

// }
// console.log(laugh(5))


// function square(x) {
//     return x * x;
//   }
  
//   function subtractFour(x) {
//     return square(x) - 4;
//   }
  
//   console.log(subtractFour(5));


  // function makeLine(length){
  //   var line = " ";
  //   for (var j = 1; j<= length; j++){
  //     line +="*"
  //   }
  //   return line + "\n";
  // }
  

  // function buildTriangle(length){
  //   var triangle = "";
  //   var linenumber = 1;

  //   for(linenumber=1; linenumber<=length; linenumber++){
  //     triangle = triangle + makeLine(linenumber);
  //   }
  //   return triangle;
  // }
  // console.log(buildTriangle(10));

  // var favoriteMovie = function displayFavorite(movieName) {
  //   console.log("My favorite movie is " + movieName);
  // };
  
  // // Function declaration that has two parameters: a function for displaying
  // // a message, along with a name of a movie
  // function movies(mesgFunction, name) {
  //   mesgFunction(name);
  // }
  
  // // Call the movies function, pass in the favoriteMovie function and name of movie
  // movies(favoriteMovie, "Finding Nemo");


//   function movies(messageFunction, name){
//     messageFunction(name);
// }
//   movies(function displayFavorite(movieName) {
//     console.log("My favorite movie is " + movieName);},"finding nemo");

// var doSomething = function addOne(y){
//   return y + 1
// }

// doSomething(5);
// var sound = "";
// var laugh = function(num){
//   for(var j = 0; j < num; j++){

//      sound = sound + "ha";
//   }
//   sound = sound + "!";
//   return sound;
// }

// console.log(laugh(10));


// var cry = function weCry(){
//   return "boohoo!"
// }
// console.log(cry());


// function emotions(myString, myFunc) {
//   console.log("I am " + myString + ", " + myFunc(2));
// }

// // Call the emotions() function with two arguments
// // Argument 1 - "happy" string
// // Argument 2 - an inline function expression
// emotions ("happy", function(num) {
//   var sound = ""; // Local variable
//   //Iterate
//   for (var i = 0 ; i < num ; i++) {
//       sound = sound + "ha" ;  
//   }
//   sound = sound +"!"; 
//   return sound; 
// });

var donutts = ["one","two","three"];

donutts.splice(-2,0,"five","six");

console.log(donutts);
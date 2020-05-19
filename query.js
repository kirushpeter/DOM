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


var balance = -325.00

var checkBalance = true;

var isActive = true;

if(checkBalance === true){

    if(isActive === true && balance < 0){
        console.log("contact the bank you have a negative balance");
    }

    else if (isActive === true && balance === 0){
        console.log("your account is empty");
    }

    else if (isActive === true && balance > 0){
        console.log("your account has a balance of "+ balance.toFixed(2) +" .");

    }
    else if (isActive === false){

        console.log("your account is not active.");

    }
}
else{
    console.log("check balance unsuccessful");
}




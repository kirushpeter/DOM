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


document.addEventListener('DOMContentLoaded',() => {
    document.querySelector('#color-change').onchange = function(){
        document.querySelector('#hello').style.color = this.value;
    };
});

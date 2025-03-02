
// click button change col0r

document.getElementById('random-color').addEventListener("click",function(event){
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor
})

// value parseInt part

// function innerTextbyid (id){
//     const value = document .getElementById(id).innerText
//     const convertedValue = parseInt(value)
//     return convertedValue;

// }

// // innerTextbyid value part

// function sumValuebyid ( id , value){
//     document.getElementById(id).innerText = value;
// }


//   today date part

const today = new Date();
 

   const clickTime  = today.toLocaleDateString('en-US', {
    weekday: 'long',   
    year: 'numeric',   
    month: 'long',     
    day: 'numeric'     
  });


document.getElementById('time').innerText= clickTime


// Get hours, minutes, and seconds

const now = new Date(); 
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();


if (hours < 10) hours = '0' + hours;
if (minutes < 10) minutes = '0' + minutes;
if (seconds < 10) seconds = '0' + seconds;


const timeString = hours + ":" + minutes + ":" + seconds;

// remove all history part

const activity = document.getElementById("activity");
 document.getElementById("Clear").addEventListener("click", function(){ 
    activity.innerHTML = '';
    
    

})
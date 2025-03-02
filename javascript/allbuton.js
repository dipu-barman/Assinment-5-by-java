alert('this is')


 const discreaseValue = innerTextbyid("discrease")
const one = innerTextbyid ("one")
const increase= innerTextbyid ("increase")
const mobile = document .getElementById("Mobile").innerText
            
            


document.getElementById('Completed').addEventListener("click",function(){
    alert( "board update successfully")
    

    const sum  = discreaseValue - one

    sumValuebyid ("discrease",sum )


    const sum2 = increase + one
    sumValuebyid ("increase",sum2 )

    const activity = document.getElementById("activity");
    const ptag =document.createElement("p")

    ptag.innerText=`You have Complete ${mobile} at ${timeString} PM`
    console.log(ptag)

 activity.appendChild(ptag)
 const disabled = document.getElementById('Completed').setAttribute('disabled', true)
return sum
    

})



// button - 2 -
// const discreaseValue = innerTextbyid("discrease")
// const one = innerTextbyid ("one")
// const increase = innerTextbyid ("increase")
// const complete = document .getElementById("Completed").innerText

 
 document.getElementById('Completed2').addEventListener("click",function(){
    
        alert( "board update successfully")

        if ( sum = 5) {
            alert ()
        }

    const sum3  = discreaseValue -2
    sumValuebyid ("discrease",sum3 )

    const sum2 = increase + 2
    sumValuebyid ("increase",sum2 )

    const activity = document.getElementById("activity");
    const ptag =document.createElement("p")

    ptag.innerText=`You have Complete ${mobile} at ${timeString} PM`
    console.log(ptag)

 activity.appendChild(ptag)
document.getElementById('Completed2').setAttribute('disabled', true)


})
document.getElementById('enter').addEventListener("click",function(){
    window.location.href = "another.html"
})







   
//    let value6 = 6;
//    let value23 = 23;

   
//    function incrementValues() {
//        value6--; 
//        value23++; 
       
       
//        document.getElementById("discrease").textContent = value6;
//        document.getElementById("increase").textContent = value23;
//    }

//    // Add event listeners after the DOM content is loaded
//    document.addEventListener("DOMContentLoaded", function() {
//        // Get all buttons by their class name and attach the event listener
//        const buttons = document.querySelectorAll("#Completed2");
//        buttons.forEach(function(button) {
//            button.addEventListener("click", incrementValues);
//        });
//    });





// let value6 = 6;
// let value23 = 23;

// // Function to increm.ent both values by 1
// function incrementValues() {
//     value6++;  // Increase the value of 6 by 1
//     value23++; // Increase the value of 23 by 1
    
//     // Update the displayed values
//     discreaseValue.textContent = value6;
//     increase.textContent = value23;
// }

// // Wait for the DOM to load before attaching event listeners
// window.addEventListener("DOMContentLoaded", function(event) {
//    event.preventDefault()


//     document.getElementById("Completed2").addEventListener("click", incrementValues);
//    //  document.getElementById("button2").addEventListener("click", incrementValues);
// //     // document.getElementById("button3").addEventListener("click", incrementValues);
// //     // document.getElementById("button4").addEventListener("click", incrementValues);
// //     // document.getElementById("button5").addEventListener("click", incrementValues);
// //     // document.getElementById("button6").addEventListener("click", incrementValues);
// // 

// });



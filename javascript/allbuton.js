

 const discreaseValue = innerTextbyid("discrease")
// const one = innerTextbyid ("one")
const increase= innerTextbyid ("increase")
const mobile = document .getElementById("Mobile").innerText
            
            
// button 1 click part

document.getElementById('Completed').addEventListener("click",function(){
    alert( "board update successfully")
    

    const sum  = discreaseValue - 1

    sumValuebyid ("discrease",sum )


    const sum2 = increase + 1
    sumValuebyid ("increase",sum2 )

    const activity = document.getElementById("activity");
    const ptag =document.createElement("p")

    ptag.innerText=`You have Complete ${mobile} at ${timeString} PM`
    console.log(ptag)

 activity.appendChild(ptag)
 const disabled = document.getElementById('Completed').setAttribute('disabled', true)
return sum
    

})



// button 2 click part

const mobile2 = document .getElementById("Mobile2").innerText
            
document.getElementById('Completed2').addEventListener("click",function(){
    
        alert( "board update successfully")

        const sum3  = discreaseValue -2
    sumValuebyid ("discrease",sum3 )
    
   const sum2 = increase + 2
    sumValuebyid ("increase",sum2 )

    const activity = document.getElementById("activity");
    const ptag =document.createElement("p")

    ptag.innerText=`You have Complete ${mobile2} at ${timeString} PM |Am`
    console.log(ptag)

 activity.appendChild(ptag)
document.getElementById('Completed2').setAttribute('disabled', true)



})

// button 3 click part


const mobile3 = document .getElementById("Mobile3").innerText
            
document.getElementById('Completed3').addEventListener("click",function(event){

     alert( "board update successfully")

    //     const buto = event.target.innerText= Completed ? 1 : -1
//  const sum3  = Math.min ( 6 , discreaseValue - buto)
    // sumValuebyid ("discrease",sum3 )


    const sum3  = discreaseValue -3
    sumValuebyid ("discrease",sum3 )
    

    const sum2 = increase + 3
    sumValuebyid ("increase",sum2 )

    const activity = document.getElementById("activity");
    const ptag =document.createElement("p")

    ptag.innerText=`You have Complete ${mobile3} at ${timeString} PM |Am`
    console.log(ptag)

 activity.appendChild(ptag)
document.getElementById('Completed3').setAttribute('disabled', true)


})

// button 4 click part

const mobile4 = document .getElementById("Mobile4").innerText
            
document.getElementById('Completed4').addEventListener("click",function(){
    
        alert( "board update successfully")

        const sum3  = discreaseValue -4
    sumValuebyid ("discrease",sum3 )
    
    const sum2 = increase + 4
    sumValuebyid ("increase",sum2 )

    const activity = document.getElementById("activity");
    const ptag =document.createElement("p")

    ptag.innerText=`You have Complete ${mobile4} at ${timeString} PM |Am`
    console.log(ptag)

 activity.appendChild(ptag)
document.getElementById('Completed4').setAttribute('disabled', true)



})

// button 5 click part

const mobile5 = document .getElementById("Mobile5").innerText
            
document.getElementById('Completed5').addEventListener("click",function(){
    
        alert( "board update successfully")

        const sum3  = discreaseValue -5
    sumValuebyid ("discrease",sum3 )
    

    const sum2 = increase + 5
    sumValuebyid ("increase",sum2 )

    const activity = document.getElementById("activity");
    const ptag =document.createElement("p")

    ptag.innerText=`You have Complete ${mobile5} at ${timeString} PM |Am`
    console.log(ptag)

 activity.appendChild(ptag)
document.getElementById('Completed5').setAttribute('disabled', true)
return sum2


})

// button 6 click part


const mobile6 = document .getElementById("Mobile6").innerText
            

 document.getElementById('Completed6').addEventListener("click",function(){
    
        alert( "board update successfully")

        alert( "board update successfully")

        const sum3  = discreaseValue -6
    sumValuebyid ("discrease",sum3 )
    
     const sum2 = increase + 6
    sumValuebyid ("increase",sum2 )

    const activity = document.getElementById("activity");
    const ptag =document.createElement("p")

    ptag.innerText=`You have Complete ${mobile6} at ${timeString} PM |Am`
    console.log(ptag)

 activity.appendChild(ptag)
document.getElementById('Completed6').setAttribute('disabled', true)
return sum2


})



// go to another html file   

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



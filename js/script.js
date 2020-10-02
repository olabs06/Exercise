const button1= document.querySelector(".btn1");
const button2= document.querySelector(".btn2");
const button3= document.querySelector(".btn3");
const firstPage = document.querySelector('.firstpage');
const secondPage = document.querySelector('.secondpage');
const thirdPage = document.querySelector('.thirdpage');
const displayName = document.querySelector('.Namee');
const displayAge = document.querySelector('.Agee');
const displayDays = document.querySelector('.results');

button1.addEventListener("click", function(){

    firstPage.classList.add('hidden');
    secondPage.classList.remove('hidden');
});
button2.addEventListener("click", function(e){
    e.preventDefault();

    const userName = document.getElementById("yourName").value;
        const userAge = document.getElementById("yourAge").value;
        
        
        

    if (userName == "" || userAge=="") {
            alert ("input missing field");
            return;
       
        } else {
            displayName.textContent += userName;
            var ageInDays = userAge*365;
            displayAge.textContent += userAge;
            displayDays.textContent += ageInDays;

        }

        
         
    

    secondPage.classList.add('hidden');
    thirdPage.classList.remove('hidden');

});
button3.addEventListener("click", function(){

    document.getElementById("yourName").value = '';
    document.getElementById("yourAge").value = '';

    thirdPage.classList.add('hidden');
    firstPage.classList.remove('hidden');

});

function calcFunction() {
    document.getElementById (myForm)
}






/* eslint-disable no-console */
console.log('Hello!');
const myElement = document.getElementById('top_section');
console.log(myElement);


// HTML setup
// grab DOM elements (input and button)
// get access to user's input
// use the input to "do something"
// Display the result to the user

//Name color & pronoun constants
const submitbtn = document.getElementById('submit-btn');
const inputField = document.getElementById('input-Field');
const middleSection = document.getElementById('middle-section');
const topSection = document.getElementById('top-section');
const colorField = document.getElementById('color-Field');
const pronounField = document.getElementById('submitPro-btn');
const submitprobtn = document.getElementById('submitPro-btn');

//Name and color btns
submitbtn.addEventListener('click', ()=>{
    
    
    console.log(middleSection.textContent);
    middleSection.textContent = inputField.value;
    console.log(inputField.value);
    console.log(colorField.value);
    topSection.style.backgroundColor = colorField.value;}
);

//pronoun btns
submitprobtn.addEventListener('click', () =>{


    console.log(pronounField.textContent);
    pronounField.textContent = pronounField.value;} 
);
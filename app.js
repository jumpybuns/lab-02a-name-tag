const name = document.getElementById('name');
const theInput = document.getElementById('user-input');
const theButton = document.getElementById('my-button');

theButton.addEventListener('click',() => {

    const value = theInput.value;
    
    name.textContent = value;

    theInput.value = ''; 
    
    




});
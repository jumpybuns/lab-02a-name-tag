const name = document.getElementById('name');
const theInput = document.getElementById('user-input');
const theButton = document.getElementById('my-button');
const theOtherbutton = document.getElementById('other=button')
const theOtherinput = document.getElementById('other-input')

theButton.addEventListener('click',() => {

    const value = theInput.value;
    
    name.textContent = value;

    theInput.value = ''; 
    
    




});
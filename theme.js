let light=document.getElementById('light');
let dark=document.getElementById('dark');
 
let op=document.querySelectorAll('.operations');
let digit=document.querySelectorAll('.digits');
let equal=document.querySelectorAll('.equal-to');

let head=document.getElementById('heading');
let calci=document.getElementById('calculator');

function change(){

    
    light.classList.toggle('hide');
    dark.classList.toggle('hide');
    
calci.classList.toggle('dark');

op.forEach((element) => {
    element.classList.toggle('operations-light');
    element.classList.toggle('dark');
});
digit.forEach((element) => {
    element.classList.toggle('digit-light');
    element.classList.toggle('dark');
});
equal.forEach((element) => {
    element.classList.toggle('equal-to-light');
    element.classList.toggle('dark');
});



}
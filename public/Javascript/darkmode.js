export function darkMode()
{
    
const body=document.querySelector('body');
const sunIcon=document.querySelector('.toggle .bxs-sun');
const moonIcon=document.querySelector('.toggle .bx-moon');
const toggle=document.querySelector('#toggle') 

toggle.addEventListener('change',()=>{
    body.classList.toggle('dark')
    sunIcon.className=sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonIcon.className=moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
})
}
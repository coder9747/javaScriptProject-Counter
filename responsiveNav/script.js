const handBurger = document.querySelector("#hand");
const nav = document.querySelector("#navbar");
console.log(handBurger,nav);
handBurger.addEventListener("click",()=>
{
    nav.classList.toggle("responsiveNav");

})
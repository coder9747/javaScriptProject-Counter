const handBurger = document.querySelector("#hand");
const nav = document.querySelector("#navbar");
console.log(handBurger,nav);
handBurger.addEventListener("click",()=>
{
    nav.classList.toggle("responsiveNav");

})
window.addEventListener("scroll",fixnav);
function fixnav()
{
    // console.log("Hello World!");
    if(window.scrollY>nav.clientHeight)
    {
        navBar.classList.add("active");
    }
    else
    {
        navBar.classList.remove("active");
    }

}

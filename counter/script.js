const text = document.querySelector(".number");
const increaseButton = document.querySelector(".increase");
const decreaseButton = document.querySelector(".decrease");
const reset = document.querySelector(".Reset");
increaseButton.addEventListener("click",()=> change("up"));
reset.addEventListener("click",()=> change("reset"));
decreaseButton.addEventListener("click",()=> change("down"));
function change(action)
{
    if(action=="up")
    {
        let number = parseInt(text.textContent);
        number++;
        text.textContent = number;
    }
    else if(action=="down")
    {
        let number = parseInt(text.textContent);
        number--;
        text.textContent = number;

    }
    else
    {
        //reset block;
        text.textContent = "0";
    }
    changeColor();
}
function changeColor()
{
    if(text.textContent<"0")
    {
        text.style.color = "red";
    }
    else if(text.textContent>"0")
    {
        text.style.color = "green";
    }
    else
    {
        text.style.color = "black";
    }
}
// -----------CounterAnimation------------
let h1 = document.getElementById("one");
let cText = "Counter".split("");
let n = 0;
cText.forEach((letter)=>
{
    let span = document.createElement("span");
    span.style.transitionDelay=`${n*70}ms`;
    n++;
    span.textContent = letter;
        h1.appendChild(span);
})
setInterval(() => {
    let spans = document.querySelectorAll("span");
    spans.forEach((span)=>
    {
        if(span.classList.contains("active"))
        {
            span.classList.remove("active");
        }
        else
        {
            span.classList.add("active");

        }
    })
    
}, 2000);
const container = document.querySelector(".box");
const items = document.querySelectorAll(".box .items");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
const width = container.clientWidth;
items.forEach((item,idx)=>
{
    
    item.style.transform = `translateX(${width*idx}px)`;
})
leftButton.addEventListener("click",()=> change("left"));
rightButton.addEventListener("click",()=> change("right"));
let active = 0;
function change(dir)
{
    if(dir==="right")
    {
        active++;
        if(active>items.length-1)
        {
            active = 0;
        }
        container.style.transform = `translateX(-${active*width}px)`;
    }
    else
    {
        active--;
        if(active<0)
        {
            active = 0
        }
        container.style.transform = `translateX(${active*width}px)`;
    }
}
// ----------------Adding-Auto-Mode------------------
const autoMode = document.querySelector(".auto");
let i = 0;
function auto()
{
    var one = setInterval(() => {
        rightButton.click();
    }, 2000);
}
autoMode.addEventListener("click",()=>
{
    if(i%2==0)
    {
        auto();
    }
    else
    {
        clearInterval(one);
    }
    i++;

    
})
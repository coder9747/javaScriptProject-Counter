const fill = document.querySelector(".fill");
const boxes = document.querySelectorAll(".box");
fill.addEventListener("dragstart",dragStart);
fill.addEventListener("dragend",dragEnd);
boxes.forEach((box)=>
{
    box.addEventListener("dragover",dragOver);
    box.addEventListener("dragEnter",dragStart);
    box.addEventListener("dragleave",dragLeave);
    box.addEventListener("drop",dragDrop);
})
function dragStart()
{
    setTimeout(() => {
        this.className = "box";
        
    }, 0);    
}
function dragEnd()
{
    this.className = "fill";
}
function dragOver(e)
{
    e.preventDefault();
    this.classList.add("hovered");
}
function dragLeave()
{      
    this.classList.remove("hovered");
}
function dragEnter(e)
{
    e.preventDefault();
}
function dragDrop()
{
    this.className="box";
    this.append(fill);
}

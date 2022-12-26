console.log("This is javaScript project so I don't focus in design or style")
const buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("rotate");
        const para = btn.nextElementSibling;
        para.classList.toggle("active");
    })
})

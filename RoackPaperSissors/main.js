const buttons = document.querySelectorAll(".buttons button");
const user = document.querySelector("#user");
const Computer= document.querySelector("#Computer");
const result = document.querySelector("#result");
// console.log(user,Computer)   
Array.from(buttons).forEach((btn)=>
{
    btn.addEventListener("click",(e)=>
    {
        handleClick(e);
    })
})
let handleClick  = (e)=>
{
    let userChoice = e.target.classList[0].toUpperCase();
    user.innerHTML = userChoice;
    let computerChoiceArr = ["Rock","Paper","Sisors"];
    let rNumber = Math.floor(Math.random()*3);
    let computerChoice = computerChoiceArr[rNumber].toUpperCase();
    // console.log(computerChoice);
    Computer.innerHTML = computerChoice
    if(computerChoice==userChoice)
    {
      result.innerHTML ="Draw"
    }
    else if((userChoice=="ROCK" && computerChoice=="PAPER") || (userChoice=="SISORS" && computerChoice=="Paper") || (userChoice=="ROCK" && computerChoice=="SISORS"))
    {
        result.innerHTML ="USER WIN"
 
    }
    else
    {
        result.innerHTML ="Computer Win";
  
    }

}
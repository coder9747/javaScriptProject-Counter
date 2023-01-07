const input = document.querySelector(".input");
const passwordLength = document.querySelector(".number");
const upper = document.querySelector(".upper");
const lower = document.querySelector(".lower");
const digit = document.querySelector(".digit");
const symbol = document.querySelector(".symbol");
const button = document.querySelector(".btn");
let copy = document.querySelector(".copy");
console.log(input, passwordLength, upper, lower, digit, symbol);
let smallLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "z", "y", "z"];
let capitalLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "Z", "Y", "Z"];
let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9",];
let symbolArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
let temp = [];
function generate() {
    temp = temp.concat(smallLetter);
    if (upper.checked) {
        temp = temp.concat(capitalLetter);
    }
    if (symbol.checked) {
        temp = temp.concat(symbolArr);
    }
    if (digit.checked) {
        temp = temp.concat(number)
    }
    let n = +passwordLength.value;
    let string = "";
    for (let i = 0; i <n; i++) {
        let rnumber = Math.round(temp.length * (Math.random()));
        string += temp[rnumber];
    }
    return (string);
}
copy.addEventListener("click",()=>
{
    navigator.clipboard.writeText(input.value);
    alert("Password Copy To Clipboard");

})
button.addEventListener("click", () => {
    let password = generate();
    input.value = password;
})
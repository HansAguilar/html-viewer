let numbers = document.querySelectorAll(".number");          // All numbers 
let operator = document.querySelectorAll(".operator");

let clear = document.querySelector(".clear");
let erase = document.querySelector(".erase");
let equals = document.querySelector(".equals");

clear.addEventListener("click", function () {
    numberAppend = ""
    resultContainer.textContent = "0";
})

let resultContainer = document.querySelector("#result-row"); // Result 
let numberAppend = "";

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        calculate(number);
    })
})

operator.forEach((op) => {
    op.addEventListener('click', (e) => {
        calculate(op);
    })
})

equals.addEventListener("click", (e) => {
    let result = eval(resultContainer.textContent);
    resultContainer.textContent = result;
    numberAppend = result;
})

function calculate(num) {
    numberAppend += num.textContent;
    resultContainer.textContent = numberAppend;
}

erase.addEventListener("click", function () {
    if(resultContainer.textContent.length <= 1){
        console.log("s");
        resultContainer.textContent = "0";
    }
    else{
        let lastNum = numberAppend.substring(0, numberAppend.length - 1);
        numberAppend = lastNum;
        resultContainer.textContent = numberAppend;
    }
    
})
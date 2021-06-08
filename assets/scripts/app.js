const Initialresult = 0;

let currentResult = Initialresult;

function getUserInput(){
    return userInput;
}



function add(){
    const description = `${currentResult} + ${userInput.value}`
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, description);
}

const subtract = () => {
    const description = `${currentResult} - ${userInput.value}`
    currentResult -= parseInt(userInput.value);
    outputResult(currentResult, description) 
}

const multiply = () =>{
    const description = `${currentResult} * ${userInput.value}`
    currentResult *= parseInt(userInput.value);
    outputResult(currentResult, description)
}

const divide = () => {
    const description = `${currentResult} / ${userInput.value}`
    currentResult /= parseInt(userInput.value);
    outputResult(currentResult, description)
}



addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);





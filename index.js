const display = document.getElementById('display-box');

const appendToDisplay = (input) =>{
    display.value += input;
}

const calculate = () =>{
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = `Error in Syntax`
    }
}

const clearDisplay = () =>{
     display.value = '';

}

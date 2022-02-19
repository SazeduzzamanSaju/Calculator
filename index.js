let display = document.getElementById('display');
buttons = document.querySelectorAll('button');
let displayValue = '';
for(item of buttons){
    item.addEventListener('click',function(e){
        buttonText = e.target.innerText;
        console.log(buttonText);

        // Condition Apply
        if (buttonText == 'X') {
            buttonText = '*';
            displayValue += buttonText; 
            display.value = displayValue;
        }
        else if (buttonText == 'Ac') {
            displayValue = ''; 
            display.value = displayValue;
        }
        else if (buttonText == '=') {
            display.value = eval(displayValue);
        }
        else{
            displayValue += buttonText; 
            display.value = displayValue;
        }
    })
}
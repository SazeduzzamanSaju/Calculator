function updateClock(){
    var now = new Date();
    var hou = now.getHours(),
        min = now.getMinutes(),
        pe = "AM";

    if (hou == 0) {
        hou = 12;
    } 
    if(hou > 12 ) {
        hou = hou - 12;
        pe = 'PM';
    }
    Number.prototype.pad = function(digit){
        for (var n = this.toString();n.length < digit; n = 0 + n );
        return n;
 
    }

     var ids = ["hours", "minutes", "period"];
     var values = [hou.pad(2),min.pad(2), pe ];
     for (let i = 0; i < ids.length; i++)
     document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}
function initClock() {
    updateClock();
    window.setInterval("updateClock()",1);
}

// Total Counter
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


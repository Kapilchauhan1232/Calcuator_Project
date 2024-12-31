let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let expression = "";

let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;
        
        if (value == '=') {
            try {
                expression = eval(expression);
                input.value = expression;
            } catch {
                input.value = "Error";
                expression = "";
            }
        }
        else if (value == 'AC') {
            expression = "";
            input.value = expression;
        }
        else if (value == 'DEL') {
            expression = expression.substring(0, expression.length - 1);
            input.value = expression;
        }
        else {
            expression += value;
            input.value = expression;
        }
    });
});


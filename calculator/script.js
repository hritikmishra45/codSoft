const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let expression = "";

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    if (buttonText === 'AC') {
      expression = '';
    } else if (buttonText === 'DEL') {
      expression = expression.slice(0, -1);
    } else if (buttonText === '=') {
      try {
        expression = eval(expression);
      } catch {
        expression = 'Error';
      }
    } else {
      expression += buttonText;
    }

    input.value = expression;
  });
});

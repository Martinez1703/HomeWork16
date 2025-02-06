let operation = '';

function setOperation(op) {
    operation = op;
}

function calculate() {
    try {
        const firstNumber = parseFloat(document.getElementById('firstNumber').value);
        const secondNumber = parseFloat(document.getElementById('secondNumber').value);

        if (isNaN(firstNumber) || isNaN(secondNumber)) {
            throw new Error('Введите оба числа!');
        }

        if (!operation) {
            throw new Error('Выберите операцию!');
        }

        let result;
        switch (operation) {
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                if (secondNumber === 0) {
                    throw new Error('Ошибка: деление на ноль');
                }
                result = firstNumber / secondNumber;
                break;
            default:
                throw new Error('Неизвестная операция!');
        }

        document.getElementById('result').innerText = 'Результат: ' + result;
    } catch (error) {
        document.getElementById('result').innerText = error.message;
    }
}

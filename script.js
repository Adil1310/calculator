let a = ""; //первое число
let b = ""; //второе число
let op = ""; //оператор
let off = false; //необходимо для продолжения вычисления


const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; //массив нужен для проверки нажатых кнопок
const operators = ['+', '-', '*', '/']; //для проверки нажатых кнопок

const result = document.querySelector('#result'); //отображения операций

//очистка
function allClear() {
    a = '';
    b = '';
    op = '';
    endOfCalc = false;
    result.textContent = 0;
}

document.querySelector('#ac').onclick = allClear;

document.querySelector('.container').onclick = (event) => {

    if (!event.target.classList.contains('button')) return; //если нажата не кнопка

    if (event.target.classList.contains('ac')) return; //если нажата кнопка очистка экрана

    result.textContent = '';
    const key = event.target.textContent; //для считывания значений кнопок с занисением в перменную "key"

    // сверяет переменную "key" с массивом "number" нажата ли кнопка со значением 0-9
    if (number.includes(key)) { //если сверка выдала true, то выводит значение на экран и заносит в переменную
        if (b === '' && op === '') { //начало ввода значений в переменную "а"
            a += key;
            result.textContent = a;
        }
        else if (a !== '' && b !== '' && endOfCalc) { //для продолжения вычисления с уже имеющимеся результатами
            b = key;
            endOfCalc = false;
            result.textContent = b;
        }
        else { //начало ввода значений в переменную "b"
            b += key;
            result.textContent = b;
        }
    }
    // сверяет переменную "key" с массивом "operators"
    if (operators.includes(key)) { //если сверка выдала true, то выводит оператор на экран калькулятора и заносит в переменную
        op = key;
        result.textContent = op;
        return;
    }

    // результат
    if (key === '=') {
        if (b === '') b = a; //если не введено второе значение, 
        switch (op) {
            case "+":
                a = (+a) + (+b); //плюс добавлен в связи с тем, что переменные являются строками (во избежания конкатонации)
                break;
            case "-":
                a = a - b;
                break;
            case "*":
                a = a * b;
                break;
            case "/":
                a = a / b;
                break;
        }
        endOfCalc = true; //вычисление закончено
        result.textContent = a;
    }
}


'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money ,
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 
'cafe, car, casino, club');
console.log(addExpenses.toUpperCase().split(','));

let income = '"работа с сайтом"';
let mission = 250000;
let deposit = confirm('Есть ли у вас депозит в банке ?');

// let expenses1 = prompt('Введите обязятельную статью расходов ?');

// let amount1 = prompt('Расходы по ' + expenses1 + ' Во сколько это обойдется ?');
//     amount1 = (Number(amount1));

// let expenses2 = prompt('Введите обязательную статью расходов ?');

// let amount2 = prompt('Расходы по ' + expenses2 + ' Во сколько это обойдется ?');
//     amount2 = (Number(amount2));

let start = function() {
    do {
        money = prompt('Ваш месячный доход ?', '34000');
    }
    while (!isNumber(money));
};

start();

let expenses = [];

// Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц  вариант 1
// let getExpensesMonth = function() {
//     let sum = 0;
    
//     for(let i = 0; i < 2; i++) {

//         if ( i === 0 ) {
//             expenses1 = prompt('Введите обязятельную статью расходов ?');
//         } else if (i ===1 ) {
//             expenses2 = prompt('Введите обязятельную статью расходов ?');
//         }


//         sum += +prompt('Во сколько это обойдется ?');
//     }
    
//     console.log(sum);
//     return sum;
// };

// let expensesAmount = getExpensesMonth();

// console.log('Рузультат вызова функции getExpensesMonth "Расходы за месяц" ' + expensesAmount);

// Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц  вариант 2
let getExpensesMonth = function() {
    let sum = 0;
    let sumStringToNumber;
    for (let i = 0; i < 2; i++) {
        expenses[i] = prompt('Введите обязятельную статью расходов ?', 'required payments');
 
        sumStringToNumber = prompt('Во сколько это обойдется ?', 'sum');
        
        while (!isNumber(sumStringToNumber)) {
            sumStringToNumber = prompt('Во сколько это обойдется ?', 'sum');
        }
        sum += +sumStringToNumber;
         
    }
    
    console.log(expenses);
    return sum;
};

let expensesAmount = getExpensesMonth();

console.log('Рузультат вызова функции getExpensesMonth "Расходы за месяц" ' + expensesAmount);

// Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
function getAccumulatedMonth(arg1, arg2) {
    return arg1 - arg2;
}
getAccumulatedMonth(money, expensesAmount);

// Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth вариант 1
let accumulatedMonth = getAccumulatedMonth(money, expensesAmount);

// Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth вариант 2
let accumulatedMonth1 = function(arg1, arg2) {
    accumulatedMonth1 = arg1 - arg2;
};
accumulatedMonth1(money, expensesAmount);


// showTypeOf
let showTypeOf = function(data) {
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

// Объявить функцию getTargetMonth.
// Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth)
// и возвращает результат
function getTargetMonth(arg1, arg2) {
    return arg1 / arg2;
}
getTargetMonth(mission, accumulatedMonth);

let getTargetMonths = mission / accumulatedMonth;
    if (getTargetMonths >= 0) {
        console.log('Cрок достижения цели ' + Math.ceil(getTargetMonths) + ' месяцев(а)');
    } else if (getTargetMonths < 0) {
        console.log('Цель не будет достигнута');
    }

let budgetDay = accumulatedMonth / 30;
console.log('Дневной бюджет составляет ' + Math.floor(budgetDay));

//     period = 7,
//     budgetDay = money / 30;

// alert('ученик JS 12');
// console.log('Привет ! Я не художник, я только учусь !');
// console.log(typeof money, income, deposit);
// console.log(typeof money);
// console.log(typeof income);
// console.log(typeof deposit);
// console.log('длина строки addExpenses = ' + addExpenses.length + ' символам');
// console.log('Период равен ' + period + ' месяцам.', 'Цель заработать ' + mission + ' рублей.');
// console.log(addExpenses.toLowerCase().split(' '));
// console.log(budgetDay.toFixed(1));
   
let getStatusIncome = function() {
    if (budgetDay >= 1200) {
        return ('У вас высокий уровень дохода');
    } 
    if (accumulatedMonth > 600 && budgetDay < 1200 ) {
        return ('У вас средний уровень дохода');
    } 
    if (budgetDay <= 600 && budgetDay > 0) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    } 
    if (budgetDay <= 0) {
        return ('Что то пошло не так ! Че не смеетесь ? Не смешно ? Не поняли, да ? Это РОССИЯ !!!');
    }
};

console.log(getStatusIncome());

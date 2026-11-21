// 1. Визначення оцінки

const score = Number(prompt('Введіть кількість балів за тест (від 0 до 100):'));
const result = score >= 60 ? 'Passed' : 'Failed';
console.log(result);

// 2. Вибір напою

const drinkNumber = Number(prompt('Введіть номер напою:'));

switch (drinkNumber) {
  case 1:
    console.log('Coffee');
    break;
  case 2:
    console.log('Tea');
    break;
  case 3:
    console.log('Juice');
    break;
  case 4:
    console.log('Water');
    break;
  default:
    console.log('Unknown drink');
}

// 3. Пошук найбільшого числа

const firstNumber = Number(prompt('Введіть перше число:'));
const secondNumber = Number(prompt('Введіть друге число:'));
const thirdNumber = Number(prompt('Введіть третє число:'));

let max = firstNumber;

if (secondNumber > max) {
  max = secondNumber;
}

if (thirdNumber > max) {
  max = thirdNumber;
}

console.log(max);

// 4. Підрахунок суми

let sum = 0;

for (let i = 1; i <= 100; i += 1) {
  sum += i;
}

console.log(sum);

// 5. Таблиця множення

const number = Number(prompt('Введіть число:'));

for (let i = 1; i <= 10; i += 1) {
  console.log(`${number} * ${i} = ${number * i}`);
}

// 6. Робота з рядком

const word = 'avadakedavra';
let count = 0;
for (let i = 0; i < word.length; i += 1) {
  if (word[i] === 'a') {
    count++;
  }
}

console.log(count);

// 7. Функція для розрахунку ціни

function calculatePrice(price, quantity) {
  const total = price * quantity;
  console.log(total);
}

calculatePrice(150, 5);
calculatePrice(48, 8);
calculatePrice(999, 3);

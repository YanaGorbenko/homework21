// Task1
let arr1 = [3, -1, 0, 5, 7, -4];
let positive = 0;
for (let i = 0; i < arr1.length; i += 1) {
  if (arr1[i] > 0) {
    positive += 1;
  }
}
console.log(`Task1`);
console.log(`Масив: ${arr1}`);
console.log(`Кількість додатніх чисел: ${positive}`);

// Task2
let arr2 = [1, 4, 7, 10, 13, 16];
let doubles = [];
for (let i = 0; i < arr2.length; i += 1) {
  if (arr2[i] % 2 == 0) {
    doubles.push(arr2[i]);
  }
}
console.log(`Task2`);
console.log(`Масив: ${arr2}`);
console.log(`Масив з парних чисел: ${doubles}`);

// Task3
let arr3 = [5, -3, 2, -8, 0];
console.log(`Task3`);
console.log(`Масив: ${arr3}`);
for (let i = 0; i < arr3.length; i += 1) {
  if (arr3[i] < 0) {
    arr3[i] = 0;
  }
}
console.log(`Масив, де від'ємні числа замінені на 0: ${arr3}`);

// Task4
let arr4 = ['red', 'green', 'blue'];
console.log(`Task4`);
console.log(`Масив: ${arr4}`);
if (arr4.includes('green')) {
  console.log(`Знайдено green`);
} else {
  console.log(`Не знайдено green`);
}

// Task5
let arr5 = [4, 0, 5, 0, 2];
let index = arr5.indexOf(0);
console.log(`Task5`);
console.log(`Масив: ${arr5}`);
if (index !== -1) {
  arr5.splice(index, 1);
}
console.log(`Масив після видалення першого 0: ${arr5}`);

// Task6
let arr6 = ['apple', 'banana', 'pear'];
let string = '';
for (let i = 0; i < arr6.length; i += 1) {
  if (i == arr6.length - 1) {
    string += arr6[i];
  } else {
    string += `${arr6[i]}, `;
  }
}
console.log(`Task6`);
console.log(`Масив: ${arr6}`);
console.log(`Масив після перетворення на рядок: ${string}`);

// Task7
let arr7 = [9, 2, 14, -5, 7];
let min = arr7[0];
for (let i = 0; i < arr7.length; i += 1) {
  if (arr7[i] < min) {
    min = arr7[i];
  }
}
console.log(`Task7`);
console.log(`Масив: ${arr7}`);
console.log(`Мінімальне значення: ${min}`);

// Task8
let arr8 = ['a', 'b', 'a', 'c', 'a'];
let count = 0;
for (let i = 0; i < arr8.length; i += 1) {
  if (arr8[i] === 'a') {
    count += 1;
  }
}
console.log(`Task8`);
console.log(`Масив: ${arr8}`);
console.log(`Кількість входжень "a": ${count}`);

// Task9
let arr9 = [5, 7, 9];
let num = 12;
if (num > 10) {
  arr9.push(num);
} else {
  arr9.unshift(num);
}
console.log(`Task9`);
console.log(`Масив: ${arr9}`);
console.log(`Масив після додавання ${num}: ${arr9}`);

// Task10
let arr10 = [];
let n = 5;
for (let i = 0; i < n; i += 1) {
  arr10[i] = 1;
}

console.log(`Task10`);
console.log(`Кількість елементів: ${n}`);
console.log(`Масив з ${n} одиниць: ${arr10}`);

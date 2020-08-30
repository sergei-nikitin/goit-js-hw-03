// Напиши скрипт, который, для объекта user,
// последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате
// ключ: значение используя Object.keys() и for...of

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};
let message = "";
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const keys = Object.keys(user);
for (const key of keys) {
  message += `${key}: ${user[key]}\n`;
}
console.log(message);

// Задача 3 - 1
// CRUD для свойств объекта
// С - create(создать)
// R - read(читать)
// U - update(обновить)
// D - delete (удалить)
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле 'mood' со значением 'happy'
// добавляет поле 'full time' со значением true
// заменяет значение 'hobby' на 'skydiving'
// заменяет значение 'premium' на false
// в переменную message записывает содержимое объекта user:
// для переменной keys присваивает массив свойств объекта,
// используя метод Object.keys()
// с помощью оператора for...of
// в формате ключ: значение
// c переносом строки('\n')

// let message = "";
// const user = {
//   age: 20,
//   hobby: "html",
//   name: "Mango",
//   premium: true,
// };
// const fullTime = "full time";
// user.mood = "happy";
// user[fullTime] = true;
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);
// for (const key of keys) {
//   message += `${key}: ${user[key]}\n`;
// }
// console.log(message);

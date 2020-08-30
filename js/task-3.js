// Напиши функцию findBestEmployee(employees),
// которая принимает объект сотрудников и
// озвращает имя самого продуктивного(который выполнил больше всех задач).
// Сотрудники и кол - во выполненых задач содержатся как свойства
// объекта в формате "имя": "кол-во задач".

// const findBestEmployee = function (employees) {
//   let bestEmployee = employees[0];
//   for (const employee of employees) {
//     if (employee.name > bestEmployee) {
//       bestEmployee = employee.name;
//     }
//     return bestEmployee;
//   }
// };

const findBestEmployee = function (employees) {
  "use strict";
  // Write code under this line
  const keys = Object.keys(employees);
  let result = "";
  let maxValue = 0;
  for (const key of keys) {
    if (employees[key] > maxValue) {
      maxValue = employees[key];
      result = key;
    }
  }
  return result;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
);

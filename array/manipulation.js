// Array
// var array = ["Satu", "Dua", "Tiga"];

// Show Array
// for (var i = 0; i < 3; i++) {
//   console.log(array[i]);
// }

// Add Array
// array[3] = "Empat";
// console.log(array);

// Delete Array
// array[1] = undefined;
// console.log(array);

// Method in Array
// 1. JOIN -> JOIN All Member of Array
// console.log(array.join()); // Satu,Dua,Tiga
// console.log(array.join("-")); // Satu-Dua-Tiga
// console.log(array.join(" ")); // Satu Dua Tiga

// 2. PUSH & POP -> Add and Delete Member of Array from END
// array.push("Empat");
// console.log(array); // ["Satu", "Dua", "Tiga", "Empat"]
// array.pop();
// console.log(array); // ["Satu", "Dua"]
// array.push("Empat", "Lima");
// console.log(array); // ["Satu", "Dua", "Tiga", "Empat", "Lima"]

// 3 UNSHIFT & SHIFT -> Add and Delete Member of Array from START
// array.unshift("Nol");
// console.log(array); // ["Nol", "Satu", "Dua", "Tiga"]
// array.shift();
// console.log(array); // ["Dua", "Tiga"]

// 4. SPLICE
// splice(startIndex, amountDelete, newElement1, newElement2, ...)
// array.splice(2, 0, "Dua,Lima");
// console.log(array); // ["Satu", "Dua", "Dua,Lima", "Tiga"]

// 5. SLICE
// slice(startIndex, endIndex)
// var new_array = array.slice(0, 2);
// console.log(new_array); // ["Satu", "Dua"]

// 6. FOREACH -> Not Return Value
// array.forEach(function (e) { // without index
//   console.log(e);
//   // Output:
//   //   Satu
//   //   Dua
//   //   Tiga
// });

// array.forEach(function (e, i) {
//   // with index
//   console.log(i + ": " + e);
//   // Output:
//   //   0: Satu
//   //   1: Dua
//   //   2: Tiga
// });

// 7. MAP -> Return Array Value
// var new_array = array.map(function (e) {
//   return e + "!";
// });
// console.log(new_array); // ["Satu!", "Dua!", "Tiga!"]

// 8. SORT
// array.sort();
// console.log(array); // ["Dua", "Satu", "Tiga"]
// var number = [1, 2, 20, 10, 15, 4, 7];
// console.log(number); // [1, 2, 20, 10, 15, 4, 7]
// number.sort();
// console.log(number); // [1, 10, 15, 2, 20, 4, 7]
// number.sort(function (a, b) {
//   return a - b;
// });
// console.log(number); // [1, 2, 4, 7, 10, 15, 20]

// 9. FILTER -> Return Array
// var number = [1, 2, 20, 10, 15, 4, 7];
// var number1 = number.filter(function (n) {
//   return n == 2;
// });
// console.log(number1); // [2]
// var number2 = number.filter(function (n) {
//   return n > 10;
// });
// console.log(number2); // [20, 15]

// 10. FIND -> Return One Value
// var number = [1, 2, 20, 10, 15, 4, 7];
// var number1 = number.find(function (n) {
//   return n == 20;
// });
// console.log(number1); // 20

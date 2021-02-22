var arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);

// преобразование массива в строку с пробелом
var str = arr.join(' ');
// console.log(str);

// преобразование строки в массив
var fio = 'Иван Иванович';
var fioArr = fio.split(' '); // поиск символа для разделения
// console.log(fio);
// console.log(fioArr);

// пример 1
var numbers = 12314152;
var numbersMas = numbers.toString().split(''); // перевод numbers в строку и преобразование в массив
var summa = 0;
for (i = 0; i < numbersMas.length; i++) {
  summa = summa + +numbersMas[i];
}
// console.log(summa);

// пример 2
var m = '1 2 3 4 25 16';
var newMassive = m.split(' ');

var s = 0;
for (var i = 0; i < newMassive.length; i++) {
  s = s + +newMassive[i];
}
// console.log(s);

// добавление в массив
newMassive.push(55);
newMassive[newMassive.length] = '66';
console.log(newMassive);

// удаление из массива
var deleted = newMassive.pop();
// console.log(newMassive);
// console.log(deleted);

var delMas = newMassive.splice(2, 1);
// console.log(delMas);
// console.log(newMassive);

// обход массива
for (var item of newMassive) {
  console.log(item);
}

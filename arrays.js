var arr = [1, 2, 3, 4, 5, 6];
console.log(arr);

// преобразование массива в строку с пробелом
var str = arr.join(' ');
console.log(str);

// преобразование строки в массив
var fio = 'Иван Иванович';
var fioArr = fio.split(' '); // поиск символа для разделения
console.log(fio);
console.log(fioArr);

// пример 1
var numbers = 12314152;
var numbersMas = numbers.toString().split(''); // перевод numbers в строку и преобразование в массив
var summa = 0;
for (i = 0; i < numbersMas.length; i++) {
  summa = summa + +numbersMas[i];
}
console.log(summa);

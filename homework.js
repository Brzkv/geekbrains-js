// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

function check(n) {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

var i = 0;
while (i < 101) {
  if (check(i)) {
    console.log(i);
  }
  i++;
}

// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

var cart = [
  {
    item: 'Товар №1',
    quantity: 1,
    price: 1000,
  },
  {
    item: 'Товар №2',
    quantity: 1,
    price: 2000,
  },
  {
    item: 'Товар №3',
    quantity: 3,
    price: 3000,
  },
  {
    item: 'Товар №4',
    quantity: 1,
    price: 3500,
  },
];

var cartTotal = 0;
function countCartTotal() {
  for (var i = 0; i < cart.length; i++) {
    cartTotal += cart[i].price * cart[i].quantity;
  }
  return cartTotal;
}
countCartTotal();
console.log(`Cart total: ${cartTotal}₽`);

// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for(…){// здесь пусто}

for (var i = 0; i < 9; i++, console.log(i)) {}

// 5) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

for (var i = 1, x = 'x'; i < 20; console.log(x), i++, x += 'x');

var cross = '';
for (var i = 0; i < 20; i++) {
  cross += 'x';
  console.log(cross);
}

// x
// xx
// xxx
// xxxx
// xxxxx

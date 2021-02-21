// цикл while
var table =
  "<table width='500px' border='1' style='border-collapse: collapse; border: 1px solid black'>";
var tr = 1;
var td, color;

while (tr <= 10) {
  if (tr == 6) {
    break; // останавливает цикл
  }
  table = table + '<tr>';
  td = 1;
  while (td <= 5) {
    if (td == 3) {
      td++;
      continue; // прерывает и возвращается к началу цикла
    }
    color = td % 2 == 0 ? '#f2f2f2' : '#fff';
    table = table + `<td style="background: ${color}">${tr * td}</td>`;
    td++;
  }
  table = table + '</tr>';
  tr++;
}

table = table + '</table>';
document.write(table);

// цикл do...while
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);

// бесконечный цикл
while (1) {
  var year = +prompt('введите год рождения');
  if (!isNaN(year)) {
    var age = new Date().getFullYear() - year;
    alert(age);
    break;
  } else {
    alert('введите год рождения');
  }
}

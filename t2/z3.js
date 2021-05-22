const a = 10;
const b = 10;
const c = 5;
const p = (a + b +c)/2;
const S = Math.sqrt(p * (p - a) * (p - b) * (p - c))
Math.sqrt(p * (p - a) * (p - b) * (p - c));
console.log(`Сторона а = ${a}\n Сторона в = ${b}\n Сторона с = ${c}\n Півпериметр = ${p} Площа трикутника по формулі Герона = ${S}`);

let svitlophor = prompt(`Який зараз колір на світлофорі?`);
if(svitlophor == `червоний` || svitlophor == `красный` || svitlophor == `red`){
    alert('СТОП!');
}else if(svitlophor == `жовтий` || svitlophor == `жолтый` || svitlophor == `yellow`){
    alert(`Приготуйтесь`);
}else if(svitlophor == `зелений` || svitlophor == `зеленый` || svitlophor == `green`){
    alert(`Можна рухатись`)
}
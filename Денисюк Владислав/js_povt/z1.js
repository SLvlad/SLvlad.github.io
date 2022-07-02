let users = ['Ратушняк Андрій', 'Горенко Олександр', 'Денисюк Владислав'];
let table = document.getElementById(`table`);
let data = `<tr><th>№</th><th>Kористувач</th><th width="10%">Відправити лист</th></tr>`;
for(i=0; i<3; i++){
    if(i % 2 == 0){
      data += `<tr class="gray">
<td>${i+1}</td>
<td>${users[i]}</td>
<td><input type="checkbox"></td>
</tr>`  
    }else{
        data += `<tr">
<td>${i+1}</td>
<td>${users[i]}</td>
<td><input type="checkbox"></td>
</tr>`  
}
    
}
table.innerHTML = data;
console.log(table) 
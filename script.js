let tr = document.getElementById('tr');
let body = document.getElementById('body');
var output = ''

for (let i = 1; i < 13; i++) {
    tr.innerHTML+= '<th>' + "" + i + '</th>'
    output +="<tr>"
    for (let j = 1; j < 13; j++){
        output +="<td>" + i +  "*" + j + " = " + i*j +  "</td>"
    }
    output +="</tr>"
} body.innerHTML=output
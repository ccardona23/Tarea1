$(document).on('ready', funcMain);

function funcMain()
{
	$("#add_row").on('click',newRowTable);
}


function newRowTable()
{
	var nombre=document.getElementById("nombre").value;
	var apellidos=document.getElementById("apellidos").value;
	var edad=document.getElementById("edad").value;
	var sexo=document.getElementById("sexo").value;
	var correo=document.getElementById("correo").value;

	var name_table=document.getElementById("tabla_factura");

    var row = name_table.insertRow(0+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = nombre;
    cell2.innerHTML = apellidos;
    cell3.innerHTML = edad;
    cell4.innerHTML = sexo;
    cell5.innerHTML = correo;

}


function format(input)
{
	var num = input.value.replace(/\,/g,'');
	if(!isNaN(num)){
		input.value = num;
	}
	else{ alert('Solo se permiten numeros');
		input.value = input.value.replace(/[^\d\.]*/g,'');
	}
}


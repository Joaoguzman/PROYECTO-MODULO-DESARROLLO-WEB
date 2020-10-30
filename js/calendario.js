function formateDate(string) {
    var info = string.split('-').reverse().join('/');
    return info;
}

function nueva_cita(){
    var nombre_medico = document.getElementById("nombre_medico");
    var especialidad = document.getElementById("especialidad");
    var fecha = document.getElementById("fecha");
    var fecha_invertida = formateDate(fecha.value);
    console.log(fecha_invertida) 
    var hora = document.getElementById("hora");
    var lugar = document.getElementById("lugar");
    var nota = document.getElementById("nota");
    
    console.log("nombre: " + nombre_medico.value);
    console.log("especialidad: " + especialidad.value);
    console.log("fecha: " + fecha.value);
    console.log("hora: " + hora.value);
    console.log("lugar: " + lugar.value);
    console.log("nota: " + nota.value);
    
    var fila_nueva="<tr><td>"+nombre_medico.value+"</td><td>"+especialidad.value+"</td><td>"+fecha_invertida+"</td><td>"+hora.value+"</td><td>"+lugar.value+"</td><td>"+nota.value+"</td></tr>";
    console.log(fila_nueva);
    var btn = document.createElement("tr");
    btn.innerHTML = fila_nueva;
    console.log("btn: ",btn);
    document.getElementById("tabla_citas").appendChild(btn);
}

function nuevo_examen(){
    var lugar_examen = document.getElementById("lugar_examen");
    var fecha_examen = document.getElementById("fecha_examen");
    var f_examen_invertida = formateDate(fecha_examen.value);
    var hora_examen = document.getElementById("hora_examen");
    var nota_examen = document.getElementById("nota_examen");

    var fila_examen_nueva = "<tr><td>"+lugar_examen.value+"</td><td>"+f_examen_invertida+"</td><td>"+hora_examen.value+"</td><td>"+nota_examen.value+"</td></tr>";
    var btn_examen = document.createElement("tr");
    btn_examen.innerHTML = fila_examen_nueva;
    document.getElementById("tabla_examenes").appendChild(btn_examen);
}
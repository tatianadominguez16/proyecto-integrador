function agendarCita() {
    let nombre = document.getElementById("nombre").value;
    let fechaNacimiento = document.getElementById("fecha_nacimiento").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let sede = document.getElementById("sede").value;
    let fechaHora = document.getElementById("fecha_hora").value;
    let doctor = document.getElementById("doctor").value;

    if (nombre && fechaNacimiento && telefono && correo && sede && fechaHora && doctor) {
        let tratamiento = nombre.endsWith("a") ? "Señora" : "Señor";
        document.getElementById("resultado").innerHTML = 
            `<p>${tratamiento} ${nombre}, su cita quedó agendada para el ${fechaHora} en la sede ${sede} con el/la doctor(a) ${doctor}.</p>`;
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

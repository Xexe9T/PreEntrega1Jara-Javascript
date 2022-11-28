//Saludo Inicial
function saludoDeBienvenida() {
    let pasajero = prompt("Ingrese su Nombre por favor");
    alert("Bienvenido " + pasajero + "!!!!!!");
}
saludoDeBienvenida();

//Variables
let cantidadPasajeros = parseInt(prompt("Ingresa la cantidad de Pasajeros"));
let diasReserva = parseInt(prompt("Ingresa dias de Alojamiento"));
let contacto = prompt("Ingresa correo y/o numero de telefono");

//Ciclo
while (cantidadPasajeros > 10 || cantidadPasajeros < 4) {
    alert("La cantidad de pasajeros debe estar entre 4 y 10 personas");
    cantidadPasajeros = parseInt(prompt("Ingresa la cantidad de Pasajeros"));   
}
alert("Nos comunicaremos contigo a la brevedad!!!");





var nombreJugador1=prompt("Ingresa tu nombre Jugador 1");
var nombreJugador2=prompt("Ingresa tu nombre Jugador 2");

var jugador1;
var jugador2;

var gano1=0;
var gano2=0;

do {
     jugador1 = prompt(nombreJugador1 + ", hace tu elección! pidra, papel o tijera?");
     jugador2 = prompt(nombreJugador2 + ", ahora te toca a vos, hacé tu elección");
     jugador1 = jugador1.toLowerCase(jugador1);
     jugador2 = jugador2.toLowerCase(jugador2);
            if (//CONDICIONAL EN CASO DE QUE GANE EL JUGADOR 1
                    (jugador1 == "piedra" && jugador2 == "tijera")
                    || (jugador1 == "tijera" && jugador2 == "papel")
                    || (jugador1 == "papel" && jugador2 == "piedra")) {
                    gano1++;
                    console.log({ gano1 });
                }
            else if (//CONDICIONAL PARA QUE GANE EL JUGADOR2
                    (jugador2 == "piedra" && jugador1 == "tijera")
                    || (jugador2 == "tijera" && jugador1 == "papel")
                    || (jugador2 == "papel" && jugador1 == "piedra")) {
                    gano2++;
                    console.log({ gano2 })
                }
            else (console.log("empate"))
     
    }
while(
    (jugador1 == "piedra" || jugador1 == "papel" || jugador1 == "tijera") 
    && (jugador2 == "piedra" || jugador2 == "papel" || jugador2 == "tijera")&&(gano1 < 2 && gano2 < 2)
);

if (gano1 == 2) { document.write("Felicitaciones, " + nombreJugador1 + " GANASTE!!!") }
else if (gano2 == 2) { document.write("Felicitaciones, " + nombreJugador2 + " GANASTE!!!")} 

//  if (gano1 == 2) { 
//      document.write("Felicitaciones, " + nombreJugador1 + " GANASTE!!!") 
//     }
//  else if (gano2 == 2) { 
//      document.write("Felicitaciones, " + nombreJugador2 + " GANASTE!!!")}
    

                    // // // while (gano1 < 2 && gano2 < 2) {
//     jugador1 = prompt(nombreJugador1 + ", hace tu elección! pidra, papel o tijera?");
//     jugador2 = prompt(nombreJugador2 + ", ahora te toca a vos, hacé tu elección");
//     jugador1 = jugador1.toLowerCase(jugador1);
//     jugador2 = jugador2.toLowerCase(jugador2);
//     //primero me aseguro que los datos esten bien ingresados
//     if ((jugador1 == "piedra" || jugador1 == "papel" || jugador1 == "tijera") && (jugador2 == "piedra" || jugador2 == "papel" || jugador2 == "tijera")) {
//         if (//CONDICIONAL EN CASO DE QUE GANE EL JUGADOR 1
//             (jugador1 == "piedra" && jugador2 == "tijera")
//             || (jugador1 == "tijera" && jugador2 == "papel")
//             || (jugador1 == "papel" && jugador2 == "piedra")) {
//             gano1++;
//             console.log({ gano1 });
//         }
//         else if (//CONDICIONAL PARA QUE GANE EL JUGADOR2
//             (jugador2 == "piedra" && jugador1 == "tijera")
//             || (jugador2 == "tijera" && jugador1 == "papel")
//             || (jugador2 == "papel" && jugador1 == "piedra")) {
//             gano2++;
//             console.log({ gano2 })
//         }
//         else (console.log("empate"))

//     }
//     else {
//         console.log("Volver a ingresar");
//     }
// }

// if (gano1 == 2) { document.write("Felicitaciones, " + nombreJugador1 + " GANASTE!!!") }
// else if (gano2 == 2) { document.write("Felicitaciones, " + nombreJugador2 + " GANASTE!!!") 
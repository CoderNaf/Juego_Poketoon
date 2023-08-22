let hipodogue = document.getElementById('hipodoge');
let capipepo = document.getElementById('capipepo');
let Ratigueya = document.getElementById('Ratigueya');
let Agua = document.getElementById('btn-agua');
let Fuego = document.getElementById('btn-fuego');
let Tierra = document.getElementById('btn-tierra');
let nombreMokepon = document.getElementById('Nombre-mokepon');
let mokeponEnemigo = document.getElementById('mokepon-enemigo');
let ataqueEnemigo;
let ataqueJugador;
let vidasJugador = 3;
let vidasEnemigo = 3;

window.addEventListener('load', () => {
    let btnSeleccionarMascota = document.getElementById('seleccionar_mascota').addEventListener('click', () => {
        if (hipodogue.checked) {
            nombreMokepon.innerHTML = 'hipodogue';
        } else if (capipepo.checked) {
            nombreMokepon.innerHTML = 'capipepo';
        } else if (Ratigueya.checked) {
            nombreMokepon.innerHTML = 'Ratigueya';
        } else {
            alert('No seleccionaste ningun mokepon');
            return; // Detener la ejecución si no se selecciona una mascota
        }

        function seleccionarMascotaDelEnemigo() {
            let mascotaAleatorio = aleatorio(1, 3);

            if (mascotaAleatorio == 1) {
                mokeponEnemigo.innerHTML = 'hipodogue';
            } else if (mascotaAleatorio == 2) {
                mokeponEnemigo.innerHTML = 'capipepo';
            } else if (mascotaAleatorio == 3) {
                mokeponEnemigo.innerHTML = 'Ratigueya';
            }
        }
        seleccionarMascotaDelEnemigo();

        Agua.addEventListener('click', () => {
            ataqueJugador = 'Agua';
            alert(ataqueJugador);
            ataqueAleatorioEnemigo();
        });

        Fuego.addEventListener('click', () => {
            ataqueJugador = 'Fuego';
            alert(ataqueJugador);
            ataqueAleatorioEnemigo();
        });

        Tierra.addEventListener('click', () => {
            ataqueJugador = 'Tierra';
            alert(ataqueJugador);
            ataqueAleatorioEnemigo();
        });
    });

    function ataqueAleatorioEnemigo() {
        let ataqueAEnemigo = aleatorio(1, 3);

        if (ataqueAEnemigo === 1) {
            ataqueEnemigo = 'Agua';
            alert(ataqueEnemigo);
        } else if (ataqueAEnemigo === 2) {
            ataqueEnemigo = 'Fuego';
            alert(ataqueEnemigo);
        } else if (ataqueAEnemigo === 3) {
            ataqueEnemigo = 'Tierra';
            alert(ataqueEnemigo);
        }
        combate();
    }

    function combate() {
            
        const spanVidasJugador  = document.getElementById ('vidas-jugador')
        const spanVidasEnemigo  = document.getElementById ('vidas-enemigo')

        if(ataqueEnemigo == ataqueJugador) {
            crearMensaje("EMPATE")
        } else if(ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra' || ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego' || ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua') {
            crearMensaje("GANASTE")
            vidasEnemigo -- 
            spanVidasEnemigo.innerHTML = vidasEnemigo
            if (vidasEnemigo == 0){
                alert ('ganaste el juego')
                location.reload();
            }
        } else {
            crearMensaje("PERDISTE")
            vidasJugador --
            spanVidasJugador.innerHTML = vidasJugador
            if(vidasJugador == 0){
                alert('Has perdido, suerte en para la proxima ')
                location.reload();
            }
        }
    }

    function crearMensaje(resultado) {
        let seccionDeMensajes = document.querySelector('.mensajes');
        let mensaje = document.createElement('p');
        mensaje.innerText = 'Escogiste el' + ' ' + ataqueJugador + ' ' + 'y el mokepon del enemigo escogio' + ' ' + ataqueEnemigo + ' ' + resultado;
        seccionDeMensajes.appendChild(mensaje);
    }
});

let btnReiniciarJuego = document.getElementById('btn-reiniciar').addEventListener('click', ()=>{
    location.reload();
})

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



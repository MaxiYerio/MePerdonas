// Obtenemos una referencia al botón "No"
const noBtn = document.getElementById("noBtn");

// Agregamos un evento de escucha para el evento 'pointermove' en dispositivos de escritorio
noBtn.addEventListener('pointermove', moveButton);

// Agregamos un evento de escucha para el evento 'touchstart' en dispositivos móviles
noBtn.addEventListener('touchstart', moveButton);

// Función para mover el botón
function moveButton(event) {
    // Detenemos el comportamiento predeterminado del evento para evitar desplazamientos no deseados
    event.preventDefault();
    
    // Obtenemos las coordenadas del toque o puntero
    let x, y;
    if (event.touches) {
        // Si es un evento táctil en dispositivos móviles
        const touch = event.touches[0];
        x = touch.clientX;
        y = touch.clientY;
    } else {
        // Si es un evento de puntero en la PC
        x = event.clientX;
        y = event.clientY;
    }
    
    // Obtenemos las dimensiones de la ventana
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Calculamos las nuevas coordenadas del botón
    const newX = Math.random() * (width - noBtn.offsetWidth);
    const newY = Math.random() * (height - noBtn.offsetHeight);
    
    // Movemos el botón a las nuevas coordenadas
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
}

// Función para mostrar un mensaje cuando se toca el botón "Sí"
function sayYes() {
    alert("Te amo, Te perdono");
}

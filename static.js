const columnLeft = document.querySelector('.column-left');

// Función para controlar el scroll
function handleScroll() {
  // Obtenemos la posición actual del scroll vertical
  const scrollY = window.scrollY;

  // Cambiamos la posición de la columna izquierda en base a la posición del scroll
  columnLeft.style.top = `${scrollY + 20}px`; // Puedes ajustar la distancia '20px' según tus necesidades
}

// Agregamos el evento de scroll al documento
document.addEventListener('scroll', handleScroll);
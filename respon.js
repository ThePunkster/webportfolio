// Consultamos el ancho de la ventana del navegador
let width = window.innerWidth; 

// Detectamos si el ancho es de un dispositivo móvil
if(width <= 768) {

  // Elementos a reorganizar
  let menu = document.getElementById("column-left");
  let sidebar = document.getElementById("column-right");
  
  // Pasamos el menú y la barra lateral arriba del contenido
  
  // Los hacemos ocupar todo el ancho
  menu.style.width = "100%";
  sidebar.style.width = "100%";

  // Quitamos floats para que dejen de acomodarse en columnas
  menu.style.float = "none"; 
  sidebar.style.float = "none";

  // Centramos verticalmente el contenido
  content.style.paddingTop = "20px";

}
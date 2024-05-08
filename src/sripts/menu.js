/* Para hacer que el menú móvil sea interactivo después de navegar a una nueva página, agrego el siguiente código que escucha el evento astro:page-load, 
el cual se ejecuta al finalizar la navegación de la página, y en respuesta, ejecuta el script existente para que el menú desplegable funcione al hacer clic.
Es decir, que hago que el script que controla el componente del menú móvil <Hamburger /> esté disponible después de navegar a una nueva página. */


document.addEventListener('astro:page-load', () => {
  document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('expanded');
  });
})



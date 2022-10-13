// Nombre fichero: controladorTablaMedidas
// Fecha: 01/10/2022
// Autor: David Lopez Gavila
// Descripción: El controlador se encarga de ejecutar las funciones de la logica necesarias para mostrar los datos en la tabla

const tabla = document.getElementById("contenedorTabla");

// Cuando la pagina cargue empezamos la funcion
window.addEventListener("DOMContentLoaded", async (e) => {
  
  // onGetMediciones solo esta para mostrar la funcionalidad
  onGetMediciones((querySnapshot) => {

    // Nos aseguramos de que la tabla este vacia
    tabla.innerHTML = "";
    // Insertamos
    querySnapshot.forEach((doc) => {
      insertarEnLaTabla(doc)
    });
  });
});
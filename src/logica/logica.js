// Nombre fichero: logica
// Fecha: 01/10/2022
// Autor: David Lopez Gavila
// Descripción: Este programa contiene la logica de la aplicacion

// Inicializamos la base de datos
const database = firebase.firestore();

// Tiene todas las mediciones
const getMediciones = () => database.collection("Medidas").get();

// Cuando se añade un dato en Firebase se llama a esta función
const onGetMediciones = (callback) => database.collection("Medidas").onSnapshot(callback);

/**
 * Dado un documento de Firebase añade una columna a la tabla
 * doc: FirestoreDocument -> insertarEnLaTabla -> 
 * @param {FirestoreDocument} doc Documento de Firestore, contiene todos los datos.
 */
 async function insertarEnLaTabla(doc){
    
    const medida = doc.data();
    console.log(medida);

    tabla.innerHTML += `
      <tr>
      <td class="text" id="valorMediciones">${medida.Dato}</td>
      </tr>`;
}
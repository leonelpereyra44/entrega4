
//Para la proxima entrega añadir funciones de borrarlibro, libroleidos y librosrepetidos

const listar = () => {
    
    let librosStorage = JSON.parse(localStorage.getItem("librosStorage"));
    while (lista.hasChildNodes()) { //si la lista existe la limpio para volverla a llenar, porque de lo contrario se duplica
        lista.removeChild(lista.firstChild);
    }
    librosStorage.forEach(libro => {
        let li = document.createElement("li");
        li.innerHTML = `
        Libro: ${libro.nombre}
        Editorial: ${libro.editorial}
        `;
        lista.append(li); 
    });
};

const guardar = (inputs) => {
    let libro = { //añado al objeto libro los valores de los inputs 
        nombre: inputs[1].value,
        editorial: inputs[3].value
    }

    let librosStorage = JSON.parse(localStorage.getItem("librosStorage"));
    
    //verifico si existen o no libros guardados
    if(librosStorage){
        librosNuevos = librosStorage;
    } else {
        librosNuevos = [];
    }

    librosNuevos.push(libro);
    localStorage.setItem("librosStorage", JSON.stringify(librosNuevos));
    inputs[1].value = ""; //limpio los inputs 
    inputs[3].value = "";
    
    listar();
};

let librosNuevos;
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = e.target.children; //obtengo los valores de los inputs dentro del formulario
    guardar(inputs); // guardar libros en localstorage
});





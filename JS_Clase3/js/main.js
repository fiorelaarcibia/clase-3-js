function pedirNotas(cantidad) {
    let suma = 0;

    for (let i = 1; i <= cantidad; i++) {
        let nota = Number(prompt("Ingresá la nota " + i + ":"));
        suma = suma + nota;
    }

    return suma; 
}

const calcularPromedio = (sumaTotal, cantidad) => sumaTotal / cantidad;


function mostrarResultado(nombre, promedio) {
    console.log("Alumno: " + nombre);
    console.log("Promedio: " + promedio);

    if (promedio >= 6) {
        alert("Felicitaciones " + nombre + "! Aprobaste con " + promedio);
    } else {
        alert("Lo siento " + nombre + ", desaprobaste con " + promedio);
    }
}


let alumno = prompt("Como te llamas?");
let cantidadNotas = Number(prompt("Cuantas notas vas a cargar?"));

let totalNotas = pedirNotas(cantidadNotas);
let promedioFinal = calcularPromedio(totalNotas, cantidadNotas);
mostrarResultado(alumno, promedioFinal);

let ancho = Number(prompt("Ingrese el ancho del rectángulo (cm)"));
let alto = Number(prompt("Ingrese el alto del rectángulo (cm)"));
let areaRec = document.getElementById("area");
let promedioRec = document.getElementById("promedio");

function CalculoArea(a, b) {
    let area = a * b;

    return area;
}
areaRec.innerHTML = `El área del rectángulo es: ${CalculoArea(ancho, alto)} (cm)`

let CalculoPromedio = (a, b) => {
    let promedio = a + b;
    return promedio;
}
promedioRec.innerHTML = `El perímetro del rectángulo es: ${CalculoPromedio(ancho, alto)} (cm)`

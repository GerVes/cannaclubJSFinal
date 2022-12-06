import { geneticas } from "../data.js";



 localStorage.setItem('gen', geneticas)


const arrayGen = geneticas;
const arrayStr = JSON.stringify(arrayGen);


document.getElementById("listaGen").innerHTML = arrayStr;

const strTable = document.getElementById("#strain-Table")

function refreshGenTable() {

    let text = ""
    geneticas.forEach((g) => {
        const gen = `Nombre: ${g.nombre}<br>Variedad: ${g.variedad}<br>Contenido THC: ${g.THC}<br><img src="../images/${g.nombre}.jpg" width= 17%><hr>`
        text += gen
    })
    listaGen.innerHTML = text
}
refreshGenTable()







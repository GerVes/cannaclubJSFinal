import { miembros } from "../data.js";


const sociosTable = document.querySelector("#bodyTablaSocios");


refreshTable()


function refreshTable() {

    let text = ""
    miembros.forEach((m) => {
        const tr = `<tr><td>${m.nombre}</td><td>${m.apellido}</td><td>${m.cedula}</td><td>${m.puesto}</td></tr>`
        text += tr
    })
    sociosTable.innerHTML = text
}



function nuevoMiembro(n, a, ce,) {

    this.nombre = n,
        this.apellido = a,
        this.cedula = ce
    miembros.push(this)

}

let addMember = document.getElementById('btnConfirm');
addMember.addEventListener('click', membDataInput)

function membDataInput() {

    let newMember = new nuevoMiembro(document.querySelector('#btnName').value, document.querySelector('#btnSurname').value, document.querySelector('#btnCedula').value);

    // miembros.push(newMember) // por alguna razon me pushea 2 veces al enviar los valores del input
    refreshTable()
}


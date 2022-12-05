let stock = 40
console.log(stock)

function swalError() {

    Swal.fire(
        'Error',
        'Stock insuficiente o limite excedido, intente nuevamente',
        'error'
    )
}

// function swalConfirm (){
//     stock -= cantidad;

//     Swal.fire("su stock restante es " + stock)

// }

const retirarCuota = cantidad => {

    function swalConfirm() {

        stock -= cantidad;

        Swal.fire("su stock restante es " + stock)
    }


    cantidad > stock ? swalError() : swalConfirm()

}











let confirmarCantidad = document.getElementById("btnConfirmCantidad");
confirmarCantidad.addEventListener('click', retirarStock)

function retirarStock() {
    let inputConf = document.getElementById("inputConfirmCantidad")
    let cuota = inputConf.value;

    retirarCuota(cuota);


}




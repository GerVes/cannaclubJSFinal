Swal.fire({
    title: 'Espacio solo para miembros del club!',
    text: "Es usted miembro del club?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Bienvenido!',
        'Disfruta de nuestra web',
        'success'
      )
    } else{
        close()
    }
  })
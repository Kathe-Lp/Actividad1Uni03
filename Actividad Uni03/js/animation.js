function Receta1() {
    swal.fire({
        imageUrl: 'img/receta01.jpg',
        imageWidth: 1200,
        imageAlt: 'hermosa'
    })
}

function Receta2() {
    swal.fire({
        imageUrl: 'img/receta02.jpg',
        imageWidth: 1200,
        imageAlt: 'hermosa'
    })
}

function Receta3() {
    swal.fire({
        imageUrl: 'img/receta03.jpg',
        imageWidth: 1200,
        imageAlt: 'hermosa'
    })
}

function Favoritos(){
    swal.fire({
        position: 'center',
        icon: 'success',
        title: 'guardado en favoritos',
        ShowConfirmButton: false,
        timer: 1500
    })
}

function Eliminar(){
    swal.fire({
        title: '¿Está seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        ShowCancelButton: true,
        confirmButtonColor: '#d33',
        CancelButtonColor: '#d33',
        confirmButtontext: 'Eliminar'
    }).then((result) =>{
        if (result.isConfirmed) {
            swal.fire(
                '¡Eliminado!',
                'El platillo ha sido eliminado.',
                'success'
            )
        }
    })
}
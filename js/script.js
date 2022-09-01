let carrito       = [];
let productos     = [];

let gestor;

document.addEventListener('DOMContentLoaded', () => {
    carrito = JSON.parse( localStorage.getItem('carrito') ) || [];

})

agregarAlCarrito();


function agregarAlCarrito(){
    let boton = document.getElementsByClassName("botonComprar");
    for (let i = 0; i < prendas.length;i++){
        boton[i].onclick = () => {
            Swal.fire(
                prendas[i].tipo + " " + prendas[i].nombre + " en el carrito!",
              );
              console.log(prendas[i].tipo + " " + prendas[i].nombre + " en el carrito")
        };

    }

}


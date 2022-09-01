const url = '/js/prendas.json'

fetch(url)
.then(respuesta => respuesta.json())
.then(resultado =>{

    console.log(resultado)
} )

// const lista = document.querySelector('#catalogo') 

// fetch('/js/prendas.json')
//     .then( (res) => res.json() )
//     .then( (data) => {
//         data.forEach( (prendas  ) => {
//             const title = document.createElement('h6')
//             h6.innerHTML = '
//                 <h6>${prendas.precio}</h6>
//                 '
//         })

//         lista.append(h6)
//     })
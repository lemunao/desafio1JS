let boton = document.querySelector('#boton');
let valores = [document.querySelector('cantidad'), document.querySelector('color')]
console.log(valores[0], valores)
boton.addEventListener('submit', () => {
    let cantidad = document.querySelector('#cantidad');
    console.log(cantidad);
})
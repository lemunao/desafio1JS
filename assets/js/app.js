document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()    //Captura de datos
    document.getElementById("result").innerHTML += `<li>total de venta $: ${5990 * document.getElementById("cantidad").value} ${document.getElementById("cantidad").value} Cazuelas</li><li>Color: ${document.getElementById("color").value}</li>`;
})
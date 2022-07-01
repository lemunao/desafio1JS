document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()
    var despacho = parseInt((document.getElementById("comuna").value * document.getElementById("cantidad").value) / 5)
    var costoComida = despacho + (document.getElementById("comuna").value * document.getElementById("cantidad").value)
    document.getElementById("result").innerHTML += `<li>total de venta $: ${document.getElementById("comuna").value * document.getElementById("cantidad").value} 
    ${document.getElementById("cantidad").value} Porción</li> <li>Costo despacho: ${despacho} </li> <li>Costo total: ${costoComida} </li>`
    let color = document.getElementById('color-style').value
    cssColor = document.getElementById('circle-color');
    cssColor.style.background = color;
    document.getElementById("circle-color").innerHTML += `<li>Elije el color de tus platos!!! :  ${color-style}</li>`
})
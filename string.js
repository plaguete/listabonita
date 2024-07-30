//declarando string

function mostrar(){
    var produto1 = document.getElementById('produto1').value
    var produto2 = document.getElementById('produto2').value
    var produto3 = document.getElementById('produto3').value
    var produto4 = document.getElementById('produto4').value
    var produto5 = document.getElementById('produto5').value

    document.getElementById('mensagem').innerHTML = "1. " + produto1 + "<br>" + "2. " + produto2 + "<br>" + "3. " + produto3 + "<br>" + "4. " + produto4 + "<br>" + "5. " + produto5
}
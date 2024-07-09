function agregarNumero() {
    var entrada = document.getElementById('entradaNumero').value;
    var mensajeError = document.getElementById('mensajeError');
    var cuerpoTabla = document.getElementById('cuerpoTablaNumeros');
    mensajeError.style.display = 'none';
    
    if (esPar(entrada)) {
        var nuevaFila = cuerpoTabla.insertRow();
        var nuevaCelda = nuevaFila.insertCell(0);
        nuevaCelda.textContent = entrada;
    } else {
        mensajeError.style.display = 'block';
    }
    document.getElementById('entradaNumero').value = '';
}

function esPar(numeroStr) {
    var numero = parseInt(numeroStr);
    if (isNaN(numero)) {
        return false;
    }

    var digitosPares = ['0', '2', '4', '6', '8'];
    var ultimoDigito = numeroStr[numeroStr.length - 1];
    return digitosPares.includes(ultimoDigito);
}
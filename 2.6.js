function agregarCorredor() {
    var minutos = parseFloat(document.getElementById('minutos').value);
    var segundos = parseFloat(document.getElementById('segundos').value);

    if ((minutos === 0 && segundos === 0) || isNaN(minutos) || isNaN(segundos)) {
        return;
    }

    var tiempoTotalSegundos = (minutos * 60) + segundos;
    var velocidad = 1500 / tiempoTotalSegundos;

    var cuerpoTabla = document.getElementById('cuerpoTablaCorredores');
    var nuevaFila = cuerpoTabla.insertRow();
    var celdaMinutos = nuevaFila.insertCell(0);
    var celdaSegundos = nuevaFila.insertCell(1);
    var celdaVelocidad = nuevaFila.insertCell(2);

    celdaMinutos.textContent = minutos;
    celdaSegundos.textContent = segundos;
    celdaVelocidad.textContent = velocidad.toFixed(2);

    document.getElementById('minutos').value = '';
    document.getElementById('segundos').value = '';
}
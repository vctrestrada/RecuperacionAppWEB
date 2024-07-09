function calcularSumaPares() {
    var suma = 0;
    for (var i = 2; i <= 1000; i += 2) {
        suma += i;
    }
    document.getElementById('resultadoSuma').textContent = 'La suma de los números pares del 2 al 1000 es: ' + suma;
}
function calcularSalario() {
    var horasTrabajadas = parseFloat(document.getElementById('horasTrabajadas').value);
    var salarioHora = parseFloat(document.getElementById('salarioHora').value);
    var tasaImpuestos = parseFloat(document.getElementById('tasaImpuestos').value);

    if (isNaN(horasTrabajadas) || isNaN(salarioHora) || isNaN(tasaImpuestos)) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    var salarioBruto = horasTrabajadas * salarioHora;
    var deducciones = salarioBruto * (tasaImpuestos / 100);
    var salarioNeto = salarioBruto - deducciones;

    var cuerpoTabla = document.getElementById('cuerpoTablaSalarios');
    var nuevaFila = cuerpoTabla.insertRow();
    var celdaHorasTrabajadas = nuevaFila.insertCell(0);
    var celdaSalarioHora = nuevaFila.insertCell(1);
    var celdaTasaImpuestos = nuevaFila.insertCell(2);
    var celdaSalarioNeto = nuevaFila.insertCell(3);

    celdaHorasTrabajadas.textContent = horasTrabajadas;
    celdaSalarioHora.textContent = salarioHora;
    celdaTasaImpuestos.textContent = tasaImpuestos;
    celdaSalarioNeto.textContent = salarioNeto.toFixed(2);

    document.getElementById('horasTrabajadas').value = '';
    document.getElementById('salarioHora').value = '';
    document.getElementById('tasaImpuestos').value = '';
}
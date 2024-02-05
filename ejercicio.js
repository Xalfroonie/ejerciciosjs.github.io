function calcularVelocidad() {
    var distancia = parseFloat(document.getElementById('distancia').value);
    var tiempo = parseFloat(document.getElementById('tiempo').value);
    var velocidad = (distancia * 1000) / (tiempo * 60); // convirtiendo km a m y min a s
    document.getElementById('resultadoVelocidad').innerText = "Velocidad: " + velocidad.toFixed(2) + " m/s";
}

function evaluarTriangulo() {
    var lado1 = parseFloat(document.getElementById('lado1').value);
    var lado2 = parseFloat(document.getElementById('lado2').value);
    var lado3 = parseFloat(document.getElementById('lado3').value);
    
    if (lado1 === lado2 && lado2 === lado3) {
        document.getElementById('resultadoTriangulo').innerText = "Triángulo equilátero";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        document.getElementById('resultadoTriangulo').innerText = "Triángulo isósceles";
    } else {
        document.getElementById('resultadoTriangulo').innerText = "Triángulo escaleno";
    }
}

function calcularOperacion(operacion) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado;

    switch (operacion) {
        case 'suma':
            resultado = num1 + num2;
            break;
        case 'resta':
            resultado = num1 - num2;
            break;
        case 'multiplicacion':
            resultado = num1 * num2;
            break;
        case 'division':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = "Error: división por cero";
            }
            break;
    }

    document.getElementById('resultadoOperacion').innerText = "Resultado: " + resultado;
}

function esPrimo() {
    var num = parseInt(document.getElementById('numPrimo').value);
    var esPrimo = true;

    if (num <= 1) {
        esPrimo = false;
    } else {
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }

    if (esPrimo) {
        document.getElementById('resultadoPrimo').innerText = num + " es un número primo";
    } else {
        document.getElementById('resultadoPrimo').innerText = num + " no es un número primo";
    }
}

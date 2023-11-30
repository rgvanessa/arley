import * as readline from 'readline';

// Creamos una interfaz para leer la entrada y salida del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Preguntamos al usuario por el primer número
rl.question('Ingrese el primer número: ', (numero1) => {
    // Preguntamos al usuario por el segundo número
    rl.question('Ingrese el segundo número: ', (numero2) => {
        // Convertimos los números ingresados a valores numéricos
        const num1 = parseFloat(numero1);
        const num2 = parseFloat(numero2);

        // Verificamos si las conversiones son válidas
        if (!isNaN(num1) && !isNaN(num2)) {
            // Realizamos la suma
            const suma = num1 + num2;

            // Mostramos el resultado
            console.log(`La suma de ${num1} y ${num2} es igual a ${suma}`);
        } else {
            console.log('Alguno de los valores ingresados no es un número válido.');
        }

        // Cerramos la interfaz de lectura
        rl.close();
    });
});


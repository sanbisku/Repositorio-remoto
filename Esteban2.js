const [, , num1, num2] = process.argv;


function sumar(valor1, valor2)
{
    let resultado = Number(valor1) + Number(valor2);
    return console.log("el resultado es "+ resultado);
    
}

sumar(num1, num2);
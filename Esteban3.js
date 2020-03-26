const [, , nombre, opcion] = process.argv;

switch(opcion)
{
    case "mes":
        {
            let mes = getMonth();
            console.log(nombre+ "es la hora"+ mes);
        }
        break;
    case "año":
        {
            let anio = getFullYear();
            console.log(nombre+ "es el año"+ anio);
        }
        break;
    default:
        {
            console.log("no entiendo el comando");
        }
}

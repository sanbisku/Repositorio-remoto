const [, , nombre, opcion] = process.argv;

switch(opcion)
{
    case "saludar":
        {
            console.log("hola "+ nombre);
        }
        break;
    case "despedir":
        {
            console.log("Chau "+ nombre);
        }
        break;
    default:
        {
            console.log("no entiendo el comando");
        }
}



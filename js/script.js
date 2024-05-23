const productos = [
    {
        "nombre": "Manzanas",
        "precio": 2.50
    },
    {
        "nombre": "Pan Integral",
        "precio": 1.75
    },
    {
        "nombre": "Leche",
        "precio": 1.20
    },
    {
        "nombre": "Queso",
        "precio": 3.00
    },
    {
        "nombre": "Huevos",
        "precio": 2.00
    },
    {
        "nombre": "Pollo",
        "precio": 5.50
    },
    {
        "nombre": "Arroz",
        "precio": 1.00
    },
    {
        "nombre": "Zanahorias",
        "precio": 0.80
    },
    {
        "nombre": "Tomates",
        "precio": 1.50
    }
];

let mensaje = "Lista de productos:\n\n";
let carrito=[];
let total=0;

productos.forEach(producto => {

    mensaje += `Nombre: ${producto.nombre}, Precio: ${producto.precio}\n`;
});

do{
    alert(mensaje);
let respuesta =prompt("ingrese los productos que desee comprar. si desea salir escribra salir")

if (respuesta.toLowerCase() === 'salir') {
    break; // Salir del bucle si la respuesta es 'salir'
}
const productoencontrado= productos.find(producto => producto.nombre.toLowerCase()==respuesta.toLowerCase())
if(productoencontrado){
    alert("se añadio al carrito");
    carrito.push(productoencontrado);
    total += productoencontrado.precio;
}else
{
     alert("producto no encontrado");
}
}while(true);
carrito.sort((a, b) => {
    if (a.nombre < b.nombre) {
        return -1; 
    }
    if (a.nombre > b.nombre) {
        return 1; 
    }
    return 0; 
});
let resumendecompra="";
carrito.forEach(producto=>{
resumendecompra += `Nombre: ${producto.nombre}, precio: ${producto.precio.toFixed(2)} \n`;

})

alert(`resumen de compra: 
\n${resumendecompra}\n
el total de su compra es: ${total}`);
let metododepago;
do {
    metododepago = prompt("Seleccione su método de pago: Mercado Pago (0% interés), Débito (10% interés), Crédito (40% interés)");

    if (metododepago === null) {
        break; // Salir del bucle si el usuario cancela
    }

    if (metododepago.toLowerCase() === "mercado pago") {
        alert(`El total de su compra es: ${total.toFixed(2)}`);
        break;
    } else if (metododepago.toLowerCase() === "debito") {
        total *= 1.10; // Añade un 10% de interés
        alert(`El total de su compra con 10% de interés es: ${total.toFixed(2)}`);
        break;
    } else if (metododepago.toLowerCase() === "credito") {
        total *= 1.40; // Añade un 40% de interés
        alert(`El total de su compra con 40% de interés es: ${total.toFixed(2)}`);
        break;
    } else {
        alert("Método de pago no válido. Por favor, seleccione una opción válida.");
    }
} while (true);
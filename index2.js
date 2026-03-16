/*
Requerimientos

- Mostrar productos
- Añadir al carrito
- Mostrar carrito
- Eliminar del carrito
- Limpiar todo el carrito
- Comprar

*/

const productos = [
    {id:1 , name:'Laptop', price: 2300},
    {id:2 , name:'Mouse', price: 25},
    {id:3 , name:'Keyboard', price: 100},
    {id:4 , name:'Monitor', price: 2700},
];

let cart =[];


//Mostrar Productos
function showProducts(){

    console.log("------Productos Disponibles-------");
    productos.forEach(product => 
        console.log(`${product.id} - ${product.name} - ${product.price}`));

}

//Agregar a Carrito
function addtoCart(){
console.log("Agregar Producto");

const productId = Number(prompt("Ingrese el ID del producto"));

const product = productos.find(product => product.id === productId)

 if(!product){
    console.log('----Producto no encontrado----');
    return;
 }

 //Se agrega al carrito
 cart = [...cart, product];

console.log(`${product.name} ha sido agregado correctamente`);

}

//Mostrar Carrito
function showCart(){
console.log("----Tu carrito------");

if(cart.length === 0){
    console.log(`----Tu carrito esta vacio-----`);
    return;
}

let total = 0;

cart.forEach(product => {
        console.log(`${product.id} - ${product.name} - ${product.price}`);

        total = total + product.price;
  });
console.log("Total:" , total);
} 

//Eliminar un producto
function removeFromCart(){
console.log("----Eliminar del Carrito----");

if(cart.length === 0){
        console.log("---- Tu carrito se encuentra vacio actualmente ----");
        return;
}


const productId = Number(prompt("Ingrese el ID del producto"));

const product = productos.find(product => product.id === productId)

 if(!product){
    console.log('----Producto no encontrado----');
    return;
 }
 else
 {   //console.log(product);    
    
  cart =  cart.filter(product => product.id !== productId)
}

console.log(`${product.name} ha sido eliminado correctamente`);

/*
console.log("----Tu carrito------");

let total = 0;

cart.forEach(product => {
        console.log(`${product.id} - ${product.name} - ${product.price}`);

        total = total + product.price;
  });
console.log("Total:" , total);
*/

}

//Limpiar todo el carrito
function  removeAllCart(){

   if(cart.length === 0){
        console.log("---- Tu carrito se encuentra vacio actualmente ----");
        return;
    }

    cart = [];
    console.log("---- Carrito fue limpiado exitosamente ----");


}


function  checkOut(){
console.log("CheckOut");

}



function starStore(){
    let running = true;
    
    while(running){

        const option = prompt(
               `1 - Ver Productos
                2 - Agregar Producto
                3 - Ver Carrito
                4 - Eiminar el producto
                5 -  Elimimar todo el carrito
                6 - Comprar
                7 - Salir del programa               
               `)
               switch(option){

                case "1":
                    showProducts();
                    break;
               
                case "2":
                    addtoCart();
                    break;
                
                case "3":
                    showCart();
                    break;

                case "4":
                    removeFromCart();
                    break;
                
                case "5":
                    removeAllCart();
                    break;

                case "6":
                    checkOut();
                    break;

                case "7":
                    running = false;
                    console.log("Gracias por comporar en Codigo Store ");
                    break;

                default:
                    console.log("Opcion invalida");


             }

               





    }
}


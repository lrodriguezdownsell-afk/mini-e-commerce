//Un callback es una funcion que se
//ejecuta cuando otra funcion termina

//Se puede poner el nombre que uno guste 
// ejemplo:callback

/*
function hablar(mensaje, callback){
    console.log("La app dice: " + mensaje);
    callback();
    //se pone la callback  con parentesis
}

function aplaudir(){
    console.log("El publico aplaude");
}

//aplaudir lo pasa como parametro 
//La funcion aplaudir se pasa como parametro
hablar("Hola mundo",aplaudir);*/


/*
function hablar(mensaje, callback){
const message = "abuchea";

console.log("La ap dice:" + message);
callback(message);
}

function elPublicoDice(mensaje){
console.log("El publico:" + mensaje);
}

//Se manda solo nombre de la funcion como parametro
//sin parametros si los tuviera
hablar("Hola mundo", elPublicoDice);
*/

const letras = ["a","b","c"];
 
function longitudDeLetra(letra){
return letra.length;
 }

 const newArray = letras.map(longitudDeLetra); 

 console.log(newArray);

 //Objetos
//{Key :valor}

 const persona = {

    nombre : "Lorenzo",
    edad :"39",
    dni:"44275095",
 };

 /*
 const carro = {
    placa : "xxxxx",
    color : "rojo",
    kilometraje : 0,
    marca :"toyota",

 };

 console.log(carro.kilometraje);
 //Otra forma de acceder
 console.log(carro["color"]);

*/

 //Min 40
/*
 const carro ={};

 carro.kilometarje =10000;
 carro.placa="A123123";
*/

/*
const carro ={

kilometraje : 10000,
placa : "A123H23",
color:"rojo",
}

carro.kilometraje = 20000;

carro["numero de llantas"] = 3;

console.log(carro);
*/

/*S
const personaje ={

name :"kael",
age:1000,
history:"...",
power:10,
health:100,
defeated_enemies:"",

attack:() => {
personaje.health = personaje.health - personaje.power
},
};*/

//Pasar de Objeto a JSON
//console.log(JSON.stringify(personaje));

//Pasar de JSON a Objeto
const PersonajeJson =`{"name":"kael","age":1000,"history":"...","power":10,"health":100,"defeated_enemies":""}`;

const personaje = JSON.parse(PersonajeJson);
//console.log(PersonajeJson);
console.log(personaje.age);



//Desestructuracion
const personaje1 ={

name :"kael",
age:1000,
history:"...",
power:10,
health:100,
defeated_enemies:"",

//attack:() => {
//personaje.health = personaje.health - personaje.power
//},
};
//Forma 1
//const {name, age} = personaje1;

//Forma 2
const {name: characaterName, age} = personaje1;

console.log(characaterName);

/*
const user = {
    name: "Nanz",
    role: "streamer",
    life: 99,
};

const fullUser = {
poweer:25,
life:50,
...user,
};

console.log(fullUser); */
//Cuando pongo ...user, (Arriba)
//{name: 'Nanz', role: 'streamer', life: 50, poweer: 25}

//Cuando pongo ...user, (Abajo)
//{poweer: 25, life: 99, name: 'Nanz', role: 'streamer'}


/*
const user ={
name:"Manz",
role:"Streamer",
life:99,
features:["learn","code","paint"]
}

//Hace referencia
const fullUser ={
...user,
power:25,
life:50
}
*/


/*
console.log(user.features); // ["learn","code","paint"]
console.log(fullUser.features)//["learn","code","paint"]

fullUser.features[0] ="program";

console.log(fullUser.features); //["program","code","paint"]
console.log(user.features); // ["program","code","paint"]
*/

//Hace copia
/*
const fullUser1 ={
...structuredClone(user),
power:25,
life:50
}

console.log(user.features); // ["learn","code","paint"]
console.log(fullUser1.features)//["learn","code","paint"]

fullUser1.features[0] ="program";

console.log(fullUser1.features); //["program","code","paint"]
console.log(user.features); // ["learn","code","paint"]
*/

//Min 2:10

const user ={
    name: "Nanz",
    role: "streamer",
    attributes:{
        height:183,
        fawColor: "blueviole",
        hairColor:"black",
    },

};

/*const {name,role,attributes} = user;

console.log(attributes);

console.log(user.attributes.height);*/

//Desestructuracion
const  {name , ...otrosValores} = user;

console.log(otrosValores);


function userData(param){
    
    const {name, role} = param

    console.log(`${name} + ${role}`);
}

userData(user);


const user1 = {

name:"Manz",
life: 99,
power:10,
talk: function(){
    return "hola";
},
};
/*
const keys = Object.keys(user1);
console.log(keys); //['name', 'life', 'power', 'talk']

const values = Object.values(user1);
console.log(values); //['Manz', 99, 10, ƒ]

const entries = Object.entries(user1);
console.log(entries); //[Array(2), Array(2), Array(2), Array(2)]
*/



const keys = ["name", "life", "power","age", "talk"];
const values = ["Manz", 99, 10, 20,function() { return "Hola" }];

const entries = [];
for (let i of Object.keys(keys)) {
  
  //console.log(i); 
  const key = keys[i];
  const value = values[i];
  entries.push([key, value]);
}

const user2 = Object.fromEntries(entries);

console.log(user2);
//los objetos son una agrupacion de datps que hace sentido tenerlos juntos

/**
 * 
 */

let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 10;

let personaje = {
    nombre: "Tanjiro",
    anime: "Demon Slayer",
    edad: 10,
}; //creacion de un objeto

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"]);

delete personaje.edad;
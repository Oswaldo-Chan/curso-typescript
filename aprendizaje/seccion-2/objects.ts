// Tipos Objects

let persona: {
    nombre: string,
    edad: number,
    direccion: {
        calle: string,
        codigo_postal: number
    }
} = {
    nombre: "Oswaldo",
    edad: 22,
    direccion: {
        calle: "Principal",
        codigo_postal: 97350
    }
};  

console.log(persona.nombre);
console.log(persona.direccion.calle);
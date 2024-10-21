// Arreglos

// Inferencia
let cursos = ['Flutter', 'Patrones de diseño', 'SQL'];

// Anotación
let hobbies: string[] = [];
let array: any[] = ['Leer', 35, true, 'dormir', 10, false]; // no recomendable, mejor usar tuplas

console.log(typeof cursos);
console.log(typeof hobbies);
console.log(typeof array);

cursos.pop();

// Iterar en un arreglo
for (const curso of cursos) {
    console.log(curso.toLocaleUpperCase());
}
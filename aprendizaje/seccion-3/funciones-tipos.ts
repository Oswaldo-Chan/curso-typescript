// Funciones como tipos

const multiplicar = (a: number, b: number): number => {
    return a * b;
};

let multiplicar2: (a: number, b: number) => number;
multiplicar2 = multiplicar;

console.log(multiplicar2(2,2));
// Funciones callbacks

function calcular(
    a: number, 
    b: number, 
    mostrar: (value: number) => void
): void {
    let resultado = a + b;

    mostrar(resultado);
}

calcular(2, 4, (x) => {
    console.log(x);
});
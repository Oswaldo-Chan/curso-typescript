// Union

type StringOrNumber = string | number;

function padLeft(value: string, padding: StringOrNumber) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }

    if (typeof padding === 'string') {
        return padding + value;
    }

    throw new Error(`Espera unstring pero se recibió ${padding}`);    
}

console.log(padLeft('Hola Mundo', 20));
// Never

const throwError = (message : string) : never => {
    throw new Error(message);
};

// Con never no vamos a retornar nada, con void podemos retornar undefined o null
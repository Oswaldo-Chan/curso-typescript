// Tuplas

// Tipo de dato personalizado
type VehiculoType = [string, number, string];

// Tuplas con el tipo de dato personalizado
let auto: VehiculoType = ['mazda', 2024, 'rojo'];
let moto: VehiculoType = ['mazda', 2024, 'rojo'];

auto[0] = 'toyota';

console.log(auto);
console.log(moto);
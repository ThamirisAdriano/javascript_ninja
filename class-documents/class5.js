// Retorno de funções com arrays e objetos

var arr = [1,2,3];
var arry2 = [5,6,7];

var obj = {
    nome: 'Elza',
    poder: 'gelo'
}

function myFunction(abobrinha) {
    return abobrinha;
}

console.log(myFunction(arry2));
console.log(myFunction(['thamiris', 35, 162]));
console.log(myFunction(obj).nome);
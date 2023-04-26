//Operador vírgula
var a, b =2, c;
//js interpreta que estou declarando 3 variáveis
//a vírgula junta várias expressões em uma única expressão

function myFunc(){
    var x = 0;
    return (x += 1, x) // return ++x
}
console.log(myFunc())

let segunda = 'superiores'
let terca = 'inferiores'
let quarta = 'superiores'
let sexta = 'inferiores'
//operador ternário ? => if , 'Mesmo treino' => return se verdadeiro 'treino diferente' => return se falso
let dia = segunda == quarta ? 'Mesmo treino' : 'Treino diferente';
console.log(dia)

//estrutura condicional switch
//qual dia da semana tem o treino igual ao do par (segunda)?
function diaSemana(segunda) {
    switch(segunda) {
        case terca:
            console.log('Terça')
            break;
        case quarta:
            console.log('Quarta')
            break;
        case sexta:
            console.log('Sexta')
            break;
        default:
            console.log('default')
    }
}

console.log(diaSemana(terca))

var counter = 0;

while(counter < 10){
    console.log(counter);
    counter++;
}

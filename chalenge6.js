const championship = 'Brasilerião Série C'
console.log(championship)

const teams = ['Figueirense', 'Ponte Preta','Corinthians', 'São Paulo', 'Palmeiras']
console.log('Times que estão participando do campeonato', teams)

function showTeamPosition(position){
    if(position < 1 || position > 5){
        return 'Não temos a informação do time que está nessa posição!'
    }
    return 'O time que está em ' + position +'lugar é o ' + teams[position - 1] + '.';
}

console.log(showTeamPosition(1))
console.log(showTeamPosition(2))
console.log(showTeamPosition(3))
console.log(showTeamPosition(4))
console.log(showTeamPosition(8))


let counter = 20;
while(counter <=30 ){
    console.log(counter++);
}

let listColor = ['white', 'blue', 'pink', 'orange','purple'];
let listHex = ['#FFFFFF', '#0000FF', '#FFC0CB', '#FFA500', '#800080']
let hex = 'white'
function converToHex(hex){
    switch(hex){
        case 'white':
            console.log(listHex[0])
            break;
        case 'blue':
            console.log(listHex[1])
            break;
         case 'pink':
            console.log(listHex[2])
            break;
        case 'orange':
            console.log(listHex[3])
            break;
        case 'purple':
            console.log(listHex[4])
            break;
        default:
            console.log('Não temos a cor ' + hex)
       
    }
}
console.log(converToHex('rosa'))







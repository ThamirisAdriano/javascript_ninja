var isTruthy = function(param) {
  //   if(param){
  //     return true
  //   } else{
  //     return false
  //   }
      return param ? true : false;
  };
  
  //invocando a função criada acima passando vários tipos de valores falsy;
  
  console.log(isTruthy(false))
  console.log(isTruthy(null))
  console.log(isTruthy(undefined))
  console.log(isTruthy(0))
  console.log(isTruthy(''))
  
  //invocando a função criada acima passando vários tipos de valores truthy;
  console.log(isTruthy([]))
  console.log(isTruthy(1))
  console.log(isTruthy('JavaScript'))
  console.log(isTruthy({}))
  
  //desafio 2
  
  var carro = {
      marca: 'Chevrolet',
      modelo: 'Onix',
      placa: 'FZY 1060',
      ano: 2016,
      cor: 'vermelho', 
      quantasPortas: 2,
      assentos: 5,
      quantidadePessoas: 0
  }
  console.log(carro)
  
  carro.mudarCor = function(cor){
      carro.cor = cor;
  }
  
  carro.obterCor = function(){
     return carro.cor ;
  }
  
  carro.obterModelo = function(){
      return carro.modelo;
  }
  
  carro.obterMarca = function(){
      return carro.marca;
  }
  
  carro.obterMarcaModelo = function(){
      return `Esse carro é um ${carro.obterMarca()} modelo ${carro.obterMarcaModelo()}`
  }
  
  
  carro.passageiros = function(){
      return quantidadePessoas;
  
  }
  
  // carro.passageiros = function(){
  //      quantidadePessoas =+ 1
  //      return this.quantidadePessoas
  // }
  
  // console.log(passageiros)
  
  console.log(carro.obterCor())
  carro.mudarCor('Azul')
  console.log(carro.obterCor())

  console.log(carro.quantidadePessoas)

  carro.addPessoas = function(numeroPessoas){
    var totalPessoas = carro.quantidadePessoas + numeroPessoas;
    if(carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos){
      return 'O carro já está lotado'
    }

    if(totalPessoas > carro.assentos){
      var pessoasCabem = carro.assentos - carro.quantidadePessoas;
      if(pessoasCabem === 1){
        return `Só cabe mais ${pessoasCabem} pessoa no carro.`
      }
      return `Só cabem mais ${pessoasCabem} pessoas no carro.`
  }

  carro.quantidadePessoas += numeroPessoas;
    return `Temos ${carro.quantidadePessoas} pessoas no carro!`; //aqui já estamos atribuindo os valores ao objeto carro

}

console.log(carro.addPessoas(2))
console.log(carro.addPessoas(-4))
console.log(carro.addPessoas(3))
console.log(carro.addPessoas(3))
console.log(carro.addPessoas(1))
console.log(carro.addPessoas(1))



  
 

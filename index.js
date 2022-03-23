class Jogadordefutebol{
  constructor(nome, posicao, datanascimento, anonascimento, nacionalidade, altura, peso){
    this.nome = nome;
    this.posicao = posicao;
    this.data = datanascimento;
    this.ano = anonascimento;
    this.nacionalidade = nacionalidade;
    this.altura = altura;
    this.peso = peso;
  }

  mostrarAtributos(){
    console.log(this.nome);
    console.log(this.posicao);
    console.log(this.data);
    console.log(this.ano);
    console.log(this.nacionalidade); 
    console.log(this.altura);
    console.log(this.peso);
  }

calcularIdade(){
  return 2022 - this.ano;
}

idade(){
  return this.calcularIdade();
}

calcularAposentadoria(){
if(this.posicao == "ataque"){
return 35 - jogador.idade();
}
  
else if(this.posicao == "meio_campo"){
return 38 - jogador.idade();
}
   
else if(this.posicao == "defesa"){
return 40 - jogador.idade();
}
} 

aposentadoria(){
  return this.calcularAposentadoria();
  }
}

let jogador = new Jogadordefutebol('Mendes', 'defesa', '13.03', '1986', 'brasileira', '1.90', '60');

jogador.mostrarAtributos();
console.log(jogador.idade());
console.log(jogador.aposentadoria());
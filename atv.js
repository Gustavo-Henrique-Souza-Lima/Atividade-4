// // Atividade 1
// class Carro {
//     constructor(Marca, Modelo, Ano){
//         this.Marca = Marca;
//         this.Modelo = Modelo; 
//         this.Ano = Ano;
//         this.motorLigado = false;
//     }

//     ligar_motor() {
//         this.motorLigado = true;
//     }

//     desligar_motor() {
//         this.motorLigado = false;
//     }

//     status_motor() {
//         if (this.motorLigado) {
//             return "O motor está ligado: " + ${this.Marca} ${this.Modelo} ${this.Ano};
//         } else {
//             return "O motor está desligado";
//         }
//     } 
// }

// const meuCarro = new Carro("Audi", "Q3", "2024");

// // Verificar o status do motor
// console.log(meuCarro.status_motor()); 

// // Ligar o motor e verificar o status novamente
// meuCarro.ligar_motor();
// console.log(meuCarro.status_motor()); 

// // Desligar o motor e verificar o status novamente
// meuCarro.desligar_motor();
// console.log(meuCarro.status_motor());


// Atividade 2
// class Pessoa{
//     constructor(nome, idade, profissao, salario){
//         this.nome = nome;
//         this.idade = idade;
//         this.profissao = profissao;
//         this.salario = salario;
//     }
//     exibirTrabalho(nomeempresa, tempodetrabalho ){
//         console.log("nome da empresa: ", nomeempresa , "\nTempo de trabalho: ", tempodetrabalho)
//     }
// }
// const meuTrabalho = new Pessoa("Gustavo", "19", "Eng.Software", "50.000")
// meuTrabalho.exibirTrabalho("Nike", "2 Anos")

//Ex.3

/*
class Automovel {
 
    constructor(cor,modelo,tpcombusti,quanRodas,vidro,ligado) {
 
        this.cor = cor
 
        this.modelo = modelo
 
        this.tpcombusti = tpcombusti
 
        this.quanRodas = quanRodas
 
        this.vidro = false
 
        this.ligado = false
 
    }
 
 
 
    ligar(){
 
    this.ligado = true
 
    console.log("O automovel está ligado")
 
    }
 
    desligar(){
 
    this.ligado = false
 
    console.log("O automovel está Desligado")
 
    }
 
    abrirVidro(){
 
    this.vidro = true
 
    console.log("O vidro está aberto")
 
    }
 
    fecharVidro(){
 
    this.vidro = false
 
    console.log("O vidro está fechado")
 
    }
 
 
 
}
 
class Carro extends Automovel{
 
    constructor(cor,modelo,tpcombusti,quanRodas,vidro,ligado) {
 
        super(cor,modelo,tpcombusti,quanRodas,vidro,ligado)
 
       
 
    }
 
}
 
class Moto extends Automovel{
 
    constructor(cor,modelo,tpcombusti,quanRodas,vidro,ligado) {
 
        super(cor,modelo,tpcombusti,quanRodas,vidro,ligado)
 
       
 
    }
 
}
 
class Caminhao extends Automovel{
 
    constructor(cor,modelo,tpcombusti,quanRodas,vidro,ligado) {
 
        super(cor,modelo,tpcombusti,quanRodas,vidro,ligado)
 
       
 
    }
 
}
 
const carro = new Carro("Preto","Audi","etanol","4")
 
const moto = new Moto("Roxo","Honda","etanol","2")
 
const caminhao = new Caminhao("Vermelho","Ford","Diesel","6")
 
 
 
 
 
carro.ligar()
 
carro.desligar()
 
carro.abrirVidro()
 
carro.fecharVidro()
 
 
 
moto.ligar()
 
moto.desligar()
 
moto.abrirVidro()
 
moto.fecharVidro()
 
 
 
caminhao.ligar()
 
caminhao.desligar()
 
caminhao.abrirVidro()
 
caminhao.fecharVidro()
 
*/
 
//Ex.4
/*
 
class Cliente {
  constructor(nome, profissao, saldo) {
    this.nome = nome;
    this.profissao = profissao;
    this.saldo = saldo;
  }
 
  pix(valor) {
    if (valor <= 0) {
      console.log('Valor do PIX deve ser positivo.');
      return;
    }
    if (this.saldo < valor) {
      console.log('Saldo insuficiente para realizar o PIX.');
      return;
    }
    this.saldo -= valor;
    console.log(`PIX de R$${valor} realizado com sucesso.`);
  }
 
  emprestimo(valor) {
    if (valor <= 0) {
      console.log('Valor do empréstimo deve ser positivo.');
      return;
    }
    this.saldo += valor;
    console.log(`Empréstimo de R$${valor} recebido com sucesso.`);
  }
 
  saque(valor) {
    if (valor <= 0) {
      console.log('Valor do saque deve ser positivo.');
      return;
    }
    if (this.saldo < valor) {
      console.log('Saldo insuficiente para realizar o saque.');
      return;
    }
    this.saldo -= valor;
    console.log(`Saque de R$${valor} realizado com sucesso.`);
  }
 
  extrato() {
    console.log(`Extrato: Nome: ${this.nome}, Profissão: ${this.profissao}, Saldo: R$${this.saldo}`);
  }
}
 
const cliente = new Cliente("Eduardo","AndersonSilva",1200)
cliente.pix(200)
cliente.emprestimo(100)
cliente.extrato()
*/


  //Ex.5
/*
  class Maquina {
 
    constructor(nome_maquina,quantiEixos,rotMinuto,consumoEnerg) {
 
        this.nome_maquina = nome_maquina
 
        this.quantiEixos = quantiEixos
 
        this.rotMinuto = rotMinuto
 
        this.consumoEnerg = consumoEnerg
 
        this.ligado = false
 
 
 
    }
 
    ligar(){
      ligado = true
        console.log(`A máquina está ligada. ${this.ligado}`)
 
 
    }
 
    desliga(){
      this.ligado = false
      console.log(`A máquina está Desligada. ${this.ligado}`)
 
    }
 
    ajustarVel(rotacao){
 
  if(rotacao>=100 && rotacao<=900){
 
    console.log("A rotação foi ajustada")
  this.rotMinuto = rotacao
  }else{
    console.log("Excedeu o limite minimo ou máximo. (Minimo: 100 & Máximo:900)")
    }
   
    }
 
    mostrar(){
      console.log(`${this.nome_maquina}, ${this.rotMinuto}, ${this.quantiEixos}, ${this.consumoEnerg}, ${this.ligado}`)
    }
 
}
 
class Furadeira extends Maquina{
  constructor(nome_maquina,rotMinuto,consumoEnerg) {
    super(nome_maquina,null,rotMinuto,consumoEnerg)
  }
  mostrarF(){
    console.log(`${this.nome_maquina}, ${this.rotMinuto}, ${this.consumoEnerg}`)
  }
}
 
const furadeira = new Furadeira("Furadeira",100,20)
furadeira.ajustarVel(200)
furadeira.mostrarF()
*/
//Ex. 6
/*
 
class Produto {
    constructor(nomeProd, quantidade, precoProd, tipoComunicao, consumoEnerg,temperatura) {
    this.nomeProd = nomeProd;
    this.quantidade = quantidade;
    this.precoProd = precoProd;
    this.tipoComunicao = tipoComunicao;
    this.consumoEnerg = consumoEnerg;
    this.temperatura = temperatura
    this.liga = false
    }
   
  }
  class Fritadeira extends Produto{
    constructor(nomeProd, quantidade, precoProd, tipoComunicao, consumoEnerg,temperatura){
      super(nomeProd, quantidade, precoProd, tipoComunicao, consumoEnerg,temperatura)
    }
    ligar(){
      this.liga = true
      console.log("A Fritadeira foi ligada")
    }
    desligar(){
      this.liga = false
      console.log("A Fritadeira foi Desligada")
    }
    ajustarTemperatura(setPoint){
      this.temperatura = setPoint
      if(setPoint>=0&&setPoint<=1000){
        console.log(`A temperatura foi ajustada para ${this.temperatura}ºC.`)
      }else{
        console.log("A temperatura ultrapassou o setpoint")
      }
    }
  }
  class Televisao extends Produto{
    constructor(nomeProd, quantidade, precoProd, tipoComunicao, consumoEnerg,temperatura){
      super(nomeProd, quantidade, precoProd, tipoComunicao, consumoEnerg,temperatura)
    }
    ligar(){
      this.liga = true
      console.log("A Televisão foi ligada")
    }
    desligar(){
      this.liga = false
      console.log("A Telivisão foi Desligada")
    }
    ajustarTemperatura(setPoint){
      this.temperatura = setPoint
      if(setPoint>=0&&setPoint<=1000){
        console.log(`A temperatura foi ajustada para ${this.temperatura}ºC.`)
      }else{
        console.log("A temperatura ultrapassou o setpoint")
      }
    }
  }
  class ArCondicionado extends Produto{
    constructor(nomeProd, quantidade, precoProd, tipoComunicao, consumoEnerg,temperatura){
      super(nomeProd, quantidade, precoProd, tipoComunicao, consumoEnerg,temperatura)
    }
    ligar(){
      this.liga = true
      console.log("O Ar Condicionado foi ligada")
    }
    desligar(){
      this.liga = false
      console.log("O Ar Condicionado foi Desligada")
    }
    ajustarTemperatura(setPoint){
      this.temperatura = setPoint
      if(setPoint>=0&&setPoint<=1000){
        console.log(`A temperatura foi ajustada para ${this.temperatura}ºC.`)
      }else{
        console.log("A temperatura ultrapassou o setpoint")
      }
    }
  }
   */
  //Ex.7
  /*
  class Livros {
    constructor(nomeLivro, quantidade, precoLivro,nomeAutor, edicao) {
      this.nomeLivro = nomeLivro;
      this.quantidade = quantidade;
      this.precoLivro = precoLivro;
      this.nomeAutor = nomeAutor;
      this.edicao = edicao;
    }
    mostra(){
        console.log(`${this.nomeLivro}, ${this.quantidade}, ${this.precoLivro}, ${this.nomeAutor}, ${this.edicao}`)
    }
 
    emprestar(empresta){
        this.quantidade -= empresta
console.log(`Foi emprestado com sucesso. Total disponivel: ${this.quantidade}`)
    }
devolver(devolve){
    this.quantidade += devolve
    console.log(`O livro foi devolvido. Total disponivel: ${this.quantidade}`)
 
}
}
const livro = new Livros("Gustavo",3,13.40,"Gislene","Robin rood")
livro.mostra()
livro.emprestar(1)
livro.devolver(1)
/*
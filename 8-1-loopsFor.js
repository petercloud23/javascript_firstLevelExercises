console.log(`\nTrabalhando com condicionais`);//Este programa vai funcionar igual ao anterior, mas com laço FOR no lugar do WHILE

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
const idadeComprador = 17; //O valor dessa variável que influencia no primeiro if abaixo
const estaAcompanhado = false; //variável booleana (true ou false), influência no segundo if, encadeado ao primeiro
let passagemComprada = false; //agora essa variável é declarada como Let, e inicia como "false", porque será alterada somente na segunda parte do programa
const destino = `Salvador`; //agora, teremos uma variável simulando o destino escolhido pelo comprador
const podeComprar = idadeComprador >= 18 || estaAcompanhado == true; //Aqui vamos guardar o resultado da operação lógica (true ou false) dentro de uma variável
let contador = 0; //essa variável será utilizada para servir de base de contagem para o laço de repetição While, tendo como parâmetro a quantidade de elementos na Array "listaDeDestinos"
let destinoExiste = false;

console.log(`\nDestinos requisitado:`);
console.log(destino);

for(let i=0 ;i<3 ;i++){ //O laço for é dividido em 3 partes:(inicialização da variável auxiliar do for; condicional para finalizar o for; incremento ou decremento da variável)
    if(listaDeDestinos[i] == destino){ //Verifica item por item da Array "listaDeDestinos" e compara com o conteúdo da variável "destino"
    destinoExiste = true;
    break; //interrompe o laço for caso a condição IF for atendida (Obs: A comparação acima em IF é Case Sensitive, inclusive para acentos)
    }
}

console.log(`\nDestino existe na agência:\n`,destinoExiste);

if(podeComprar && destinoExiste){
    console.log("\nBoa Viagem!")
}else{
    console.log("Desculpe não foi possível completar o seu pedido")//mensagem caso o destino não existir ou se o comprador for menor desacompanhado
}



//Break point: o ponto que podemos clicar e ativar ao lado de cada linha é um breakpoint que ativamos quando queremos que o código execute somente até certo ponto
//Isso serve para isolarmos trechos do código em procura de problemas, o debug, que precisa ser acionado na Menu Lateral do VS Code
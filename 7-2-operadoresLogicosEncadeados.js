console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
const idadeComprador = 17; //O valor dessa variável que influencia no primeiro if abaixo
const estaAcompanhado = true; //variável booleana (true ou false), influência no segundo if, encadeado ao primeiro
const passagemComprada = true; //variável será utilizada na última condicional, em que simulamos verificação antes de embarque para viagem

console.log(`Destinos possíveis: ${listaDeDestinos}`);

//Vamos otimizar o código abaixo, num encadeamento de operadores que não precise mais repetir "listaDeDestinos.splice(2,1);"
//Imagine que, neste exemplo estamos simulando a compra do terceiro item da lista (RJ), e se precisarmos mudar o destino, precisaríamos altera o splice onde quer que ele apareça
/*if (idadeComprador >= 18) {
    console.log(`Comprador maior de idade`);
    listaDeDestinos.splice(2, 1);
} else if (estaAcompanhado == true) {
    console.log(`Comprador é menor de idade, mas está acompanhado`);
    listaDeDestinos.splice(2, 1);
} else {
    console.log(`Comprador não é maior de idade e não está acompanhado, não é permitida a venda de pacotes de viagem`)
}*/

if (idadeComprador >= 18 || estaAcompanhado == true) { //Caracteres "||" = operação booleana "OU"
    console.log(`Comprador maior de idade ou está acompanhado de responsável`);
    listaDeDestinos.splice(2, 1);
} else {
    console.log(`Comprador não é maior de idade e não está acompanhado, não é permitida a venda de pacotes de viagem`)
}

//Abaixo será exibida a lista, com ou sem alterações, dependendo do fluxo do if acima
console.log(`Destinos possíveis: ${listaDeDestinos}`);//Aqui simulamos que o destino que foi removido é o que foi comprado, só são exibidos os ainda disponíveis para venda

console.log("Embarque: \n\n"); // "\n" -> pula linha
if (idadeComprador >= 18 && passagemComprada) { // Caracteres "&&" -> operador lógico "E"
    console.log("Boa viagem");
} else {
    console.log("Infelizmente você não pode embarcar");
}

//OBS: Agora é importante manter a identação correta (Hierarquia do código), que identifica visualmente o encadeamento de IFs (usar ALT+SHIFT+F)
//OBS2: Cuidado com os pares de chaves{}, cada if, else e else if precisa ter uma chave de abertura e uma de encerramento
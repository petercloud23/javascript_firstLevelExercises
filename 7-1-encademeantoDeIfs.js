console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
const idadeComprador = 16; //O valor dessa variável que influencia no primeiro if abaixo
const estaAcompanhado = true; //variável booleana (true ou false), influência no segundo if, encadeado ao primeiro
console.log(`Destinos possíveis: ${listaDeDestinos}`);

//Aqui vamos simular que somente clientes maiores de 18 anos podem comprar um pacote:
if (idadeComprador >= 18) { //Se for comparar se é "igual", devemos utilizar dois sinais -> ==
    console.log(`Comprador maior de idade`);
    //Remover item(s) da lista:
    listaDeDestinos.splice(2, 1); //Aqui o primeiro número do argumento (2) define a posição do item que quero retirar e o segundo (1) quantos quero deletar
    //OBS: Lembrar que o primeiro item da lista é o de posição "0"
} else if (estaAcompanhado == true) { //aqui poderíamos escrever somente "if(estaAcompanhado)", que o interpretador verificaria se é verdadeiro, senão é falso
    console.log(`Comprador é menor de idade, mas está acompanhado`);
    listaDeDestinos.splice(2, 1); //Aqui o primeiro número do argumento (2) define a posição do item que quero retirar e o segundo (1) quantos quero deletar
} else {
    console.log(`Comprador não é maior de idade e não está acompanhado, não é permitida a venda de pacotes de viagem`)
}

//Abaixo será exibida a lista, com ou sem alterações, dependendo do fluxo do if acima
console.log(`Destinos possíveis: ${listaDeDestinos}`);//Aqui simulamos que o destino que foi removido é o que foi comprado, só são exibidos os ainda disponíveis para venda

//OBS: Agora é importante manter a identação correta (Hierarquia do código), que identifica visualmente o encadeamento de IFs (usar ALT+SHIFT+F)
//OBS2: Cuidado com os pares de chaves{}, cada if, else e else if precisa ter uma chave de abertura e uma de encerramento
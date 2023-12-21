console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
const idadeComprador = 17; //O valor dessa variável que influencia na condicional abaixo
console.log(`Destinos possíveis: ${listaDeDestinos}`);

//Aqui vamos simular que somente clientes maiores de 18 anos podem comprar um pacote:
if (idadeComprador >= 18) { //Se for comparar se é "igual", devemos utilizar dois sinais -> ==
    console.log(`Comprador maior de idade`);
    //Remover item(s) da lista:
    listaDeDestinos.splice(2, 1); //Aqui o primeiro número do argumento (2) define a posição do item que quero retirar e o segundo (1) quantos quero deletar
    console.log(`Destinos possíveis: ${listaDeDestinos}`); //Aqui simulamos que o destino que foi removido é o que foi comprado, só são exibidos os ainda disponíveis para venda
    //OBS: Lembrar que o primeiro item da lista é o de posição "0"
} else {
    console.log(`Comprador não é maior de idade, não é permitida a venda de pacotes de viagem`)
}

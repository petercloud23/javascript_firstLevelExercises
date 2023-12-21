console.log(`Trabalhando com listas, exemplo de uma agência de viagens`);

//Primeiro modo:
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;
console.log(`Destinos possíveis: ${salvador} ${saoPaulo} ${rioDeJaneiro}`); //Percebe que se aumentar muito os destinos, esse modo de trabalhar se torna trabalhoso?

//Segundo modo, utilizando variável do tipo array (lista):
const listaDeDestinos = new Array(`Salvador`,`São Paulo`,`Rio de Janeiro`);
console.log(`Destinos possíveis: ${listaDeDestinos}`);

//Para inserir mais itens na lista, na parte final:
listaDeDestinos.push(`Curitiba`);
console.log(`Destinos possíveis: ${listaDeDestinos}`);

//Remover item(s) da lista:
listaDeDestinos.splice(2,1); //Aqui o primeiro número do argumento (2) define a posição do item que quero retirar e o segundo (1) quantos quero deletar
console.log(`Destinos possíveis: ${listaDeDestinos}`); //Aqui simulamos que o destino que foi removido já foi vendido, só são exibidos os ainda disponíveis para venda
//OBS: Lembrar que o primeiro item da lista é o de posição "0"

//Exibir um item de uma posição específica do Array:
console.log(`Destinos possíveis: ${listaDeDestinos[1]}`);//irá retornar o segundo item da lista
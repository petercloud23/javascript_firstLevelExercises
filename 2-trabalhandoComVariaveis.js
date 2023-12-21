console.log("Trabalhando com variáveis"); 
idade = 29; //JS é case sensitive
Idade = 30; //JS é case sensitive
console.log(idade) // o uso de ; não é obrigatório em JS
console.log(Idade) // o uso de ; não é obrigatório em JS
/*const nome = "";
const nome = "Maria"; //não é possível atribuir novo valor a variável de escopo de bloco "const"
console.log(nome);
Este trecho daria erro */
apelido = ""; //após declarar uma variável, mesmo global como aqui, precisamos inicializar com o valor que remeta ao seu tipo (aqui "" -> tipo texto)
apelido = "José";
console.log(apelido);
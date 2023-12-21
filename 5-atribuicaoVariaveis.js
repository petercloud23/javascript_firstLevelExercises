console.log("Trabalhando com atribuição de variáveis");

const idade = 29; //JS é case sensitive
const primeiroNome = "Maria";
const sobrenome = "José";
console.log(primeiroNome,sobrenome,idade,"anos");//vírgula pode ser utilizada para separar os elementos na concatenação adicionando espaço
console.log(primeiroNome+" "+sobrenome+" "+idade+" "+"anos");//Ou podemos acrescentar espaço ->" "

//Outra forma de declarar um texto:
const primeiroNome2 = `João`; //mesmo efeito se no lugar de "" usamos crase
const sobrenome2 = `Pedro`;
console.log(`Meu nome é:`,primeiroNome2,sobrenome2);
console.log(`Meu nome é: ${primeiroNome2} ${sobrenome2}`); //mesmo efeito da linha de cima, mas ao invés de concatenação utilizamos a interpolação de variáveis

//podemos ainda sobrescrever uma varíavel, concatenando nela mesma antes de exibir:
let nome3 = "Bill"; //usamos let aqui no lugar de const, pois agora essas serão variáveis que poderão ser alteradas no decorrer do programa ("const" são de valores constantes)
let sobrenome3 ="Gates";
nome3 = nome3+" "+ sobrenome3; //para sobrescrever não devo chamar a variável utilizando "let" novamente
console.log(`Meu nome é: ${nome3}`); //Perceba que para usar Interpolação -> ${}, só é possível se usamor Crases para definir o texto, e não aspas

//OBS: a boa prática do gerenciamento de estados é sempre usar uma constante quando uma variável não for necessária.

const contador = 0; //ao declarar uma constante, obrigatoriamente precisamos atribuir valor na mesma linha
let contador1;
contador1 = contador + 1; //já uma variável pode ser declarada numa linha e atribuído seu valor em outro ponto do programa
console.log(contador1);
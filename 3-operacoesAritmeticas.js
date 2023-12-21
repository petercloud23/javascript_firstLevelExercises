console.log("Operações Aritméticas");

console.log(10+8*2); //precedência matemática -> multiplicação, depois adição
console.log((10+8)*2); //precedência matemática -> parênteses, depois multiplicação

console.log ("ano " + 2023) //concatenação texto (com um espaço no fim) + número
const testeTexto = "ano "; //colocamos um espaço no fim da palavra ano para separar do número
const testeNumero = 2023;
console.log (testeTexto + testeNumero) //concatenação variável tipo texto + variável numérica

console.log (2 + 2) //concatenação variável numérica + variável numérica
console.log ("2" + "2") //concatenação variável tipo texto + variável tipo texto (devido às aspas)

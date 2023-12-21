console.log("Conversão de tipos de variáveis")
/*O JavaScript é fracamente tipado, você consegue converter os tipos de variáveis de modo "Explícito" ou "Implícito"*/

//Conversão Explicita (para uso de + como soma, ou + como concatenação):
console.log ("2" + "2") //concatenação variável tipo texto + variável tipo texto (devido às aspas)
console.log (parseInt("2") + parseInt("2")) //transformação das variáveis tipo texto para numéricas inteiras, através do "parseInt"
//o uso do parse faria mais sentido para converter variáveis com valores atribuídos anteriormente no programa, ex:
const numero1 = "2";
const numero2 = "2";
const resultado = numero1+numero2;
const resultado2 = parseInt(numero1)+parseInt(numero2);
console.log(resultado); //sem conversão, variáveis em tipo texto
console.log(parseInt(resultado2)); //variáveis convertidas em numéricas inteiras
console.log(parseFloat(resultado2)/10); //convertendo explicitamente tipo numérico inteiro para decimal
console.log(resultado2/10); //mas, no caso das operações diferentes de "+", o interpretador converte implicitamente tipo numérico inteiro para decimal, e de texto para numérico tb


//Conversão Implícita (próprio interpretador tenta converter o tipo da variável para as operações que não contenham o sinal de +):
console.log("10"/"2");//aqui o próprio interpretador irá analisar e tentar realizar a operação de divisão
console.log("Teste"/"2");//aqui o próprio interpretador irá retornar o erro "NAN" -> Not a number

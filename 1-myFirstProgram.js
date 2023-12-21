//Nome do arquivo deve seguir o modelo camelCase
console.log("Meu primeiro programa: trabalhando com variáveis");
const idade = 26; //palavra reservada "const" serve para declarar vários tipos de variáveis (tipo numéricas, tipo texto, etc.)
console.log(idade);
console.log(idade+2);//Para copiar uma linha para baixo ou para cima -> Shift+alt+Seta(para baixo ou para cima)
console.log(idade-2);
console.log(idade/2);
console.log(idade*2);
/*Podemos testar os programas no Power Shell ou CMD do Windows, desde que o Node esteja instalado
Podemos testar tb no próprio terminal do VSCode, que geralmente roda o Power Shell*/
idadeSomada = idade +2; //Se não declarar a variável como "const", a variável sobe de escopo e será reservada como Global
console.log(idadeSomada);

//OBS:Para transformar um trecho de código em comentário, precisamos selecionar o trecho desejado e acionar CTRL+K+U

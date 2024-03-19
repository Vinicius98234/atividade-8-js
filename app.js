/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/
console.log("Questão 1")
let multiplicação = function(a, b) {
  if (a === undefined || b === undefined){
  }
  return a * b
}
const resultado1 = multiplicação(10 , 3)
console.log(resultado1)
/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/
console.log("Questão 2")
let divisão = function(a, b) {
  if (a === undefined || b === undefined){
  }
  return a / b
}
const resultado2 = divisão(9 , 3)
console.log(resultado2)
/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."
*/
console.log("Questão 3")
const exibirString = function(valor) {
  if (typeof valor !== 'undefined') {
      console.log(`Esta é a ${valor}ª vez que essa string é exibida.`);
  } else {
      console.log("O parâmetro não pode ser undefined.");
  }
}

for (let i = 1; i <= 7; i++) {
  exibirString(i);
}
/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

console.log("Questão 4")
const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']
const maiúsculas = function (array){
  array.map(word => word.toUpperCase())
};

const upperCaseArray = maiúsculas(millennialWords);
console.log(upperCaseArray);

/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

console.log("Questão 5")
const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]
const Positive = function (number) { number > 0};
let positiveCount = 0;
let negativeCount = 0;
randomNumbers.forEach(number => {
  Positive(number) ? positiveCount++ : negativeCount++;
});
console.log(`O array "randomNumbers" possui ${randomNumbers.length} números, sendo ${positiveCount} positivos e ${negativeCount} negativos.`);

/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/
console.log("Questão 6")
getOddNumbers=[83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42]
const getnumerosimpares = function (array) {array.filter(numero => numero % 2 !==0)};
const numerosimpares = getnumerosimpares(getOddNumbers)
console.log (numerosimpares);

/*
  07

  - Forme uma frase com o array abaixo e exiba-a no console.
*/

const functions = [
  function () { return 'Plymouth' },
  function () { return 'é' },
  function () { return 'uma' },
  function () { return 'cidade' },
  function () { return 'fantasma' },
  function () { return 'localizada' },
  function () { return 'na' },
  function () { return 'ilha' },
  function () { return 'de' },
  function () { return 'Montserrat,' },
  function () { return 'um' },
  function () { return 'território' },
  function () { return 'ultramarino' },
  function () { return 'do' },
  function () { return 'Reino' },
  function () { return 'Unido' },
  function () { return 'localizado' },
  function () { return 'na' },
  function () { return 'cadeia' },
  function () { return 'de' },
  function () { return 'Ilhas' },
  function () { return 'de' },
  function () { return 'Sotavento' },
  function () { return 'nas' },
  function () { return 'Pequenas' },
  function () { return 'Antilhas,' },
  function () { return 'Índias' },
  function () { return 'Ocidentais.' }
]
const frase = functions.map (function (func) {
   return func(); 
  }).join(' ');
console.log(frase)
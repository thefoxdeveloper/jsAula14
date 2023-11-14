// // 1. Crie uma função que recebe 3 notas de um aluno por parâmetro e
// // uma letra. Se a letra for A a função deve calcular a média aritmética,
// // se for P, a média ponderada (peso: 5, 3 e 2).

// function calcularMedia(notas, letra) {
//   let media = 0;

//   if (letra == "A") {
//     for (let nota of notas) {
//       media += nota;
//     }
//     console.log(media / notas.length);
//   } else if (letra == "P") {
//     media = (notas[0] * 5 + notas[1] * 3 + notas[2] * 2) / 10;
//     console.log(media);
//   }
// }
// calcularMedia([2, 5, 5], "P");
// calcularMedia([2, 5, 5], "A");

// // 2. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// // for ímpar ou falso se for par.
// function imparOuPar(numero) {
//   return numero % 2 === 1;
// }

// // 3. Crie uma função que recebe por parâmetro um valor inteiro e
// // positivo e retorne verdadeiro se o número for primo ou falso se não
// // for.
// function ePrimo(numero) {
//   if (numero <= 1) {
//     return false;
//   }

//   for (let i = 2; i * i <= numero; i++) {
//     if (numero % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }
// // 4. Crie uma função que recebe por parâmetro o tempo de duração de
// // uma fábrica expressa em segundos e retorna esse tempo em horas,
// // minutos e segundos.

// // Ex:
// // Entrada: 3672
// // Saída: 1:1:12
// function converterSegundos(segundos) {
//   const horas = Math.floor(segundos / 3600);
//   const minutos = Math.floor((segundos - horas * 3600) / 60);
//   const segundosRestantes = segundos - horas * 3600 - minutos * 60;

//   return `${horas}:${minutos}:${segundosRestantes}`;
// }
// // 5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// // é um valor perfeito ou falso se não for. Um valor é dito perfeito
// // quando ele é igual a soma dos seus divisores excetuando ele
// // próprio.

// // Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores
// function numPerfeito(n) {
//   let soma = 0;
//   for (let i = 1; i < n; i++) {
//     if (n % i === 0) {
//       soma += i;
//     }
//   }
//   if (soma == n) {
//     return true;
//   } else {
//     return false;
//   }
// }
// // 6. Crie uma função chamada acessoAoSite() que não tenha
// // parâmetro. Esta função será chamada ao abrir a página e mostrará
// // um alerta informando “Bem vindo ao site”.
// function acessoAoSite() {
//   alert("Bem vindo ao site");
// }
// acessoAoSite();

// // 7. Crie uma função chamada mostrarMensagem() que não tenha
// // parâmetro. Esta função será chamada ao abrir a página e mostrará
// // uma mensagem no console.log() informando “Acesso à aplicação
// // NomeAplicação” e um alerta informando “Bem vindo à aplicação
// // NomeApliação”. Sendo que o nome da aplicação deve ser salvo em
// // uma variável para mostrar nas mensagens.
// let aplicacao = "Growdev";
// function mostrarMensagem() {
//   console.log(`Acesso à aplicação ${aplicacao}`);
//   alert(`Acesso à aplicação ${aplicacao}`);
// }
// mostrarMensagem();
// // 8. Crie uma função chamada mostrarDobro(num), que recebe um
// // parâmetro sendo um número inteiro. Esta função será chamada ao
// // abrir a página e mostrará um alerta com o resultado. Exemplo: “O
// // dobro do número 5 é 10.”
// function mostrarDobro(num) {
//   alert(`O dobro do numero ${num} é ${num * 2}`);
// }
// mostrarDobro(2);
// // 9. Crie uma função chamada calcularMedia(nota1, nota2, nota3,
// // nome), que recebe 4 parâmetros sendo três inteiros e um texto
// // (String). Esta função será chamada ao abrir a página e mostrará um
// // alerta com a média. Exemplo: “João, sua média é 70.” A função
// // também deve mostrar no console.log() as notas recebidas. Exemplo
// // “Nota 1: 60,Nota 2: 70,Nota 3: 80”.
// function calcularMedia(nota1, nota2, nota3, nome) {
//   alert(`${nome}, sua media é ${nota1 + nota2 + nota3 / 3}`);
//   console.log(`Nota 1: ${nota1}, Nota 2:${nota2}, Nota 3:${nota3}`);
// }
// calcularMedia(1, 2, 3, "douglas");

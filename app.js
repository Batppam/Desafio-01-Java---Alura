alert('Boas vindas ao nosso site');
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensgemDeErro = 'Erro! Preencha todos os campos';

alert(mensgemDeErro);
nome = prompt('Nome usuário:');
idade = prompt('Sua idade:');

if (idade >= 18) {
    alert('Pode tirar a habilitação!');
}
else{
    alert('Menor de idade')
}

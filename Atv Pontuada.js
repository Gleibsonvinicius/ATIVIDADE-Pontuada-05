// Gleibson Vinicius & Nicolas Ricardo

const prompt = require('prompt-sync')();

let contas = [];

function ehNumeroPositivo(texto) {
  const numeros = "0123456789";
  if (texto.length === 0) return false;
  for (let i = 0; i < texto.length; i++) {
    if (numeros.indexOf(texto[i]) === -1) return false;
  }
  return true;
}

function criarConta() {
  const nome = prompt("Digite o nome do titular da conta: ");
  const saldoInicial = prompt("Digite o saldo inicial : ");
  if (!ehNumeroPositivo(saldoInicial)) {
    console.log("Saldo inválido. Deve ser um número inteiro positivo.");
    return;
  }
  const conta = {
    id: contas.length + 1,
    titular: nome,
    saldo: parseInt(saldoInicial)
  };
  contas.push(conta);
  console.log("Conta criada com sucesso!");
}

function listarContas() {
  if (contas.length === 0) {
    console.log("Nenhuma conta cadastrada.");
    return;
  }
  console.log("===== Contas Cadastradas =====");
  for (let i = 0; i < contas.length; i++) {
    const c = contas[i];
    console.log(`${i + 1} - ID: ${c.id}, Titular: ${c.titular}, Saldo: R$${c.saldo}`);
  }
}

function atualizarConta() {
  listarContas();
  if (contas.length === 0) return;

  const numero = prompt("Digite o número da conta que deseja atualizar: ");
  if (!ehNumeroPositivo(numero)) {
    console.log("Número inválido.");
    return;
  }

  const idx = parseInt(numero) - 1;
  if (idx < 0 || idx >= contas.length) {
    console.log("Número de conta inválido.");
    return;
  }

  const novoNome = prompt("Digite o novo nome do titular: ");
  const novoSaldo = prompt("Digite o novo saldo : ");
  if (!ehNumeroPositivo(novoSaldo)) {
    console.log("Saldo inválido.");
    return;
  }

  contas[idx].titular = novoNome;
  contas[idx].saldo = parseInt(novoSaldo);
  console.log("Conta atualizada com sucesso!");
}

function removerConta() {
  listarContas();
  if (contas.length === 0) return;

  const numero = prompt("Digite o número da conta que deseja remover: ");
  if (!ehNumeroPositivo(numero)) {
    console.log("Número inválido.");
    return;
  }

  const idx = parseInt(numero) - 1;
  if (idx < 0 || idx >= contas.length) {
    console.log("Número de conta inválido.");
    return;
  }

  contas.splice(idx, 1);
  console.log("Conta removida com sucesso!");
}

function exibirMenu() {
  let opcao = "";
  while (opcao !== "5") {
    opcao = prompt(
      "\n=== MENU BANCO ===\n" +
        "1. Criar conta\n" +
        "2. Listar contas\n" +
        "3. Atualizar conta\n" +
        "4. Remover conta\n" +
        "5. Sair\n" +
        "Escolha uma opção: "
    );

    if (opcao === "1") {
      criarConta();
    } else if (opcao === "2") {
      listarContas();
    } else if (opcao === "3") {
      atualizarConta();
    } else if (opcao === "4") {
      removerConta();
    } else if (opcao === "5") {
      console.log("Saindo do sistema. Obrigado , Volte Sempre !");
    } else {
      console.log("Opção inválida, tente novamente Nao Foi Possivel encontrar a Conta Solicitada !");
    }
  }
}

exibirMenu();

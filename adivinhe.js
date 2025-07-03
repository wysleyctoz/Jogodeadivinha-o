function gerarNumeroSecreto() {
  return Math.floor(Math.random() * 100) + 1; 
}

function pedirPalpiteUsuario(tentativaAtual, tentativasMax) {
  let palpite = prompt(`Tentativa ${tentativaAtual} de ${tentativasMax}:\nDigite um número entre 1 e 100:`);

  while (isNaN(palpite) || palpite < 1 || palpite > 100) {
    palpite = prompt("Entrada inválida.\nDigite um número entre 1 e 100:");
  }

  return parseInt(palpite);
}

function jogarRodada() {
  const numeroSecreto = gerarNumeroSecreto();
  const tentativasMax = 7;
  let tentativaAtual = 1;

  alert("O computador pensou em um número de 1 a 100.\nTente adivinhar!");

  while (tentativaAtual <= tentativasMax) {
    const palpite = pedirPalpiteUsuario(tentativaAtual, tentativasMax);

    if (palpite === numeroSecreto) {
      alert(`Parabéns! Você acertou o número (${numeroSecreto}) em ${tentativaAtual} tentativa(s).`);
      return;
    } else if (palpite < numeroSecreto) {
      alert("O número secreto é MAIOR que o seu palpite.");
    } else {
      alert("O número secreto é MENOR que o seu palpite.");
    }

    tentativaAtual++;
  }

  alert(`Você usou todas as ${tentativasMax} tentativas.\nO número secreto era: ${numeroSecreto}`);
}

function iniciarJogo() {
  alert("Bem-vindo ao jogo: Adivinhe o Número, Vamos lá!");

  let continuar = true;

  while (continuar) {
    jogarRodada();

    const resposta = prompt("Deseja jogar novamente? (sim/não)").toLowerCase();

    if (resposta !== "sim") {
      continuar = false;
      alert("Obrigado por jogar. Até a próxima!");
    }
  }
}

iniciarJogo();


function pegarCoresDaPagina() {
  const caixasDeCor = document.querySelectorAll('.innerbox');
  let cores = [];

  caixasDeCor.forEach(caixa => {
    const corElemento = caixa.querySelector('.colornamespan a');
    if (corElemento) {
      const cor = corElemento.textContent.trim().toLowerCase();
      cores.push(cor);
    }
  });

  // Exibe o vetor de cores no console
  console.log(cores);
  return cores;
}

// Função para escolher 10 cores aleatórias do vetor de cores
function escolherCoresAleatorias(cores) {
  let coresAleatorias = [];

  // Garante que há pelo menos 10 cores para selecionar
  if (cores.length >= 10) {
    while (coresAleatorias.length < 10) {
      const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
      if (!coresAleatorias.includes(corAleatoria)) {
        coresAleatorias.push(corAleatoria);
      }
    }
  } else {
    console.log("Não há cores suficientes para escolher 10.");
  }

  // Exibe as 10 cores aleatórias no console
  console.log("10 Cores Aleatórias:", coresAleatorias);
  return coresAleatorias;
}

// Função para escolher uma cor aleatória entre as 10 cores selecionadas
function escolherCorAleatoriaDas10(coresAleatorias) {
  const corAleatoria = coresAleatorias[Math.floor(Math.random() * coresAleatorias.length)];
  console.log("Cor Aleatória Escolhida:", corAleatoria);
}

const coresAleatorias = escolherCoresAleatorias(cores);  // Escolhe 10 cores aleatórias
escolherCorAleatoriaDas10(coresAleatorias);  // Escolhe uma cor aleatória entre as 10

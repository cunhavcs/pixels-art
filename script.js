const coresIniciais = document.getElementsByClassName('color');
coresIniciais[0].style.backgroundColor = 'black';
coresIniciais[1].style.backgroundColor = 'red';
coresIniciais[2].style.backgroundColor = 'blue';
coresIniciais[3].style.backgroundColor = 'green';

function geraCorAleatoria() {
  const caracteresPossiveis = '0123456789ABCDEF';
  let cor = '#';

  for (let index = 0; index < 6; index += 1) {
    const novoCaractere = caracteresPossiveis[Math.floor(Math.random() * 16)];
    cor += novoCaractere;
  }

  return cor;
}

function gravaUltimaPaleta(value) {
  localStorage.setItem('colorPalette', JSON.stringify(value));
}

function geraNovaPaleta() {
  const caixaDeCor = document.getElementsByClassName('color');
  const paleta = [];

  for (let index = 1; index < 4; index += 1) {
    const caixaAtual = caixaDeCor[index];
    const corAleatoria = geraCorAleatoria();
    caixaAtual.style.backgroundColor = corAleatoria;
    paleta.push(corAleatoria);
  }

  gravaUltimaPaleta(paleta);
}

const botaoCoresAleatorias = document.getElementById('button-random-color');
botaoCoresAleatorias.addEventListener('click', geraNovaPaleta);

function recuperaUltimaPaleta() {
  const ultimaPaleta = JSON.parse(localStorage.getItem('colorPalette'));
  const caixaDeCor = document.getElementsByClassName('color');

  for (let index = 1; index < 4; index += 1) {
    const caixaAtual = caixaDeCor[index];
    const corRecuperada = ultimaPaleta[index - 1];
    caixaAtual.style.backgroundColor = corRecuperada;
  }
}

if (localStorage.getItem('colorPalette') !== null) {
  recuperaUltimaPaleta();
}

function selecionaCor() {
  const caixaDeCor = document.getElementsByClassName('color');

  for (let index = 0; index < 4; index += 1) {
    const caixaAtual = caixaDeCor[index];
    caixaAtual.className = 'color';
  }

  event.target.className = 'color selected';  
}

const caixaDeCor = document.getElementsByClassName('color');

for (let index = 0; index < 4; index += 1) {
  const caixaAtual = caixaDeCor[index];
  caixaAtual.addEventListener('click', selecionaCor);
}

function pintaPixel() {
  const caixaDeCor = document.getElementsByClassName('color');

  for (let index = 0; index < 4; index += 1) {
    const caixaAtual = caixaDeCor[index];
    
    if (caixaAtual.className.includes('selected')) {
      event.target.style.backgroundColor = caixaAtual.style.backgroundColor;
    }
  }
}

const quadroPixels = document.getElementsByClassName('pixel');

for (let index = 0; index < quadroPixels.length; index += 1) {
  const pixelAtual = quadroPixels[index];
  pixelAtual.addEventListener('click', pintaPixel);
}

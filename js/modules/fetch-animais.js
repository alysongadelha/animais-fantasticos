import AnimaNumeros from './anima-numeros.js';

export default function fechAnimais(url, target) {
  //Puxa os animais através de um arquivo json e cria cada aniamis utilizando createAnimal
  async function criarAnimais() {
    try {
      //Fetch e espera a resposta e transforma em json
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      //Após a transformação de json, ativa as funções para preencher e animar os numeros
      animaisJson.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  //Preenche cada animal no Dom
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Anima os números de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  //Cria a div contendo informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.species}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  return criarAnimais();
}

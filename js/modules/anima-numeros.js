export default class Animanumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    //bind o this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }

  //Recebe um elemento do dom, com numero no seu texto
  // incrementa a partir de 0 até o número final;
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerHTML = start;
      if (start > total) {
        numero.innerHTML = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // Ativa incrementa numero para cada numero selecionado do Dom
  animaNumeros() {
    this.numeros.forEach((numero) => {
      const total = +numero.innerHTML;
      this.constructor.incrementarNumero(numero);
    });
  }

  //Função que ocorrer quando as mutações ocorrerem
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  //Adiciona a MutationObserver para verificar quando a classe ativo é adicionada ao element target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}

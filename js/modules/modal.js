export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    //bind this ao callback para fazer referencia ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickForaModal = this.clickForaModal.bind(this);
  }

  //abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  //adiciona oe vento de toggle ao modal
  eventToggleModal(event) {
    console.log(event);
    event.preventDefault();
    this.toggleModal();
  }

  //fecha modal ao clicar fora
  clickForaModal(event) {
    if (event.target === this.containerModal) this.toggleModal();
  }

  //adiciona eventos aos elementos do modal
  addMovelEvents() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.clickForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addMovelEvents();
    }
    return this;
  }
}

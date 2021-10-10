import outSideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, eventos) {
    this.menuButton = document.querySelector(menuButton);

    this.menuList = document.querySelector(menuList);

    if (this.eventos === undefined) this.eventos = ["click", "touchstart"];
    else this.eventos = eventos;

    this.activeClasss = "active";

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    this.menuList.classList.add(this.activeClasss);
    this.menuButton.classList.add(this.activeClasss);
    console.log(this.activeClasss)
    outSideClick(this.menuList, this.eventos, () => {
      this.menuButton.classList.remove(this.activeClasss);
      this.menuList.classList.remove(this.activeClasss);
      console.log(`${this.activeClasss} funcao outsideclick`)
    });
  }

  addMenuEventMobile() {
    this.eventos.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuEventMobile();
    }
    return this;
  }
}

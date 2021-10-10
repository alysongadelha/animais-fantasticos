import outSideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    this.activeClass = "active";

    // Define os eventos padrão de events
    if (events == undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }

  // Atva o dropdowmenu e adiciona a função que oberva o clique fora dele
  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outSideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // Adiciona os eventos ao dropdowb menu
  addDropDownMEnuEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) this.addDropDownMEnuEvent();
    return this;
  }
}

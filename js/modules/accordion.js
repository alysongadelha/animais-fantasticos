export default function initAccordin() {
  const accordionList = document.querySelectorAll(
    '[data-anime="accordion"] dt',
  );
  function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }
  const activeClass = 'ativo';
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    accordionList.forEach((acocordion) => {
      acocordion.addEventListener('click', activeAccordion);
    });
  }
}

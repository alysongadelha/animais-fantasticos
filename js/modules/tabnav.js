export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  const activeClass = 'ativo';

  if (tabMenu && tabContent) {
    tabContent[0].classList.add(activeClass);

    function activeTab(index) {
      tabContent.forEach((item) => item.classList.remove(activeClass));
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add(activeClass, direcao);
    }

    tabMenu.forEach((tab, index) =>
      tab.addEventListener('click', () => activeTab(index)),
    );
  }
}
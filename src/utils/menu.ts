function showMenu(toggleID: string, navId: string) {
  const toggle = document.getElementById(toggleID),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu');
    });
  }
}

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

export { showMenu, linkAction };

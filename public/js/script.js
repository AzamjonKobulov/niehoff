const menuBtn = document.getElementById('menuBtn');
const sidebarMenu = document.getElementById('sidebar');
const body = document.getElementsByTagName('body');

menuBtn.addEventListener('click', () => {
  sidebarMenu.classList.toggle('hidden');
});

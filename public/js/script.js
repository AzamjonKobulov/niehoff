const menuBtn = document.getElementById('menuBtn');
const sidebarMenu = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
  sidebarMenu.classList.toggle('hidden');
});

const menuBtn = document.querySelector('#menuBtn');
const sidebarMenu = document.querySelector('#menu');

menuBtn.addEventListener('click', () => {
  sidebarMenu.classList.toggle('hidden');
});

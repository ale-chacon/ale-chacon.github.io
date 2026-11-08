const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menu.classList.toggle('open', open);
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menu?.classList.contains('open')) {
    menu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.focus();
  }
});
document.querySelector('.print-cv')?.addEventListener('click', () => window.print());
const dialog = document.querySelector('.image-dialog');
document.querySelectorAll('.zoom-image').forEach(button => button.addEventListener('click', () => {
  const img = dialog.querySelector('img');
  img.src = button.dataset.image;
  img.alt = button.dataset.alt;
  dialog.showModal();
}));
dialog?.querySelector('.close-dialog')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
document.querySelectorAll('.load-video').forEach(button => button.addEventListener('click', () => {
  const box = button.closest('[data-video]');
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube-nocookie.com/embed/${box.dataset.video}?start=${box.dataset.start || '0'}&autoplay=1`;
  iframe.title = 'Actividad Aprendizaje cooperativo instrumentos musicales';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.allowFullscreen = true;
  box.replaceChildren(iframe);
}));

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    modal: document.querySelector('[data-modal]'),
    backdrop: document.querySelector('[data-backdrop]'),
    links: document.querySelectorAll('.modal-nav-link'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.backdrop.addEventListener('click', closeModal);

  refs.links.forEach(link => {
    if (link) {
      link.addEventListener('click', closeModal);
    }
  });

  function openModal() {
    refs.modal.classList.remove('is-hidden');
    refs.backdrop.classList.remove('is-hidden');
  }

  function closeModal() {
    refs.modal.classList.add('is-hidden');
    refs.backdrop.classList.add('is-hidden');
  }
})();

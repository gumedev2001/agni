 const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('closeBtn');

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Opcional: cerrar al hacer clic fuera del modal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
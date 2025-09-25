const formulario = document.getElementById('formulario');
const respuestaDiv = document.getElementById('respuesta');

formulario.addEventListener('submit', function(e){
  e.preventDefault(); // evita recargar la página

  const formData = new FormData(formulario);

  fetch('server/enviar.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    respuestaDiv.textContent = data.message;
    if(data.status === 'success'){
      formulario.reset(); // limpia el formulario
      respuestaDiv.style.color = 'green';
    } else {
      respuestaDiv.style.color = 'red';
    }
  })
  .catch(error => {
    respuestaDiv.textContent = 'Error al enviar el mensaje';
    respuestaDiv.style.color = 'red';
  });
});


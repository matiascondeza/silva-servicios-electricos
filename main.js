
const form = document.getElementById('cotizar');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  const msg = `Hola, soy ${data.nombre}. Tel: ${data.telefono}. Zona: ${data.zona}. Detalle: ${data.detalle}`;
  const wa = "https://wa.me/59892640430?text=" + encodeURIComponent(msg);
  window.open(wa, '_blank', 'noopener');
  form.reset();
});

//Carrousel-Movimiento
function abrirLightbox(img) {
  const lightbox = document.getElementById('lightbox');
  const imagenGrande = document.getElementById('imagenGrande');
  imagenGrande.src = img.src;
  lightbox.style.display = 'flex';
}

function cerrarLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// main.js - Funcionalidades opcionales

// Efecto suave al hacer clic en enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Mensaje de bienvenida en consola (para ti, como desarrollador)
console.log('🔬 Sitio cargado correctamente. ¡Éxito con tu investigación!');
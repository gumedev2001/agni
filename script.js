const toggleButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// --- Menú Hamburguesa ---
toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// --- Animación de entrada para las secciones ---
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section, .hero");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Evita flicker al dejar de observar después de animar
        //obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: "0px 0px -10% 0px", // dispara un poco antes de salir
    threshold: 0.25 // 25% visible antes de activar animación
  });

  sections.forEach(section => observer.observe(section));
});


// EFECTO MAQUINA DE ESCRIBIR /


const titleText = "AGNI Developer";
const subtitleText = "Exploring and Creating Digital Worlds";

function typeWriter(elementId, text, delay, callback) {
  const container = document.getElementById(elementId);
  container.innerHTML = ""; // limpiar

  let i = 0;
  function writeLetter() {
    if (i < text.length) {
      const char = text.charAt(i);
      const span = document.createElement('span');
      span.className = 'letter';
      span.textContent = char === ' ' ? '\u00A0' : char;
      container.appendChild(span);

      requestAnimationFrame(() => span.classList.add('show'));
      i++;
      setTimeout(writeLetter, delay);
    } else if (callback) {
      callback(container);
    }
  }

  writeLetter();
}

// Función para hacer que todas las letras tiemblen cada cierto tiempo
function startWobble(container, interval = 3000) {
  setInterval(() => {
    const letters = container.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
      // agregamos y quitamos la clase para reiniciar la animación
      setTimeout(() => {
        letter.classList.add('wobble');
        setTimeout(() => letter.classList.remove('wobble'), 400);
      }, index * 30); // pequeño delay para que el tambaleo sea en cascada
    });
  }, interval);
}

// Uso
typeWriter("hero-text", titleText, 100, (container) => {
  startWobble(container, 4000); // cada 4s
  typeWriter("hero-subtext", subtitleText, 50, (subContainer) => {
    startWobble(subContainer, 4000);
  });
});

  // EFECTO MAQUINA DE ESCRIBIR //


// --- Validación y alerta del formulario de contacto ---
document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = this.querySelector("input[type='text']").value.trim();
  const correo = this.querySelector("input[type='email']").value.trim();
  const mensaje = this.querySelector("textarea").value.trim();

  if (!nombre || !correo || !mensaje) {
    alert("Por favor completa todos los campos.");
    return;
  }

  alert(`¡Gracias, ${nombre}! Tu mensaje ha sido enviado correctamente.`);
  this.reset();
});

// --- Mover logo responsivo ---
function moverLogoResponsivo() {
  const logo = document.getElementById("logoContainer");
  const nav = document.querySelector(".navbar");
  const toggler = document.querySelector(".menu-toggle");
  const navLinks = document.getElementById("navLinks");

  if (!logo || !toggler || !navLinks) return;

  if (window.innerWidth <= 768) {
    if (logo.nextElementSibling !== toggler) {
      nav.insertBefore(logo, toggler);
    }
  } else {
    if (logo.nextElementSibling !== navLinks) {
      nav.insertBefore(logo, navLinks);
    }
  }
}

// Ejecutar al cargar y redimensionar
window.addEventListener("load", moverLogoResponsivo);
window.addEventListener("resize", moverLogoResponsivo);


/**XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
// Mostrar/ocultar los mini-cards
document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const desc = btn.nextElementSibling;
    const isOpen = desc.classList.contains('show');

    // Cerrar otras descripciones
    document.querySelectorAll('.descripcion').forEach(d => {
      if (d !== desc) {
        d.classList.remove('show');
        // Reiniciar barra después de la animación
        setTimeout(() => {
          d.querySelectorAll('.progress-fill').forEach(p => p.style.width = '0');
        }, 500);
      }
    });
    document.querySelectorAll('.toggle-btn').forEach(b => {
      if (b !== btn) b.classList.remove('active');
    });

    if (!isOpen) {
      // Abrir
      desc.classList.add('show');
      btn.classList.add('active');

      // Animar barra de progreso
      desc.querySelectorAll('.progress-fill').forEach(p => {
        const progress = p.dataset.progress;
        setTimeout(() => {
          p.style.width = progress + '%';
        }, 50); // pequeño delay para disparar transición
      });

    } else {
      // Cerrar
      desc.classList.remove('show');
      btn.classList.remove('active');

      // Reiniciar barra después de la transición de cierre
      setTimeout(() => {
        desc.querySelectorAll('.progress-fill').forEach(p => p.style.width = '0');
      }, 500);
    }
  });
});*/
document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');        // Solo afecta a la card seleccionada
    const desc = card.querySelector('.descripcion');
    const progressFill = card.querySelector('.progress-fill');

    const isOpen = desc.classList.contains('show');

    // Toggle local
    if (isOpen) {
      desc.classList.remove('show');
      btn.textContent = '+';
      progressFill.style.width = '0';
    } else {
      desc.classList.add('show');
      btn.textContent = '-';
      // Animación del porcentaje
      const progress = progressFill.dataset.progress;
      setTimeout(() => {
        progressFill.style.width = progress + '%';
      }, 50);
    }
  });
});


toggleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card'); // solo el card actual
    const descripcion = card.querySelector('.descripcion');
    descripcion.classList.toggle('show');
  });
});




/*
document.querySelectorAll('.toggle-btn').forEach(btn => {
   
  });
*/


 const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      480: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });

  
/**XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */


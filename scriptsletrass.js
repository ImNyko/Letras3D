// Animations for fade-in sections when scrolling
const faders = document.querySelectorAll('.fade-in-section');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('is-visible');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


document.getElementById('calc-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario

  // Obtén los valores de entrada
  const text = document.getElementById('text').value.trim();
  const height = parseInt(document.getElementById('height').value) || 0; // Valor por defecto es 0 si no se ingresa
  const depth = parseInt(document.getElementById('depth').value) || 0; // Valor por defecto es 0 si no se ingresa
  const isLed = document.getElementById('led').checked;

  // Calcular el número de letras
  const letterCount = text.length;

  // Cálculos
  const basePrice = 3000; // Precio base por letra (de 18 cm de altura y 4 cm de profundidad)
  const depthReduction = 750; // Descuento por cm de profundidad por debajo de 4 cm
  const heightIncrease = 300; // Incremento por cm de altura por encima de 18 cm
  const ledCost = 15000; // Costo adicional por Letras LED

  // Calcular descuentos o incrementos
  const heightDiscount = height < 18 ? (18 - height) * heightIncrease : 0; // Descuento por reducción de altura
  const depthDiscount = depth < 4 ? (4 - depth) * depthReduction : 0; // Descuento por reducción de profundidad

  // Calcular el costo total
  let totalValue = (basePrice * letterCount) - heightDiscount - depthDiscount;

  // Agregar costo adicional por Letras LED si está marcado
  if (isLed) {
      totalValue += ledCost;
  }

  // Mostrar el valor total
  document.getElementById('total-value').textContent = `Valor total: ${totalValue} pesos`;
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío normal del formulario

  var formData = new FormData(this); // Crea un objeto FormData con los datos del formulario

  // Verifica los datos antes de enviarlos
  console.log('Datos enviados:', Array.from(formData.entries()));

  fetch('procesar_formulario.php', {
      method: 'POST',
      body: formData
  })
  .then(response => response.text())
  .then(data => {
      document.getElementById('response-message').innerHTML = data; // Muestra la respuesta en el contenedor
      if (data.includes("Mensaje enviado correctamente")) {
          $('#successModal').modal('show'); // Muestra el modal de éxito
      }
  })
  .catch(error => {
      console.error('Error:', error);
      document.getElementById('response-message').innerHTML = "Error al enviar el mensaje."; // Mensaje de error
  });
});

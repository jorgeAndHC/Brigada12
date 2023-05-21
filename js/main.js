// $(document).ready(function ($) {
//     "use strict";


//     var book_table = new Swiper(".book-table-img-slider", {
//         slidesPerView: 1,
//         spaceBetween: 20,
//         loop: true,
//         autoplay: {
//             delay: 3000,
//             disableOnInteraction: false,
//         },
//         speed: 2000,
//         effect: "coverflow",
//         coverflowEffect: {
//             rotate: 3,
//             stretch: 2,
//             depth: 100,
//             modifier: 5,
//             slideShadows: false,
//         },
//         loopAdditionSlides: true,
//         navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//         },
//         pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//         },
//     });
// }
// )

//  *****CONTROLES PARA TÉRMINOS Y CONDICIONES*****
document.addEventListener("DOMContentLoaded", function(event) {
    const terminosParrafo = document.getElementById("terms");

    terminosParrafo.addEventListener("click", function() {
      Swal.fire({
        title: 'Términos y Condiciones de la Fundación Brigada 12',
        html: `
          <p>Al acceder y utilizar los servicios de la Fundación Brigada 12, usted acepta cumplir con los siguientes términos y condiciones:</p>

          <h2>1. Uso del sitio web</h2>

          <p>1.1 Usted reconoce y acepta que el uso del sitio web de la Fundación Brigada 12 es bajo su propio riesgo. La Fundación no se hace responsable por cualquier daño o pérdida derivada del uso del sitio web.</p>

          <p>1.2 Usted se compromete a utilizar el sitio web de la Fundación Brigada 12 únicamente para fines legítimos y de acuerdo con todas las leyes y regulaciones aplicables.</p>

          <h2>2. Responsabilidad</h2>

          <p>2.1 La Fundación Brigada 12 se esfuerza por brindar información precisa y actualizada, pero no garantiza la exactitud, integridad o actualidad de dicha información. Usted entiende y acepta que el uso de cualquier información o material obtenido a través del sitio web es bajo su propio riesgo y responsabilidad.</p>

          <p>2.2 La Fundación Brigada 12 no se hace responsable de ningún daño directo, indirecto, incidental, consecuente o especial que pueda surgir del uso de sus servicios o de la imposibilidad de utilizarlos, incluyendo, pero no limitado a, daños por pérdida de beneficios, datos o cualquier otra pérdida intangible.</p>

          <h2>3. Propiedad intelectual</h2>

          <p>3.1 Todos los derechos de propiedad intelectual relacionados con el contenido y los materiales del sitio web de la Fundación Brigada 12 son propiedad exclusiva de la Fundación o de sus respectivos propietarios, según corresponda.</p>

          <p>3.2 Usted se compromete a no reproducir, distribuir, modificar o utilizar de cualquier otra manera el contenido del sitio web sin el consentimiento previo por escrito de la Fundación.</p>

          <h2>4. Modificaciones</h2>

          <p>4.1 La Fundación Brigada 12 se reserva el derecho de modificar estos términos y condiciones en cualquier momento sin previo aviso. Se recomienda revisar regularmente los términos y condiciones actualizados en el sitio web.</p>

          <p>4.2 El uso continuado de los servicios de la Fundación después de cualquier modificación constituye la aceptación de los términos y condiciones modificados.</p>

          <h2>5. Contacto</h2>

          <p>Si tiene alguna pregunta o inquietud acerca de estos términos y condiciones, puede ponerse en contacto con nosotros a través de los datos de contacto proporcionados en el sitio web.</p>
        `,
        showConfirmButton: false,
        width: '800px'
      });
    });
  });

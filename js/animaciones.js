document.addEventListener("DOMContentLoaded", function() {
  const mainNavBar = document.getElementById("mainNavBar");
  if (mainNavBar) {
      var navBar = document.getElementById('mainNavBar');
      var navBarHeight = navBar.offsetHeight;
      var section = document.querySelector('section');
      
      const newStyle1 = document.createElement('style');
      newStyle1.textContent = `
          section {
              height: 90vh;
              scroll-margin-top: 20vh;
          }
      `;

      const newStyle2 = document.createElement('style');
      newStyle2.textContent = `
          section {
              height: 90vh;
              scroll-margin-top: 10vh;
          }
      `;
      
      function toggleFixedNavBar() {
          if (window.scrollY > 450) {
              navBar.classList.add('fixedNavBar');
              document.head.appendChild(newStyle2);
              if (document.head.contains(newStyle1)) {
                document.head.removeChild(newStyle1);
            }            
            //   console.log(window.scrollY);
          } else {
            //   console.log(window.scrollY);
              navBar.classList.remove('fixedNavBar');
              document.head.appendChild(newStyle1);
              if (document.head.contains(newStyle2)) {
                document.head.removeChild(newStyle2);
            } 
          }
      }
      window.addEventListener('scroll', toggleFixedNavBar);
  } else {
      console.error("Elemento mainNavBar no encontrado en el DOM.");
  }
});

// Obtener todos los elementos con la clase "subrayar"
const subrayados = document.querySelectorAll('.subrayar');

// Iterar sobre cada enlace
subrayados.forEach(enlace => {
    // Agregar un evento de clic a cada enlace
    enlace.addEventListener('click', function() {
        // Remover la clase "active" de todos los enlaces
        subrayados.forEach(enlace => enlace.classList.remove('active'));
        // Agregar la clase "active" al enlace clickeado
        this.classList.add('active');
    });
});


// Obtener el elemento que contiene los botones
const buttonContainer = document.getElementById('divTrabajos');

function handleClick(event) {
    // Obtener todos los botones dentro del contenedor
    const buttons = buttonContainer.querySelectorAll('button');
    
    // Eliminar la clase 'prender' de todos los botones
    buttons.forEach(button => {
        button.classList.remove('prender');
        // button.classList.add('noPrender');
    });
    
    // Agregar la clase 'prender' al botón clickeado

    // event.target.classList.remove('noPrender');
    event.target.classList.add('prender'); 
    // console.log("Hice clic en un botón");
}

// Agregar un event listener al contenedor de botones para manejar el clic en los botones hijos
buttonContainer.querySelectorAll('button').forEach(tag => {
    tag.addEventListener('click', handleClick);
});

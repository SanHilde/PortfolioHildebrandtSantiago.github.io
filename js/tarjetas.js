import { Trabajo, crearTrabajoDesdeJSON,traerListaDeTrabajos } from './objetos.js';
// import {crearMonstruoDesdeJSON, traerListaDeTrabajos } from './objetos.js';
// let listaDeTrabajos = JSON.parse(localStorage.getItem("listaDeTrabajos"));
// let listaDeTrabajos = traerListaDeTrabajos();
// import { Monstruo, crearMonstruoDesdeJSON } from './objetos.js';
// import { getObjetos} from './fetch.js';
// const URL = "http://localhost:3001/Trabajos";
// getObjetos(URL)
    // // .then(data => {
    //       CrearTarjetas(data);
    // })
    // .catch(error => {
    //     console.error(error);
    // });

// const contenedor = document.getElementById('tarjetas');

function CrearTarjetas(listaDeTrabajos)
{
    listaDeTrabajos.forEach(objeto => {
        const article = document.createElement('article');
        const parrafo = document.createElement('p');  
        const imagenPrincipal=document.createElement('img');
        const titulo= document.createElement('h2');
        for (const parametro in objeto) {
                switch (parametro )
                {   
                    const div = document.createElement('div'); 
                    const nuevoP = document.createElement('p');    
                }                   
                imagenPrincipal.src= `../asserts/jpg/${tipo}_perfil.jpg`;
                imagenPrincipal.alt= `pefil ${tipo}`;
                imagenPrincipal.id = "perfilTarjetas"
            }
            article.appendChild(titulo);
            article.appendChild(imagenPrincipal);              
            article.appendChild(divStats);
        }
    
article.setAttribute('data-color', color);
const pLorem = document.createElement('p');
pLorem.textContent = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sint nostrum, nemo ad molestias commodi enim error dolorem quaerat nisi optio in accusantium esse sapiente? Hic eligendi a totam ex. Iure delectus tenetur molestiae aspernatur iste sint fugit eos soluta, quibusdam nam consequuntur accusamus error, est atque ea animi vero?";  
article.appendChild(pLorem);
contenedor.appendChild(article);
);
}

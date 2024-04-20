export function Trabajo (id, titulo, introduccion, descripcion, cantFotos,trabajos) 
{
    this.id = id;
    this.titulo = titulo;
    this.introduccion = introduccion;
    this.descripcion = descripcion;
    this.cantFotos = cantFotos;
    this.trabajos = trabajos;
}

export function crearTrabajoDesdeJSON(objetoJSON) {
    
    const trabajo = new Trabajo(
        objetoJSON.id,
        objetoJSON.titulo,
        objetoJSON.introduccion,
        objetoJSON.descripcion,
        objetoJSON.cantFotos,
        objetoJSON.trabajos,
    );

    return trabajo;
}

export function traerListaDeTrabajos()
{
    let listaDeObjetos = JSON.parse(localStorage.getItem("listaDeTrabajos"));
    let listaDeTrabajos = [];
    listaDeObjetos.forEach(objeto => {       
        const trabajo=crearTrabajoDesdeJSON(objeto);
        listaDeTrabajos.push(trabajo);
    });
    return listaDeTrabajos;
    
}


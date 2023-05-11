class Persona {

    /* #_rut;  se puede hacer un atributo privado?*/
    constructor(rut, primerNombre, segundoNombre, apellidoPat, apellidoMat, genero) {
        this.rut = rut;
        this.genero = genero;
        this.primerNombre = primerNombre;
        this.segundoNombre = segundoNombre;
        this.apellidoPat = apellidoPat;
        this.apellidoMat = apellidoMat;
    }

}
const funcionModulo = () => {
    console.log('Esto lo estoy imprimiendo desde el persona.js');
}

const datos = {
    nombre:'hola',
    apellido:'adios'
}

export {
    funcionModulo,
    Persona,
    datos
}

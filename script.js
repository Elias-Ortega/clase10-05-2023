/* Paradigma de progrmaOrientacion a objetos */
/* Clase */
/* Objeto */
/* Instancia */

/* Cuatro pilares de la POO */
/* Herencia */
/* Encapsulación */
/* Abstracción */
/* Polimorfismo */

/* Colaboracion - Asociación  y composición */
//clase
import { Persona } from "./persona.js";
import { funcionModulo } from "./persona.js";

const personaUno = new Persona('11111111-1', 'Elias', 'Jonathan', 'Ortega', 'Mundaca', 'Masculino');
const personaDos = new Persona('2222222-2', 'Camilo', 'Antonio', 'Ojeda', 'Escalante', 'Masculino');
const personaTres = new Persona('3333333-3', 'Katherine', '', 'Ojeda', 'Escalante', 'Femenino');
personaUno.genero = 'Femenino';//se puede cambiar cualquier atributo o dato interno 
console.log(personaUno);
console.log(personaDos);
console.log(personaTres);

funcionModulo();
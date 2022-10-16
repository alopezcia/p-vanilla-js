import { FormularioRegistro } from './components/FormularioRegistro'
import { MainPage } from './components/MainPage'


// Definimos los 'Custom Component'  importados
// Nota - se podría haber hecho en los mismo archivos js importados, cada línea en su repectivo archivo,
//  pero así queda más claro
customElements.define('main-page', MainPage )
customElements.define('formulario-registro',FormularioRegistro )

// Creación de los 'Custom Coponets'
const login = document.createElement('main-page')
const formulario = document.createElement('formulario-registro')

// Manipulamos el DOM:
// 1º Obtenemos el elemento que  a contener las distintas páginas  
const main = document.getElementById('main')
// 2º Presentando la página del login
main.appendChild( login )

// Añadimos un 'listener' para atrapar el posible 'Custon Event' de la página de login
document.addEventListener('logged', ( event ) => {
    // para cambiar la página
    main.replaceChild( formulario, login )
})

// Añadimos un 'listener' para atrapar el posible 'Custon Event' de la página formualrio de datos
document.addEventListener('logout', ( event ) => {
    // para cambiar la página y volver al login
    main.replaceChild(  login , formulario )
})

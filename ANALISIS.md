// Elementos de React:
Componente:
- ¿Donde lo usas en este problema?: Se utiliza en todo el problema. 
- ¿Por que es el adecuado?: Ayuda a separar el código y que no se cruzen al escribir/generar lo necesario para el proyecto.
JSX:
- ¿Donde lo usas en este problema?: Se utiliza en todo el proyecto.
- ¿Por que es el adecuado?: Es el formato de JavaScript necesario para crear funcionalidades dentro de la app.
Props:
- ¿Donde lo usas en este problema?: Se utiliza para mantener el flujo de información entre componentes relacionados.
- ¿Por que es el adecuado?: Es lo que permite que se reciba información desde un componente diferente al que se modifica.
Estado:
- ¿Donde lo usas en este problema?: Se utiliza en el proyecto para mantener la información autenticada.
- ¿Por que es el adecuado?: Ya que ayuda a verificar si se encuentran diversas cosas disponibles.
Renderizado de lista (.map + key):
- ¿Donde lo usas en este problema?: Se utiliza en el proyecto para mantener la lista corriendo localmente dentro del programa, ayudando a mejorar el rendimiento y la protección de datos.
- ¿Por que es el adecuado?: Ayuda a mantener la ID de key unica dentro del proyecto.
Renderizado condicional:
- ¿Donde lo usas en este problema?: Se utiliza para mostrar o ocultar elementos dentro del programa web.
- ¿Por que es el adecuado?: Ayuda a dar alertas, visualización de actualizaciones, errores o disponibilidad si es que el usuario desea dentro de la app web.

// Responde brevemente:
1. ¿Que ventaja tiene dividir el catalogo en componentes en lugar de escribir todo en un solo archivo?
- Ayuda a mantener la coherencia y la eficiencia del código dentro del proyecto, ya que escribir todo en un solo archivo solo causaria que el proyecto este lleno de código spaghetti que cause problemas de renderización, problemas con los datos y con la manera en la que funcionaria generalmente al ser ejecutado.
2. ¿Que diferencia hay entre props y estado en tu solución? Da un ejemplo concreto de cada uno tomado de esta aplicación.
- Con lo acordado en la aplicación, se puede decir que props y estados se encuentran totalmente diferentes ya que por ejemplo en los feats algunos entran desde afuera al ser props, mientras que estados ya se encuentran dentros de los componentes (LibroCard/ListaLibros).
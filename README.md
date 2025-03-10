# Portafolio-Curso 3 HTML CSS Botones

Estilo de botones y nuevo subtitulo

#1 - Agregando un subtítulo a la página

Imagina que estás desarrollando una página web para compartir tus redes sociales. Necesitas agregar un subtítulo "Accede a mis redes:" encima de los enlaces para Instagram y Github. Tu tarea es editar el archivo index.html para incluir este subtítulo. Recuerda usar la etiqueta <h2> para el subtítulo y colocarlo dentro de la <div> que ya contiene los enlaces.

#2 - Cambiando la disposición de los elementos con Flexbox

Ahora que se ha añadido el subtítulo, te das cuenta de que está alineado a la izquierda de los botones en lugar de encima de ellos. Esto sucedió porque los elementos están dispuestos horizontalmente. Tu misión es cambiar la disposición de los elementos (subtítulo y botones) a una disposición vertical. Edita el archivo style.css, modificando la propiedad flex-direction a column dentro de la clase .presentacion__enlaces. Esto cambiará la dirección del Flexbox, alineando los elementos verticalmente.

#3 - Ajustando la alineación y el espaciado de los elementos

Después de modificar la dirección del Flexbox, observas que los elementos (texto y botones) están muy cerca unos de otros y alineados a la izquierda. Para mejorar la estética de la página, necesitas centrar verticalmente estos elementos y agregar un espacio entre ellos. En el archivo style.css, dentro de la clase .presentacion__enlaces, añade la propiedad align-items: center para centrar los elementos. Luego, agrega la propiedad gap con un valor de 32px para añadir el espaciado entre cada elemento.

#4 - Creando una clase para el subtítulo

Estás desarrollando una página web y has decidido que el subtítulo "Accede a mis redes:" necesita una estilización específica. Para eso, vas a crear una clase CSS para este subtítulo. En el archivo index.html, encuentra la etiqueta <h2> que contiene el subtítulo y añade una clase llamada presentacion__enlaces__subtitulo. Tu tarea es insertar esta clase en la etiqueta <h2> de forma correcta.

#5 - Estilizando el subtítulo

Ahora que has creado una clase para el subtítulo, es hora de estilizarlo. En el archivo style.css, añade la clase .presentacion__enlaces__subtitulo y configura las propiedades de estilo. Utiliza la fuente 'Krona One', con un peso de fuente (font-weight) de 400 y un tamaño de fuente (font-size) de 24px. Ajusta la fuente para que sea 'sans-serif' sin comillas. Tu tarea es escribir el código CSS para aplicar estas configuraciones al subtítulo.

#6 - Modificando el estilo de los botones

Los botones de tu página necesitan un nuevo aspecto. En el archivo style.css, encuentra la clase .presentacion__enlaces__link y realiza los siguientes cambios: elimina el fondo cian, cambia el color del texto a blanco (#F6F6F6), añade un borde sólido de 2px en color cian (#22D4FD), cambia el ancho a 378px y ajusta el border-radius a 8px. Tu tarea es cambiar el código CSS para reflejar estos cambios, creando botones con bordes cian, texto blanco y esquinas menos redondeadas.

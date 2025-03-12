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

---------------------------------------------


# Organizando Íconos en las Redes Sociales

Imagina que estás trabajando en un proyecto personal donde deseas incluir enlaces a tus redes sociales con iconos correspondientes. Ya tienes un enlace al GitHub con un ícono, pero necesitas agregar otros dos: LinkedIn y Twitch. Utiliza el siguiente fragmento de código HTML como punto de partida:

```html
<main class="presentacion">
    <section class="presentacion__contenido">
        <h1 class="presentacion__contenido__titulo">
            Eleve tu negocio digital a otro nivel
            <strong class="titulo-destaque">con un Front-end de calidad!
            </strong>
        </h1>
        <p class="presentacion__contenido__texto">
            ¡Hola! Soy Ana García, desarrolladora Front-end con
            especialización en React, HTML y CSS. Ayudo a pequeños
            negocios y diseñadores a llevar a cabo buenas ideas.
            ¿Hablamos?
        </p>
        <div class="presentacion__enlaces">
            <h2 class="presentacion__enlaces__subtitulo">Accede a mis redes:</h2>
            <a class="presentacion__enlaces__link" href="https://github.com/">
                <img src="./assets/github.png" alt="Icono de Github">
                GitHub
            </a>
        </div>
    </section>
    <img src="assets/Imagem.png" alt="Foto de Ana García desarrollando un proyecto">
</main>
<footer class="footer">
    <p>Desarrollado por Alura Latam</p>
</footer>
```

---

## Centrando Íconos y Textos en los Botones

En este desafío, necesitas alinear los íconos de redes sociales con sus respectivos textos dentro de los botones. Para ello, utiliza Flexbox. Accede al archivo `style.css` y encuentra la clase `.apresentacao__enlaces__link`. Agrega las siguientes propiedades respetando el orden y la posición correcta:

```css
.apresentacao__enlaces__link {
    display: flex;
    justify-content: center;
    gap: 16px;
}
```

---

## Espaciado entre Íconos y Textos

Para ajustar el espaciado entre los íconos y los textos dentro de los botones, consulta el diseño en Figma y encuentra el valor exacto del espaciado en píxeles. Luego, agrega la propiedad `gap` con el valor adecuado dentro de la clase `.apresentacao__enlaces__link` en `style.css`:

```css
.apresentacao__enlaces__link {
    gap: <valor-en-px>;
}
```

---

## Personalizando el Efecto Hover

Para mejorar la experiencia de usuario, agrega un efecto `hover` a la clase `.apresentacao__enlaces__link`, haciendo que el borde del botón cambie a azul (`#0000FF`) al pasar el mouse sobre él:

```css
.apresentacao__enlaces__link:hover {
    border: 2px solid #0000FF;
}
```

---

## Cambiando el Cursor y el Fondo de los Botones

Finalmente, modifica la apariencia del cursor y el fondo de los botones cuando el usuario pase el mouse sobre ellos. Edita la clase `.apresentacao__enlaces__link:hover` en `style.css` para que el cursor cambie a `pointer` y el fondo se vuelva un tono de negro más claro (`#272727`):

```css
.apresentacao__enlaces__link:hover {
    cursor: pointer;
    background-color: #272727;
}
```

---

¡Listo! Ahora tus íconos de redes sociales estarán mejor organizados y estilizados en tu proyecto web. 🚀

-----------------------------------------------------------------------------------

# Personalizando el pie de página de tu sitio web

Imagina que estás desarrollando un sitio web y ha llegado el momento de personalizar el pie de página. El desafío es crear un pie de página estilizado con las siguientes características:

- Fondo azul claro (`#22D4FD`).
- Texto en negro (`#000000`).
- El texto debe estar centrado y utilizar la fuente `'Montserrat'`, tamaño `24px` y peso `400`.
- El pie de página debe tener un `padding` de `24px`.

Utiliza el HTML y CSS proporcionados como base y aplica las modificaciones necesarias.

---

## Ajustando el espaciado interno de la presentación

Te han encargado ajustar el diseño de una sección de presentación en un sitio web. Actualmente, los elementos están demasiado cerca de los bordes, lo que afecta la estética del sitio. 

Tu tarea es reemplazar la propiedad `margin` por `padding` en la clase `.presentación` del CSS, probando valores de porcentaje para encontrar el espaciado ideal. Comienza con un `5%` y ajusta según sea necesario para obtener un aspecto equilibrado.

---

## Eliminando el `height` para adaptar el diseño

Tu sitio web está experimentando un problema de diseño: la propiedad `height: 100vh` en el `body` está impidiendo que el contenido se ajuste correctamente en la pantalla, especialmente con la adición de nuevos elementos como un pie de página. 

Tu misión es comentar la línea que define `height: 100vh` en el CSS y verificar el impacto de este cambio en el diseño del sitio. Observa cómo el contenido y el pie de página se adaptan a la nueva configuración.

---

## Estilizando el encabezado con CSS

Estás creando un sitio web y ha llegado el momento de estilizar el encabezado para que sea visible y atractivo, similar al proyecto en Figma. 

Necesitas agregar estilo al encabezado en el archivo `style.css`, de modo que los enlaces **"Home"** y **"Sobre mí"** estén alineados horizontalmente y tengan un aspecto moderno. 

Considera usar propiedades como:

- `font-size`
- `color`
- `margin`
- `padding`
- `display`

Intenta también agregar un `hover` para cambiar el color de los enlaces cuando el ratón pase sobre ellos.

---

## Ajustando el espaciado interno de los enlaces

Basándonos en el estilo actual del encabezado, parece que los enlaces pueden estar muy cerca uno del otro o del borde del encabezado, lo que puede afectar la legibilidad y la estética del sitio. 

Tu tarea es ajustar el espaciado interno (`padding`) de los enlaces **"Home"** y **"Sobre mí"** para asegurarte de que tengan un espaciado adecuado alrededor del texto. Esto hará que el encabezado sea más atractivo y fácil de usar.

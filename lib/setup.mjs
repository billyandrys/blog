import { promises as fs } from 'fs';
import path from 'path';
import dotenv from 'dotenv';


const template = `---
title: 'Los inicios un scripting JS'
publishedAt: '06-05-2023'
summary: 'Los inicios un scripting'
---

El mundo de la programación está lleno de lenguajes de programación que han revolucionado la forma en que interactuamos con la tecnología. Uno de los lenguajes más influyentes y ampliamente utilizado es JavaScript. En este artículo, exploraremos la historia de JavaScript, desde sus humildes comienzos hasta convertirse en uno de los pilares fundamentales de la web moderna.

## JavaScript
### Un lenguaje de programación de alto nivel y orientado a objetos utilizado principalmente para desarrollar aplicaciones web interactivas.
JavaScript, también conocido como JS. En su primera versión a mediados de mayo de 1995 fue nombrado Mocha. Buscando algo de contexto, Mocha es un tipo de café. queriendo hacer alusión a Java, que aparte de ser el lenguaje de programación más popular en ese entonces, es un argot que significa café. De ahí su logo, una taza humeante de café. Luego le llamaron LiveScript y después de unos meses quedó como lo conocemos hoy, nuestro amado JavaScript.
"Java" y "Script". La inclusión de "Java" en el nombre fue una decisión estratégica para capitalizar el éxito y la atención que Java estaba recibiendo en ese momento. La parte "Script" se refiere a la naturaleza interpretada del lenguaje, lo que significa que el código fuente no se compila sino que se ejecuta directamente por un intérprete en tiempo de ejecución.

## Los orígenes de JavaScript

JavaScript fue creado por Brendan Eich, un ingeniero de software que trabajaba en Netscape Communications a mediados de la década de 1990. En ese momento, Netscape dominaba el mercado de navegadores con su producto Netscape Navigator. Eich fue contratado para desarrollar un lenguaje de programación interpretado y fácil de usar que permitiera a los desarrolladores crear interactividad en las páginas web.

### Mocha y LiveScript

El primer nombre con el que se conoció al lenguaje fue "Mocha". Sin embargo, para aprovechar el creciente atractivo del lenguaje de programación Java de Sun Microsystems, Netscape decidió cambiar su nombre a "LiveScript". 

El renacimiento como JavaScriptEn 1995, Netscape decidió asociarse con Sun Microsystems para aprovechar el auge del lenguaje Java. Como resultado, el lenguaje de programación LiveScript fue rebautizado como JavaScript. La decisión fue principalmente una estrategia de marketing, ya que Java estaba ganando popularidad en ese momento.


## Estándar y la competencia con Microsoft

A medida que JavaScript ganaba popularidad, Netscape presentó el lenguaje a la organización de estándares ECMA International. En 1997, se estableció el estándar ECMA-262, que definía el lenguaje JavaScript tal como lo conocemos hoy en día. Sin embargo, en ese momento, Microsoft estaba desarrollando su propio lenguaje de scripting llamado JScript, que era muy similar a JavaScript pero tenía algunas diferencias clave.

## La era de la dominación web

A finales de los años 90 y principios de los 2000, JavaScript se convirtió en un lenguaje esencial para el desarrollo web. Con el crecimiento de las aplicaciones web y la necesidad de interactividad en los sitios, JavaScript se utilizaba ampliamente para realizar tareas como validación de formularios, animaciones y manipulación del DOM (Document Object Model).

### AJAX y el resurgimiento de JavaScript

En 2005, Jesse James Garrett acuñó el término "AJAX" (Asynchronous JavaScript and XML), que revolucionó la forma en que se construían las aplicaciones web. AJAX permitió actualizar partes específicas de una página sin tener que recargarla por completo, brindando una experiencia más rápida y fluida a los usuarios. Esto impulsó el resurgimiento de JavaScript y su popularidad creció aún más.
## El auge de los frameworks y bibliotecas

 En los últimos años, el ecosistema de JavaScript ha explotado con el desarrollo de numerosos frameworks y bibliotecas populares, como AngularJS, React, y Vue.js. Estas herramientas han simplificado el desarrollo web y han llevado a la creación de apliciones a otro nivel.`;

const info = `import me from '../app/avatar.jpg';

export const name = '<Billy Andrys/>';
export const avatar = me;
export const about = () => {
  return (
    <p>
      <b>"Si quieres aprender, empiezan por enseñar" </b>
        Séneca.
    </p>
  );
};
export const bio = () => {
  return (
    <div>
      ¡Bienvenido al apasionante mundo de la programación basada en tecnología Javascript y
       el desarrollo web! En este blog, exploraremos los aspectos más
        relevantes y emocionantes de este campo en constante evolución.
        <br/>
        <b>La red informática mundial​ o Web (World Wide Web).</b>
        <br/>
        La programación basada en Javascript es esencial para el desarrollo web moderno. Desde la creación de interacciones dinámicas en sitios web hasta el desarrollo de aplicaciones web de alto rendimiento, Javascript se ha convertido en el lenguaje de programación preferido por los desarrolladores.<br/>
        A medida que el ecosistema web se ha expandido, también lo ha hecho el alcance de Javascript. Hoy en día, es común encontrarlo en una amplia variedad de entornos, como el frontend y el backend, gracias a tecnologías como Node.js. Esto ha permitido a los desarrolladores construir aplicaciones web de gran escala y aplicaciones móviles híbridas, todo con un solo lenguaje.<br/>
        Además de los aspectos técnicos, también exploraremos las mejores prácticas de desarrollo web, consejos y trucos, y compartiremos recursos y herramientas útiles que te ayudarán en tu viaje como desarrollador de Javascript.<br/>
        Así que si estás emocionado por aprender más sobre programación basada en Javascript y el desarrollo web en general, ¡has llegado al lugar correcto! ¡Acompáñanos en este apasionante viaje mientras desbloqueamos el potencial de Javascript y exploramos las maravillas del desarrollo web moderno!
        
    </div>
  );
};
`;


const about  = `import me from '../app/about/page'`;

// const  about  = `export default function AboutPage() {
//   return (
//     <section>
//       <h1 className="font-bold text-3xl font-serif">About Me</h1>
//       <p className="my-5 text-neutral-800 dark:text-neutral-200">
//         This is my about page.
//       </p>
//     </section>
//   );
// }s
// `;

const deleteFolderRecursive = async (path) => {
  const stat = await fs.stat(path);
  if (stat.isDirectory()) {
    const files = await fs.readdir(path);
    await Promise.all(
      files.map((file) => deleteFolderRecursive(`${path}/${file}`))
    );
    await fs.rmdir(path);
  } else {
    await fs.unlink(path);
  }
};

(async () => {
  dotenv.config();

  if (process.env.IS_TEMPLATE === 'false') {
    // This means it's not the template, it's my legit site
    // I orderride the env variable for my site. This means that when
    // folks clone this repo for the first time, it will delete my personal content
    return;
  }

  const libDir = path.join(process.cwd(), 'lib');
  const contentDir = path.join(process.cwd(), 'content');
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const aboutDir = path.join(process.cwd(), 'app', 'about');

  await deleteFolderRecursive(contentDir);
  await deleteFolderRecursive(imagesDir);
  await fs.mkdir(contentDir);
  await fs.writeFile(path.join(contentDir, 'inicios.mdx'), template);
  await fs.writeFile(path.join(libDir, 'info.tsx'), info);
  await fs.writeFile(path.join(aboutDir, 'page.tsx'), about);
})();

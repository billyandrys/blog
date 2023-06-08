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

const info = `import me from '../app/placeholder.jpg';

export const name = 'Your Name';
export const avatar = me;
export const about = () => {
  return (
    <>
      Hey, I'm a developer who loves Next.js. I work at BigCo or CoolStartup as a Software Engineer.
    </>
  );
};
export const bio = () => {
  return (
    <>
      When I'm not coding, I'm probably playing video games or watching anime. I also love to travel and explore new places.
    </>
  );
};
`;

const about = `export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        This is my about page.
      </p>
    </section>
  );
}
`;

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

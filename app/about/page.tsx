import type { Metadata } from 'next';
import {
  GitHubIcon,
  YoutubeIcon,
  ArrowIcon,
  TwitterIcon,
  LinkendIn
} from 'components/icons';

export const metadata: Metadata = {
  title: 'About',
  description: 'Acerca de mí',
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Acerca de mí</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
      Soy un enamorado de la programación, amante de JavaScript y todo los relacionado con desarrollo web.
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
        <b>Billy Andrys Castro Cortina </b>, Me he titulado en Tecnología en
          análisis y desarrollo de sistemas de
          información, con una visón general
          sobre los proceso y desarrollo de
          software.<br/>
          Motivado y creativo con una visón general
          sobre los proceso y desarrollo de software, con capacidad analítica a la resolución
          de problemas. Poseo un fuerte enfoque en la usabilidad y la experiencia del usuario. 
        </p>
        
        <p>
        Mi acercamiento a la programación fue con Visual Basic .NET Framework 3.5, una experiencia
        bastante amigable en el desarrollo, donde adquirí las bases de la programación: algoritmos,
        estructuras de datos, programación orientada a objetos (POO), programación funcional (PF), entre otros. Durante ese tiempo, desarrollé una aplicación de escritorio en VB con una base de datos SQL Server 2005, que consistía en un inventario de equipos informáticos para el mismo instituto.
        </p>
        <p>
        Posteriormente, comencé a tener interés en el desarrollo web y aprendí lenguajes como PHP y Java. Sin embargo, fue JavaScript quien me cautivó por completo. Desde entonces, he seguido de cerca sus avances y evolución en el mundo del desarrollo web.
        </p>
        
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
           <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/BillyAndrys"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <TwitterIcon />
              <div className="ml-3">Twitter</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/billyandrys"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <GitHubIcon />
              <div className="ml-3">GitHub</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/billyandrys/"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <LinkendIn />
              <div className="ml-3">LinkendIn</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

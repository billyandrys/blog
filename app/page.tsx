import Link from 'next/link';
import Image from 'next/image';
import { getBlogViews, getTweetCount, getStarCount } from 'lib/metrics';
import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
  ViewsIcon,
  LinkendIn
} from 'components/icons';
import { name, about, bio, avatar } from 'lib/info';

export const revalidate = 60;

export default async function HomePage() {
  // let  views
  // //, tweetCount;

  // try {
  //   [ views] = await Promise.all([
  //     //getStarCount(),
  //     getBlogViews(),
  //     //getTweetCount(),
  //   ]);
  // } catch (error) {
  //   console.error(error);
  // }

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif text-sky-400">{name}</h1>
      <div className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </div>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full grayscale"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/billyandrys"
            className="flex items-center gap-2"
          >
            <GitHubIcon />
           
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/billyandrys/"
            className="flex items-center gap-2"
          >
            <LinkendIn />
           
          </a>

        </div>
      </div>
      <div className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </div>
      
    </section>
  );
}

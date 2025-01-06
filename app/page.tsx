import Link from 'next/link';
import { ReactElement } from 'react';
import Image from 'next/image';

import { ArticleLink } from './components/article-link';
import clsx from 'clsx';
import { getAllPosts } from '@/lib/articles';
import { Title } from '@/app/components/title';

export default async function Home() {
  const posts = await getAllPosts({
    includeDrafts: process.env.NODE_ENV === 'development',
  });

  return (
    <main className="px-4 md:px-0">
      <section className="pb-14 border-b border-slate-300 mb-14">
        <h1 className="font-semibold text-4xl mb-4 text-white">
          Hi, I'm Ankit.
          <span className="block text-slate-500 font-normal text-2xl">
            Software engineer based in Bengaluru, India.
          </span>
        </h1>
        <p className="text-slate-300 text-lg md:text-xl leading-normal">
          I specialize in blending engineering expertise with strategic insight to help businesses design and enhance their software solutions.

          With over four years of experience in software development, 
          I bring a unique combination of hands-on technical skills and high-level guidance. 
          My goal is to craft solutions that are both innovative and aligned with your business vision.
        </p>
        <p className="text-slate-950 dark:text-slate-300 text-lg md:text-xl leading-normal bg-slate-200 dark:bg-slate-800 p-4 rounded-lg text-center mt-4">Together, we can create something remarkable.</p>
        <Link
          href="/about"
          className="group bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 transition-colors inline-block mt-8 font-mono text-xs font-semibold rounded-full px-8 py-3 text-white dark:text-slate-950"
        >
          More Information{' '}
          <span className="inline-block group-hover:translate-x-2 transition-transform">
            →
          </span>
        </Link>
        <Link
          href="/resume.pdf"
          target="_blank"
          className="group bg-white hover:bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 transition-colors inline-block mt-8 ml-4 font-mono text-xs font-semibold rounded-full px-8 py-3 text-slate-950 dark:text-white"
        >
          Read CV{' '}
          <span className="inline-block group-hover:translate-y-0.5 transition-transform">
            ↓
          </span>
        </Link>
      </section>


      <section className="pt-10 pb-16">
        <Title as="h2" variant="secondary" className="mb-8">
          Recent Writing
        </Title>
        <div className="divide-y">
          {posts.slice(0, 3).map((post) => {
            return (
              <ArticleLink
                key={post?.meta.title}
                href={post.href}
                title={post.meta.title}
                date={post?.date}
                summary={post.meta.summary}
              />
            );
          })}
        </div>
        <Link
          href="/posts"
          className="group bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 transition-colors inline-block mt-8 font-mono text-xs font-semibold rounded-full px-8 py-3 text-white dark:text-slate-950"
        >
          View More Posts{' '}
          <span className="inline-block group-hover:translate-x-2 group-hover:-translate-y-0.5 transition-transform">
            →
          </span>
        </Link>
      </section>
    </main>
  );
}

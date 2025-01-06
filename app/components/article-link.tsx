import { Title } from '@/app/components/title';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  title: string;
  date: string;
  summary: string;
  href: string;
}

export const ArticleLink: FC<Props> = ({ title, date, summary, href }) => {
  return (
    <Link 
      href={href} 
      className="flex flex-col gap-4 py-8 first:pt-0 transition-colors hover:bg-slate-800/50 px-4 -mx-4 rounded-lg"
    >
      <div className="flex flex-col">
        <Title as="h2" variant="secondary">
          {title}
        </Title>
        <span className="text-slate-400 text-sm tracking-tight font-mono block mt-2">
          Published on{' '}
          <time dateTime={date}>
            {new Intl.DateTimeFormat('en-GB', {
              dateStyle: 'medium',
            }).format(new Date(date))}
          </time>
        </span>

        <p className="mt-2 text-slate-300 text-base">{summary}</p>
      </div>
    </Link>
  );
};

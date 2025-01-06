import { PageHeader } from '@/app/components/page-header';
import { Title } from '@/app/components/title';
import Image from 'next/image';
import Link from 'next/link';

const experience: {
  company: string;
  role: string;
  date: string;
  logo: string;
}[] = [
  {
    company: 'OpenText',
    role: 'Software Engineer 2',
    date: 'January 2024 → Present',
    logo: '/opentext.png',
  },
  {
    company: 'Epsilon',
    role: 'Software Engineer 1/2',
    date: 'January 2021 → January 2024',
    logo: '/epsilon.png',
  },
  {
    company: 'KLA + ',
    role: 'Software Engineer Intern',
    date: 'May 2020 → Jun 2020',
    logo: '/kla.png',
  },
];

export default async function AboutPage() {
  return (
    <main className="px-4 md:px-0">
      <PageHeader title="About Me" />
      <section className="pb-8 prose prose-lg prose-invert">
        <p>
          Hi there, I&apos;m Ankit. <br />
          Building innovative solutions and collaborating with teams to bring impactful ideas to life throw end to end software development.
        </p>
        <p>
        Currenly i am working with OpenText,Engaged in the progressive advancement of features within OpenText’s Enterprise Content Manager Project, contributing to both frontend and backend development initiatives.


        </p>

        <p>
          I also worked with Epsilon (A Publicis Groupe Company) for 3 years where i was part of 
          core development team of Epsilon's internal product Epsilon Data Helath monitring tool. 
          My responsibilities included building the frontend and backend for the product.
        </p>

        <p>
        I've always found myself at the intersection of design and engineering, united by a single passion: creating things that people genuinely love to use.
        </p>

        <p>
          If you&apos;re interested in working together, feel free to reach out
          to me here:{' '}
          <Link href="mailto:contactankitthakur@gmail.com">contactankitthakur@gmail.com</Link>.
        </p>
      </section>

      <section>
        <Title as="h2" variant="secondary" className="mb-4 mt-8 text-slate-200">
          Experience
        </Title>

        <div className="divide-y divide-slate-700">
          {experience.map((exp) => {
            return (
              <div className="flex gap-4 py-6" key={exp.date}>
                <Image
                  width={56}
                  height={56}
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-14 h-14 rounded-xl"
                />
                <div className="flex flex-col col-span-9">
                  <span className="text-slate-200 text-xl font-semibold">
                    {exp.company}
                  </span>
                  <span className="text-slate-300 text-lg">
                    {exp.role}
                  </span>
                  <span className="block mt-4 text-slate-400 col-span-2 text-sm font-medium tracking-tighter font-mono">
                    {exp.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <Link
          href="/resume.pdf"
          target="_blank"
          className="block my-8 text-slate-400 hover:text-white transition-colors duration-200 text-sm font-medium"
        >
          Download resume →
        </Link>
      </section>

    </main>
  );
}

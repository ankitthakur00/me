import { PageHeader } from '@/app/components/page-header';
import { Title } from '@/app/components/title';
import Link from 'next/link';

const contact: {
  method: string;
  link: string;
  label: string;
}[] = [
  {
    method: 'Email',
    link: 'mailto:contactankitthakur@gmail.com',
    label: 'contactankitthakur@gmail.com',
  },
  {
    method: 'Twitter',
    link: 'https://twitter.com/ankitthakur00',
    label: '@ankitthakur00',
  },
  {
    method: 'GitHub',
    link: 'https://github.com/ankitthakur00',
    label: 'git/ankitthakur00',
  },
  {
    method: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ankitthakur00/',
    label: 'in/ankitthakur00',
  },
];
export default async function InfoPage() {
  return (
    <main className="px-4 md:px-0">
      <PageHeader title="Contact" />
      <section className="pb-8">
        <p className="text-lg mb-4 text-slate-300">
          If you&apos;d like to get in touch, you can reach me using the
          following methods. Please note, that I&apos;m not currently available
          for freelance projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contact.map((contactMethod) => {
            return (
              <div className="flex flex-col" key={contactMethod.method}>
                <Title as="h2" variant="tertiary">
                  {contactMethod.method}
                </Title>
                <Link href={contactMethod.link} className="text-slate-300 hover:text-slate-100">
                  {contactMethod.label}
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

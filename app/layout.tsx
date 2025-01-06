import './assets/globals.css';

import { Metadata } from 'next';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local';
import { JetBrains_Mono } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import Image from 'next/image';
import nextConfig from '../next.config.mjs';

import clsx from 'clsx';
import { getImagePath } from '@/lib/images';

const SaansFont = localFont({
  src: './saans-font.woff2',
  display: 'swap',
});

const JetBrainsMonoFont = JetBrains_Mono({
  display: 'swap',
  variable: '--font-monospace',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ankit Kumar - Software Engineer',
  description:
    'Ankit Kumar is a software engineer based in INDIA, Bringing Ideas to Life Through Software.',
  twitter: {
    card: 'summary_large_image',
    creator: '@ankitthakur00',
    images: [`${nextConfig.basePath}/logo2.png`],
    title: 'Ankit Kumar - Software Engineer',
  },
  openGraph: {
    title: 'Ankit Kumar - Software Engineer',
    images: [
      {
        url: `${nextConfig.basePath}/logo2.png`,
        width: 1200,
        height: 630,
        alt: 'Ankit Kumar - Software Engineer',
      },
    ],
    siteName: 'Ankit Kumar - Software Engineer',
  },
  metadataBase: new URL('https://ankitthakur00.github.io/me'),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ankit Kumar',
  image: 'https://ankitthakur00.github.io/me/avatar.jpeg',
  url: 'https://ankitthakur00.github.io/me',
  jobTitle: 'Software Engineer',
  sameAs: [
    'https://twitter.com/ankitthakur00',
    'https://www.github.com/ankitthakur00',
    'https://www.linkedin.com/in/ankitthakur00/',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={clsx(
          SaansFont.className,
          JetBrainsMonoFont.variable,
          'bg-slate-950 text-slate-200'
        )}
      >
        <div className="max-w-2xl lg:max-w-xl mx-auto">
          <header className="pt-8 md:pt-16 pb-16 px-4 md:px-0 flex justify-between">
            <Link href="/">
              <Image 
                src={getImagePath('logo2.png')}
                alt="AK" 
                width={64}
                height={64}
                className="w-auto hover:opacity-70 transition-opacity"
              />
            </Link>
            <nav className="flex gap-4">
              <Link
                href="/about"
                className="text-slate-200 text-sm tracking-tighter font-mono font-semibold hover:text-slate-400 transition-colors"
              >
                CV
              </Link>
              <Link
                href="/posts"
                className="text-slate-200 text-sm tracking-tighter font-mono font-semibold hover:text-slate-400 transition-colors"
              >
                Blogs
              </Link>
              <Link
                className="text-slate-200 text-sm tracking-tighter font-mono font-semibold hover:text-slate-400 transition-colors"
                href="/contact"
              >
                Contact
              </Link>
            </nav>
          </header>
          {children}
          <footer className="px-4 md:px-0 border-t border-slate-800 py-8 text-slate-400 font-mono text-xs tracking-tight flex justify-between">
            <p>
              &copy;{new Date().getFullYear()} Ankit Kumar
            </p>
          </footer>
        </div>
        <Analytics />
        <GoogleAnalytics gaId="" />
      </body>
    </html>
  );
}

import './assets/globals.css';

import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local';
import { JetBrains_Mono } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import nextConfig from '../next.config.mjs';

import clsx from 'clsx';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';

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
    <html lang="en" suppressHydrationWarning>
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
          'bg-background text-foreground min-h-screen flex flex-col transition-colors duration-300'
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <GoogleAnalytics gaId="" />
      </body>
    </html>
  );
}

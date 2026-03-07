'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { content } from '@/app/data/content';
import { clsx } from 'clsx';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}

export function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity">
                    {/* You might want to use an image here if available in content.ts, or just text */}
                    {content.meta.title.split('-')[0].trim()}
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    {content.navigation.map((item) => {
                        const isDownload = 'download' in item && item.download;
                        const basePath = process.env.NODE_ENV === 'production' ? '/me' : '';
                        const href = isDownload ? `${basePath}${item.href}` : item.href;
                        
                        if (isDownload) {
                            return (
                                <a
                                    key={item.href}
                                    href={href}
                                    download="CV_AnkitKumar"
                                    className={clsx(
                                        'text-sm font-medium transition-colors hover:text-primary text-muted-foreground'
                                    )}
                                >
                                    {item.name}
                                </a>
                            );
                        }

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={clsx(
                                    'text-sm font-medium transition-colors hover:text-primary',
                                    pathname === item.href
                                        ? 'text-primary'
                                        : 'text-muted-foreground'
                                )}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                    <div className="border-l border-border h-5 mx-2" />
                    <ThemeToggle />
                </div>

                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    {/* Mobile Menu Button */}
                    <button
                        className="p-2 text-muted-foreground hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 18" /></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-border bg-background">
                    <div className="flex flex-col py-4 px-6 space-y-4">
                        {content.navigation.map((item) => {
                            const isDownload = 'download' in item && item.download;
                            const basePath = process.env.NODE_ENV === 'production' ? '/me' : '';
                            const href = isDownload ? `${basePath}${item.href}` : item.href;

                            if (isDownload) {
                                return (
                                    <a
                                        key={item.href}
                                        href={href}
                                        download="CV_AnkitKumar"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={clsx(
                                            'text-sm font-medium transition-colors hover:text-primary text-muted-foreground'
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                );
                            }

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={clsx(
                                        'text-sm font-medium transition-colors hover:text-primary',
                                        pathname === item.href
                                            ? 'text-primary'
                                            : 'text-muted-foreground'
                                    )}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
}

import { Post } from '@/lib/articles';

export const createPostJsonLd = (post: Post) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.meta.title,
    url: `https://ankitthakur00.github.io/me/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: [
      {
        '@type': 'Person',
        name: 'Alex Pate',
        url: 'https://ankitthakur00.github.io/me',
      },
    ],
  };
};

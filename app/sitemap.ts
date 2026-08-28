import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.modulrsignal.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://www.modulrsignal.com/learn', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.modulrsignal.com/signal-shift', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
  ];
}

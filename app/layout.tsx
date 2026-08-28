import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.modulrsignal.com'),
  title: 'Modulr IQ — Supply Intelligence for Agentic Advertising',
  description: 'Make podcast, CTV, and streaming media discoverable to AI buying systems with machine-readable supply intelligence.',
  keywords: ['agentic advertising', 'supply intelligence', 'AI advertising', 'podcast advertising', 'CTV advertising', 'machine-readable media', 'supply descriptors'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'The market doesn’t need more AI-generated noise. It needs meaning.',
    description: 'Modulr is the supply intelligence layer for agentic advertising.',
    url: 'https://www.modulrsignal.com',
    siteName: 'Modulr',
    type: 'website',
    images: [{ url: '/og-v2.png', width: 1729, height: 910, alt: 'The market doesn’t need more AI-generated noise. It needs meaning.' }],
  },
  twitter: { card: 'summary_large_image', title: 'The market doesn’t need more AI-generated noise. It needs meaning.', description: 'Modulr is the supply intelligence layer for agentic advertising.', images: ['/og-v2.png'] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'Organization', name: 'Modulr', alternateName: 'Modulr IQ', url: 'https://www.modulrsignal.com',
          description: 'The supply intelligence layer for agentic advertising.',
          sameAs: ['https://www.linkedin.com/company/modulrai']
        }) }} />
      </body>
    </html>
  );
}

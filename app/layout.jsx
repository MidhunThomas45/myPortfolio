import './globals.css';
import { personalInfo } from '@/lib/data';

export const metadata = {
  metadataBase: new URL('https://my-portfolio-alpha-blond-59.vercel.app'),
  title: `${personalInfo.name} | ${personalInfo.role}`,
  description: personalInfo.bio,
  keywords: [
    "Midhun Thomas",
    "AI Engineer",
    "ML Engineer",
    "Data Scientist",
    "Artificial Intelligence",
    "Machine Learning",
    "FastAPI",
    "PyTorch",
    "TensorFlow",
    "Azure AI",
    "LLM",
    "RAG",
    "Portfolio"
  ],
  authors: [{ name: personalInfo.name, url: "https://my-portfolio-alpha-blond-59.vercel.app" }],
  creator: personalInfo.name,
  openGraph: {
    title: `${personalInfo.name} | ${personalInfo.role}`,
    description: personalInfo.bio,
    url: 'https://my-portfolio-alpha-blond-59.vercel.app',
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: '/thomas.jpeg',
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - AI/ML Engineer`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} | ${personalInfo.role}`,
    description: personalInfo.bio,
    images: ['/thomas.jpeg'],
  },
  verification: {
    google: 'ZYNfZwMUiNwSMF3EMvY85bid2BVvB12uMMRfUNWw75A',
  },
  icons: {
    icon: '/Photo.png',
    apple: '/Photo.png',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    jobTitle: personalInfo.role,
    description: personalInfo.bio,
    url: 'https://my-portfolio-alpha-blond-59.vercel.app',
    sameAs: [
      personalInfo.github,
      personalInfo.linkedin,
      personalInfo.instagram,
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Generative AI',
      'Python',
      'PyTorch',
      'TensorFlow',
      'FastAPI',
      'Azure Cloud AI'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Adam Innovations Co., Ltd',
    },
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#090b10] text-[#f3f4f6] antialiased selection:bg-gold-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}

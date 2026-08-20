import { projects } from '@/lib/data';

export default async function sitemap() {
  const baseUrl = 'https://my-portfolio-alpha-blond-59.vercel.app';

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/project/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...projectUrls,
  ];
}

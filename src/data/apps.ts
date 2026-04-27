export interface App {
  title: string;
  description: string;
  url: string;
  icon: string;
}

export const apps: App[] = [
  {
    title: 'App One',
    description: 'A placeholder for your first application.',
    url: 'https://example.com',
    icon: '📱',
  },
  {
    title: 'App Two',
    description: 'A placeholder for your second application.',
    url: 'https://example.com',
    icon: '🛠️',
  },
  {
    title: 'App Three',
    description: 'A placeholder for your third application.',
    url: 'https://example.com',
    icon: '🎯',
  },
];

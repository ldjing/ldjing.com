export interface App {
  title: string;
  description: string;
  url: string;
  icon: string;
}

export const apps: App[] = [
  {
    title: 'Contura',
    description: '3D body visualizer with AI shape prediction. Track fitness progress privately, on-device.',
    url: 'https://getcontura.com',
    icon: '🏃',
  },
  {
    title: 'JustPad',
    description: 'Minimalist single-page note app. No folders, no tags — just open and write.',
    url: 'https://apps.apple.com/us/app/justpad-single-page-note-app/id6751774054',
    icon: '📝',
  },
  {
    title: 'BuzzCam',
    description: 'ProRAW burst camera for solo shooters. Place, tap, and never miss the perfect frame.',
    url: 'https://apps.apple.com/us/app/buzzcam-proraw-burst-camera/id6758300007',
    icon: '📷',
  },
  {
    title: 'MemoryLens',
    description: 'Overlay a reference photo on your camera viewfinder to recreate past compositions.',
    url: 'https://apps.apple.com/us/app/memorylens-photo-overlay-aid/id6751618297',
    icon: '🔭',
  },
  {
    title: 'SaltTrack',
    description: 'Track daily sodium intake against WHO guidelines for healthier living.',
    url: 'https://apps.apple.com/us/app/salttrack-salt-intake-tracker/id6749192138',
    icon: '🧂',
  },
  {
    title: 'BallDecide',
    description: 'Modern Magic 8 Ball with Home Screen widget, haptics, and Dark Mode.',
    url: 'https://apps.apple.com/us/app/balldecide-magic-8ball-fortune/id6751168518',
    icon: '🔮',
  },
];

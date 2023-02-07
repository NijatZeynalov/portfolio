export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  youtube = 'youtube',
  email = 'email',
  buymeacoffee = 'buymeacoffee',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '',
  site: 'nijatzeynalov.com',
  calendly: 'https://calendly.com/nijatzeynalov98298',
  links: {
    github: 'https://github.com/nijatzeynalov',
    linkedin: 'https://www.linkedin.com/in/nijat-zeynalov-064163142/',
    twitter: 'https://twitter.com',
    youtube: 'https://www.youtube.com',
    email: 'mailto:nijatzeynalov98298@gmail.com',
    buymeacoffee: 'https://www.buymeacoffee.com',
  },
};

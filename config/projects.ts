import { Maybe, Tuple } from '../types';

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
};

export interface SubProject {
  title: string;
  description: string;
  repository: Maybe<string>;
  deployment: Deployment;
}

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  title: string;
  slug: string;
  website: string;
  banner: string;
  description: string;
  shortDescription?: string;
  repository: Maybe<string>;
  deployment: Deployment;
  subProjects: SubProject[];
}

export const projects: Project[] = [
  {
    title: 'HyperTrade',
    slug: 'hypertrade',
    banner: '/static/projects/hypertrade/banner.png',
    website: 'https://github.com/karanpratapsingh/HyperTrade',
    description:
      'Ready to deploy, distributed cryptocurrency trading bot. The idea of this project originally came from a script I used to automate buying and selling of fiat assets. I was curious and wanted to scale it into a real system which can execute trades for me. I had a lot of fun building this. I got to play with lots of different technologies while growing my financial knowledge.',
    shortDescription:
      'Ready to deploy, distributed cryptocurrency trading bot.',
    repository: 'https://github.com/karanpratapsingh/HyperTrade',
    deployment: {
      web: 'https://github.com/karanpratapsingh/HyperTrade',
    },
    subProjects: [],
  },
  {
    title: 'Peapods',
    slug: 'peapods',
    banner: '/static/projects/peapods/banner.png',
    website: 'https://peapods.com',
    description: `Peapods is a new type of decentralized social network that values real human interaction. The platform helps you become closer with your friends and make new ones. We value kindness, friendship, user privacy, and genuine connection. Together we can cure boredom, conquer loneliness, and fulfill the original promise of the internet to connect us in ways that matter.`,
    shortDescription:
      'Peapods is a new type of decentralized social network that values real human interaction.',
    repository: null,

    screenshots: [],
    deployment: {
      web: 'https://peapods.com',
    },
    subProjects: [],
  },
  {
    title: 'Proximity',
    slug: 'proximity',
    website: 'https://proximity-mobile.web.app',
    banner: '/static/projects/proximity/banner.jpeg',
    description:
      'An open source social media app that does not use your data against you.',
    repository: 'https://github.com/karanpratapsingh/Proximity',
    deployment: {
      web: 'https://proximity-mobile.web.app',
      android:
        'https://play.google.com/store/apps/details?id=com.proximity.app',
      ios: 'https://apps.apple.com/us/app/proximity-app/id1489041006',
    },
    subProjects: [],
  },
  {
    title: 'Velvet Live',
    slug: 'velvet-live',
    banner: '/static/projects/velvet-live/banner.png',
    website: 'https://boom.london',
    description: `Connect with shoppers who need your advice and expertise when they're shopping online. Assist and sell to customers the same way you would in-store, but now through chat and video straight from the app.`,
    repository: null,
    deployment: {
      web: 'https://boom.london',
      android: 'https://play.google.com/store/apps/details?id=app.boom.mobile',
    },
    subProjects: [],
  },
  {
    title: 'Stewards',
    slug: 'stewards',
    website: 'https://stewards.app',
    repository: null,
    banner: '/static/projects/stewards/banner.png',
    description:
      'Mobile ordering solution with robot delivery. Stewards also provides variety of tools like staff application to manage orders, self checkout solution and admin dashboard.',
    deployment: {
      web: 'https://stewards.app',
      android:
        'https://play.google.com/store/apps/details?id=app.stewards.customer',
      ios: 'https://apps.apple.com/in/app/stewards-order-to-your-desk/id1479412118',
    },
    subProjects: [
      {
        title: 'Staff Management',
        repository: null,
        description:
          'Staff app for stewards restaurant staff, easily update menu, product availability and take live orders from customers.',
        deployment: {
          android:
            'https://play.google.com/store/apps/details?id=app.stewards.staff&hl=en',
        },
      },
      {
        title: 'Admin Dashboard',
        repository: null,
        description:
          'Staff administration app for stewards restaurant partners. This helps restaurant administrators to easily manage orders, receipts, tables, restaurant info etc.',
        deployment: {
          web: 'https://manage.stewards.app',
        },
      },
      {
        title: 'Self Checkout',
        repository: null,
        description:
          "Stewards self checkout solution for customers who don't like waiting. Available on demand for iPad and tablets.",
        deployment: {},
      },
    ],
  },
  {
    title: 'Celebrify',
    slug: 'celebrify',
    website: 'https://celebrify.in',
    banner: '/static/projects/celebrify/banner.jpeg',
    description:
      'Get personalized videos from your favorite celebrities at just one click. Request personalized video messages for your friends, family, loved ones or even yourself. Be it a doubt or even a special wish from your favorite celebrity.',
    repository: null,
    deployment: {
      web: 'https://celebrify.in',
      android:
        'https://play.google.com/store/apps/details?id=com.celebrify.app',
      ios: 'https://apps.apple.com/us/app/celebrify-app/id1469588198',
    },
    subProjects: [],
  },
  {
    title: 'KCards',
    slug: 'kcards',
    banner: '/static/projects/kcards/banner.jpeg',
    description:
      'KCards is your one-stop replacement for paper cards. KCards help you to easily share your cards with other users and get real-time analytics on the shared cards.',
    repository: 'https://github.com/karanpratapsingh/KCards',

    deployment: {
      web: 'https://kcards-server.herokuapp.com',
      android: 'https://play.google.com/store/apps/details?id=com.kcards',
      ios: 'https://itunes.apple.com/us/app/kcards/id1461733524',
    },
    website: 'https://kcards-server.herokuapp.com',
    subProjects: [],
  },
];

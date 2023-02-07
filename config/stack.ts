import { Colors } from './colors';

export enum Stack {
  // Languages
  go,
  typescript,
  javascript,
  python,

  // Frontend
  react,
  reactnative,

  // Backend
  graphql,
  node,
  django,

  // Cloud
  aws,
  gcp,

  // Messaging
  nats,
  kafka,

  // Databases
  arangodb,
  redis,
  postgres,
  mongo,

  // Tools
  docker,
  kubernetes,
  terraform,
}

export const WorkStack = [
  Stack.go,
  Stack.typescript,
  Stack.python,
  Stack.react,
  Stack.aws,
  Stack.gcp,
  Stack.kubernetes,
  Stack.docker,
  Stack.terraform,
  Stack.nats,
  Stack.kafka,
  Stack.graphql,
  Stack.postgres,
  Stack.redis,
  Stack.arangodb,
  Stack.reactnative,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.typescript]: {
    value: 'Python',
    color: Colors.typescript,
  },
  [Stack.javascript]: {
    value: 'AWS',
    color: Colors.javascript,
  },
  [Stack.go]: {
    value: 'Docker',
    color: Colors.go,
  },
  [Stack.react]: {
    value: 'Linux',
    color: Colors.react,
  },
  [Stack.reactnative]: {
    value: 'Predictive Modeling',
    color: Colors.reactnative,
  },
  [Stack.graphql]: {
    value: 'TensorFlow',
    color: Colors.graphql,
  },
  [Stack.aws]: {
    value: 'PyTorch',
    color: Colors.aws,
  },
  [Stack.gcp]: {
    value: 'Computer Vision',
    color: Colors.gcp,
  },
  [Stack.python]: {
    value: 'SQL',
    color: Colors.python,
  },
  [Stack.node]: {
    value: 'NLP',
    color: Colors.node,
  },
  [Stack.django]: {
    value: 'Git',
    color: Colors.django,
  },
  [Stack.nats]: {
    value: 'MLFlow',
    color: Colors.nats,
  },
  [Stack.kafka]: {
    value: 'RabbitMQ',
    color: Colors.kafka,
  },
  [Stack.arangodb]: {
    value: 'Deep Learning',
    color: Colors.arangodb,
  },
  [Stack.postgres]: {
    value: 'PostgreSQL',
    color: Colors.postgres,
  },
  [Stack.redis]: {
    value: 'MLOps',
    color: Colors.redis,
  },
  [Stack.mongo]: {
    value: 'MongoDB',
    color: Colors.mongo,
  },
  [Stack.docker]: {
    value: 'Bert',
    color: Colors.docker,
  },
  [Stack.kubernetes]: {
    value: 'Web Scraping',
    color: Colors.kubernetes,
  },
  [Stack.terraform]: {
    value: 'OOP',
    color: Colors.terraform,
  },
};

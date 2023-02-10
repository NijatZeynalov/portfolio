export type CourseContent = {
  name: string;
  slug?: string;
  description?: string;
  content?: CourseContent[];
};


export interface Course {
  title: string;
  slug: string;
  banner: string;
  description: string;
  content: CourseContent[];
}

export const courseSlugMap = {
  go: 'Deep Learning with TensorFlow',
  'system-design': 'Machine Learning with Python',
  'aws':' AWS for Machine Learning',
};

export const courses: Course[] = [
  {
    title: 'Machine Learning with Python',
    slug: 'system-design',
    banner: '/static/courses/system-design/machine-learning-python-3.png',
    description:
      'Machine Learning is broad and fast-growing sub-field of Artificial Intelligence. This course introduces students to the basic concepts and techniques of Machine Learning that make students to more skilled.',
    content: [
    {
        name: 'Getting Started',
        content: [
          {
            name: 'Welcome to the course',
            slug: 'test',
          },
          {
            name: 'What will you get from the course?',
            slug: 'what-is-system-design',
          },
        ],
      },
      {
        name: 'Python fundamentals',

        content: [

          {

            name: 'Introduction to Python',

            slug: 'test',

          },

          {

            name: 'Data Structures in Python',

            slug: 'test',

          },

          {

            name: 'Python operators',

            slug: 'test',

          },

          {

            name: 'Loops (for, while)',

            slug: 'test',

          },

          {

            name: 'Functions',

            slug: 'test',

          },

          {

            name: 'Web scraping',

            slug: 'test',

          },

          {

            name: 'Regular expressions',

            slug: 'test',

          },

          {

            name: 'Writing and reading files',

            slug: 'test',

          },

          {

            name: 'Introduction to OOP',

            slug: 'test',

          },

        ],
      },
      {
 name: 'Foundational math, probability, statistics',

        content: [

          {

            name: 'Linear Algebra: Introduction to Linear Algebra',

            slug: 'test',

          },

          {

            name: 'Linear Algebra: Numpy arrays',

            slug: 'test',

          },

          {

            name: 'Linear Algebra: Vectors and Vector Arithmetic',

            slug: 'test',

          },

          {

            name: 'Linear Algebra: Matrices and Matrix Arithmetic',

            slug: 'test',

          },

          {

            name: 'Linear Algebra: Types of Matrices',

            slug: 'test',

          },

          {

            name: 'Linear Algebra: Matrix Operations',

            slug: 'test',

          },

          {

            name: 'Probability: Basics of Probability Theory',

            slug: 'test',

          },

          {

            name: 'Probability: Joint, Marginal, and Conditional Probability',

            slug: 'test',

          },

          {

            name: 'Probability: Bayes Theorem',

            slug: 'test',

          },

          {

            name: 'Statistics: Introduction to Statistics',

            slug: 'test',

          },

          {

            name: 'Statistics: Descriptive Statistics',

            slug: 'test',

          },

          {

            name: 'Statistics: Overview of statistical concepts',

            slug: 'test',

          },

          {

            name: 'Wrap-Up',

            slug: 'test',

          },

        ],

      },

      {
        name: 'Basic SQL commands for Machine Learning',
        content: [
         {

            name: 'Introduction to SQL',

            slug: 'test',

          },

          {

            name: 'Querying and filtering data in SQL',

            slug: 'test',

          },

          {

            name: 'Simple aggregations in SQL',

            slug: 'test',

          },

          {

            name: 'Grouping, filtering, and sorting',

            slug: 'test',

          },
        ],
      },
      {
        name: 'Chapter IV',
        content: [
          {
            name: 'Geohashing and Quadtrees',
            slug: 'geohashing-and-quadtrees',
          },
          {
            name: 'Circuit breaker ',
            slug: 'circuit-breaker',
          },
          {
            name: 'Rate Limiting',
            slug: 'rate-limiting',
          },
          {
            name: 'Service Discovery',
            slug: 'service-discovery',
          },
          {
            name: 'SLA, SLO, SLI',
            slug: 'sla-slo-sli',
          },
          {
            name: 'Disaster recovery',
            slug: 'disaster-recovery',
          },
          {
            name: 'Virtual Machines (VMs) and Containers',
            slug: 'virtual-machines-and-containers',
          },
          {
            name: 'OAuth 2.0 and OpenID Connect (OIDC)',
            slug: 'oauth2-and-openid-connect',
          },
          {
            name: 'Single Sign-On (SSO)',
            slug: 'single-sign-on',
          },
          {
            name: 'SSL, TLS, mTLS',
            slug: 'ssl-tls-mtls',
          },
        ],
      },
      {
        name: 'Chapter V',
        content: [
          {
            name: 'System Design Interviews',
            slug: 'system-design-interviews',
          },
          {
            name: 'URL Shortener',
            slug: 'url-shortener',
          },
          {
            name: 'WhatsApp',
            slug: 'whatsapp',
          },
          {
            name: 'Twitter',
            slug: 'twitter',
          },
          {
            name: 'Netflix',
            slug: 'netflix',
          },
          {
            name: 'Uber',
            slug: 'uber',
          },
        ],
      },
      {
        name: 'Appendix',
        content: [
          {
            name: 'Next Steps',
            slug: 'next-steps',
          },
          {
            name: 'References',
            slug: 'references',
          },
        ],
      },
    ],
  },
  {
    title: 'Deep Learning with TensorFlow',
    slug: 'go',
    banner: '/static/courses/go/deep-learning.png',
    description:
      'In this course, we will talk about the basics of neural networks and deep learning, how to use deep learning ConvNets, transfer learning, transformers -  a deep learning architecture that has revolutionized the traditional NLP.',
    content: [
      {
        name: 'Getting Started',
        content: [
          {
            name: 'Welcome to the course',
            slug: 'welcome-to-the-course',
          },
          {
            name: 'What is Go?',
            slug: 'what-is-go',
          },
          {
            name: 'Why learn Go?',
            slug: 'why-learn-go',
          },
          {
            name: 'Installation and Setup',
            slug: 'installation-and-setup',
          },
        ],
      },
      {
        name: 'Chapter I',
        content: [
          { name: 'Hello world', slug: 'hello-world' },
          {
            name: 'Variables and Data Types',
            slug: 'variables-and-data-types',
          },
          { name: 'String Formatting', slug: 'string-formatting' },
          { name: 'Flow Control', slug: 'flow-control' },
          { name: 'Functions', slug: 'functions' },
          { name: 'Modules', slug: 'modules' },
          { name: 'Packages', slug: 'packages' },
          { name: 'Workspaces', slug: 'workspaces' },
          { name: 'Useful Commands', slug: 'useful-commands' },
          { name: 'Build', slug: 'build' },
        ],
      },
      {
        name: 'Chapter II',
        content: [
          { name: 'Pointers', slug: 'pointers' },
          { name: 'Structs', slug: 'structs' },
          { name: 'Methods', slug: 'methods' },
          { name: 'Arrays and Slices', slug: 'arrays-and-slices' },
          { name: 'Maps', slug: 'maps' },
        ],
      },
      {
        name: 'Chapter III',
        content: [
          { name: 'Interfaces', slug: 'interfaces' },
          { name: 'Errors', slug: 'errors' },
          { name: 'Panic and Recover', slug: 'panic-and-recover' },
          { name: 'Testing', slug: 'testing' },
          { name: 'Generics', slug: 'generics' },
        ],
      },
      {
        name: 'Chapter IV',
        content: [
          { name: 'Concurrency', slug: 'concurrency' },
          { name: 'Goroutines', slug: 'goroutines' },
          { name: 'Channels', slug: 'channels' },
          { name: 'Select', slug: 'select' },
          { name: 'Sync Package', slug: 'sync-package' },
          {
            name: 'Advanced Concurrency Patterns',
            slug: 'advanced-concurrency-patterns',
          },
          { name: 'Context', slug: 'context' },
        ],
      },
      {
        name: 'Appendix',
        content: [
          { name: 'Next Steps', slug: 'next-steps' },
          { name: 'References', slug: 'references' },
        ],
      },
    ],
  },

{
    title: 'AWS for Machine Learning',
    slug: 'aws',
    banner: '/static/courses/go/deep-learning.png',
    description:
      'In this course, we will talk about the basics of neural networks and deep learning, how to use deep learning ConvNets, transfer learning, transformers -  a deep learning architecture that has revolutionized the traditional NLP.',
    content: [
      {
        name: 'Getting Started',
        content: [
          {
            name: 'Welcome to the course',
            slug: 'welcome-to-the-course',
          },
          {
            name: 'What is Go?',
            slug: 'what-is-go',
          },
          {
            name: 'Why learn Go?',
            slug: 'why-learn-go',
          },
          {
            name: 'Installation and Setup',
            slug: 'installation-and-setup',
          },
        ],
      },
      {
        name: 'Chapter I',
        content: [
          { name: 'Hello world', slug: 'hello-world' },
          {
            name: 'Variables and Data Types',
            slug: 'variables-and-data-types',
          },
          { name: 'String Formatting', slug: 'string-formatting' },
          { name: 'Flow Control', slug: 'flow-control' },
          { name: 'Functions', slug: 'functions' },
          { name: 'Modules', slug: 'modules' },
          { name: 'Packages', slug: 'packages' },
          { name: 'Workspaces', slug: 'workspaces' },
          { name: 'Useful Commands', slug: 'useful-commands' },
          { name: 'Build', slug: 'build' },
        ],
      },
      {
        name: 'Chapter II',
        content: [
          { name: 'Pointers', slug: 'pointers' },
          { name: 'Structs', slug: 'structs' },
          { name: 'Methods', slug: 'methods' },
          { name: 'Arrays and Slices', slug: 'arrays-and-slices' },
          { name: 'Maps', slug: 'maps' },
        ],
      },
      {
        name: 'Chapter III',
        content: [
          { name: 'Interfaces', slug: 'interfaces' },
          { name: 'Errors', slug: 'errors' },
          { name: 'Panic and Recover', slug: 'panic-and-recover' },
          { name: 'Testing', slug: 'testing' },
          { name: 'Generics', slug: 'generics' },
        ],
      },
      {
        name: 'Chapter IV',
        content: [
          { name: 'Concurrency', slug: 'concurrency' },
          { name: 'Goroutines', slug: 'goroutines' },
          { name: 'Channels', slug: 'channels' },
          { name: 'Select', slug: 'select' },
          { name: 'Sync Package', slug: 'sync-package' },
          {
            name: 'Advanced Concurrency Patterns',
            slug: 'advanced-concurrency-patterns',
          },
          { name: 'Context', slug: 'context' },
        ],
      },
      {
        name: 'Appendix',
        content: [
          { name: 'Next Steps', slug: 'next-steps' },
          { name: 'References', slug: 'references' },
        ],
      },
    ],
  },
];

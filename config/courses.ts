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
      name: 'Feature Engineering I',

        content: [

          {

            name: 'Variable Problems When Building ML Models',

            slug: 'test',

          },

          {

            name: 'Imputing Missing Data: Performing mean or median imputation',

            slug: 'test',

          },

          {

            name: 'Imputing Missing Data: Mode or frequent category imputation',

            slug: 'test',

          },

          {

            name: 'Imputing Missing Data: Adding a missing value indicator variable',

            slug: 'test',

          },

          {

            name: 'Imputing Missing Data: Performing multivariate imputation by chained equations',

            slug: 'test',

          },

          {

            name: 'Imputing Missing Data: Assembling an imputation pipeline',

            slug: 'test',

          },

          

          {

            name: 'Encoding Categorical Variables: Creating binary variables through one-hot encoding',

            slug: 'test',

          },

          {

            name: 'Encoding Categorical Variables: Replacing categories with counts or frequency of observations',

            slug: 'test',

          },

          {

            name: 'Encoding Categorical Variables: Encoding with the mean of the target',

            slug: 'test',

          },

          {

            name: 'Encoding Categorical Variables: Encoding with the Weight of Evidence',

            slug: 'test',

          },

          {

            name: 'Encoding Categorical Variables: Grouping rare or infrequent categories',

            slug: 'test',

          },

          {

            name: 'Encoding Categorical Variables: Performing binary encoding, feature hashing',

            slug: 'test',

          },

        ],

      },

      {
      name: 'Feature Engineering II',

      content: [ {

            name: 'Transforming Numerical Variables: Transforming variables with the logarithm',

            slug: 'test',

          },

          

          {

            name: 'Transforming Numerical Variables: Transforming variables with the reciprocal function',

            slug: 'test',

          },

          {

            name: 'Transforming Numerical Variables: Using square and cube root to transform variables',

            slug: 'test',

          },

          {

            name: 'Transforming Numerical Variables: Using power transformations on numerical variables',

            slug: 'test',

          },

          {

            name: 'Transforming Numerical Variables: Performing Box-Cox transformation on numerical variables',

            slug: 'test',

          },

          {

            name: 'Transforming Numerical Variables: Performing Yeo-Johnson transformation on numerical variables',

            slug: 'test',

          },

          {

            name: 'Performing Variable Discretization: Dividing the variable into intervals of equal width',

            slug: 'test',

          },

                   {

            name: 'Performing Variable Discretization: Sorting the variable values in intervals of equal frequency',

            slug: 'test',

          },

          {

            name: 'Performing Variable Discretization: Performing discretization followed by categorical encoding',

            slug: 'test',

          },

          {

            name: 'Performing Variable Discretization: Allocating the variable values in arbitrary intervals',

            slug: 'test',

          },

          {

            name: 'Performing Variable Discretization: Performing discretization with k-means clustering',

            slug: 'test',

          },

          {

            name: 'Performing Variable Discretization: Using decision trees for discretization',

            slug: 'test',

          },

          {

            name: 'Working with Outliers: Trimming outliers from the dataset',

            slug: 'test',

          },

                    {

            name: 'Working with Outliers: Performing winsorization',

            slug: 'test',

          },

          {

            name: 'Working with Outliers: Capping the variable at arbitrary maximum and minimum values',

            slug: 'test',

          },

          {

            name: 'Working with Outliers: Performing zero-coding – capping the variable values at zero',

            slug: 'test',

          },

          {

            name: 'Deriving Features from Dates and Time Variables: Extracting date and time parts from a datetime variable',

            slug: 'test',

          },

                    {

            name: 'Deriving Features from Dates and Time Variables: Capturing the elapsed time between datetime variables',

            slug: 'test',

          },

          {

            name: 'Performing Feature Scaling: Standardizing the features',

            slug: 'test',

          },

                    {

            name: 'Performing Feature Scaling: Performing mean normalization',

            slug: 'test',

          },

          {

            name: 'Performing Feature Scaling: Implementing maximum absolute scaling',

            slug: 'test',

          },

          {

            name: 'Performing Feature Scaling: Scaling to vector unit length',

            slug: 'test',

          },

        ],

      },
      {
        name: 'Feature Engineering III',
        content: [
{

            name: 'Building New Features Applying Mathematical Computations: Combining multiple features with statistical operations',

            slug: 'test',

          },

                   {

            name: 'Building New Features Applying Mathematical Computations: Combining pairs of features with mathematical functions',

            slug: 'test',

          },

          {

            name: 'Building New Features Applying Mathematical Computations: Performing polynomial expansion',

            slug: 'test',

          },

          {

            name: 'Building New Features Applying Mathematical Computations: Deriving new features with decision trees',

            slug: 'test',

          },

                    {

            name: 'Building New Features with Transactional and Time Series Data: Aggregating transactions with mathematical operations',

            slug: 'test',

          },

          {

            name: 'Building New Features Applying Mathematical Computations: Aggregating transactions in a time window',

            slug: 'test',

          },

                   {

            name: 'Building New Features Applying Mathematical Computations: Determining the number of local maxima and minima',

            slug: 'test',

          },

          {

            name: 'Building New Features Applying Mathematical Computations: Deriving time elapsed between time-stamped events',

            slug: 'test',

          },

          {

            name: 'Building New Features Applying Mathematical Computations: Creating features from transactions with Featuretools',

            slug: 'test',

          },

        ],
      },
      
        {
        name: 'Introduction to Machine Learning',
        content: [
          {
            name: 'What is Data Leakage? Data Preparation without Data Leakage',
            slug: 'test',
          },
          {
            name: 'Bias–variance tradeoff',
            slug: 'test',
          },
                   {
            name: 'Building Simple Linear model from stratch',
            slug: 'test',
          },
          {
            name: 'Building Simple Logistic Regression model from stratch',
            slug: 'test',
          },          {
            name: 'Classification and Regression Trees',
            slug: 'test',
          },
          {
            name: 'K-Nearest Neighbors',
            slug: 'test',
          },
                             {
            name: 'Support Vector Machines',
            slug: 'test',
          },
          {
            name: 'Unsupervised Learning',
            slug: 'test',
          },          {
            name: 'Semi-supervised Learning algorithms',
            slug: 'test',
          },
          {
            name: 'Handling with imbalanced dataset',
            slug: 'test',
          },
                    {
            name: 'Feature selection methods',
            slug: 'test',
          },          {
            name: 'Hyperparameter optimization (random search, grid search, halving)',
            slug: 'test',
          },
          {
            name: 'Hyperparameter optimization (Bayesian)',
            slug: 'test',
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
            slug: 'welcome-to-the-dl-course',
          },
          {
            name: 'What will you get from the course?',
            slug: 'what-will-you-get',
          },
        ],
      },
      {
        name: 'Neural Network Foundations with TF',
        content: [
          { name: 'What TensorFlow and Keras are?', slug: 'test' },
          {
            name: 'An introduction to neural networks',
            slug: 'test',
          },
          { name: 'The perceptron and multi-layer perceptron', slug: 'test' },
          { name: 'A real example: recognizing handwritten digits', slug: 'test' },
          { name: 'Activation functions', slug: 'test' },
          { name: 'Backpropagation', slug: 'test' },
          { name: 'Regularization methods', slug: 'test' },
        ],
      },
      {
        name: 'Regression and Classification',
        content: [
          { name: 'Regression with TF', slug: 'test' },
          { name: 'Classification using the TensorFlow Keras API', slug: 'test' },
          { name: 'Applying logistic regression to identify handwritten digits', slug: 'test' },
          { name: 'Applying linear regression to estimate the price of a house and Slices', slug: 'test' },
        ],
      },
      {
        name: 'Convolutional Neural Networks',
        content: [
          { name: 'Deep convolutional neural networks', slug: 'test' },
          { name: 'ConvNets in TensorFlow: The math behind CNN', slug: 'test' },
          { name: 'An example of a deep convolutional neural network', slug: 'test' },
          { name: 'Deep convolutional networks for large-scale image recognition', slug: 'test' },
          { name: 'Deep Inception V3 networks for transfer learning', slug: 'test' },
          { name: 'Other CNN architectures', slug: 'test' },
        ],
      },
      {
        name: 'Word Embeddings',
        content: [
          { name: 'Word embeddings – origins and fundamentals', slug: 'test' },
          { name: 'Distributed representations', slug: 'test' },
          { name: 'Creating Azerbaijani embedding with Gensim', slug: 'test' },
          { name: 'Exploring the embedding space with Gensim', slug: 'test' },
          { name: 'Character and subword embedding', slug: 'test' },
          {
            name: 'Word2Vec models: CBOW and Skip-gram arthitectures',
            slug: 'test',
          },
          { name: 'Language model-based embeddings: BERT, ULMFiT, GPT', slug: 'test' },
        ],
      },
      {
        name: 'Recurrent Neural Networks',
        content: [
          { name: 'The basic RNN cell', slug: 'test' },
          { name: 'RNN cell variants', slug: 'test' },
          { name: 'Encoder-decoder architectures – seq2seq', slug: 'test' },
          { name: 'Attention mechanism', slug: 'test' },
          { name: 'Text cleaning', slug: 'test' },
          { name: 'Azerbaijani novel generation using Recurrent Neural Networks', slug: 'test' },
          { name: 'uilding seq2seq network with/without attention mechanism for machine translation (Az - Eng)', slug: 'test' },
        ],
      },
            {
        name: 'Transformers',
        content: [
          { name: 'Transformers: Understanding architecture', slug: 'test' },
          { name: 'Language models: BERT, Reformer, GPT-2,3, RoBERTa, ELECTRA and etc.', slug: 'test' },
          { name: 'Using Hugging Face models', slug: 'test' },
          { name: 'Applying BERT models to variety of tasks (Text summarization, Text similarity, Paraphrasing and etc)', slug: 'test' },
        ],
      },
            {
        name: 'Generative Models',
        content: [
          { name: 'What is a GAN?', slug: 'test' },
          { name: 'Deep convolutional GANs', slug: 'test' },
          { name: 'Applications of GANs', slug: 'test' },
          { name: 'Flow-based generative models', slug: 'test' },
          { name: 'Diffusion models for data generation', slug: 'test' },
        ],
      },
      {
        name: 'Appendix',
        content: [
          { name: 'Introduction to Docker, Flask, FastAPI', slug: 'test' },
          { name: 'Deploying Deep Learning Model in Heroku using flask ', slug: 'test' },
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

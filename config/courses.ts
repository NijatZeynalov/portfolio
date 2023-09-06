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
  'mentorship-program':'Applied ML Mentorship program',
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
            slug: 'welcome-to-the-course',
          },
          {
            name: 'What will you get through these courses?',
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

            name: 'Introduction to Linear Algebra',

            slug: 'test',

          },

          {

            name: 'Numpy arrays',

            slug: 'test',

          },

          {

            name: 'Vectors and Vector Arithmetic',

            slug: 'test',

          },

          {

            name: 'Matrices and Matrix Arithmetic',

            slug: 'test',

          },

          {

            name: 'Types of Matrices',

            slug: 'test',

          },

          {

            name: 'Matrix Operations',

            slug: 'test',

          },

          {

            name: 'Basics of Probability Theory',

            slug: 'test',

          },

          {

            name: 'Joint, Marginal, and Conditional Probability',

            slug: 'test',

          },

          {

            name: 'Bayes Theorem',

            slug: 'test',

          },

          {

            name: 'Introduction to Statistics',

            slug: 'test',

          },

          {

            name: 'Descriptive Statistics',

            slug: 'test',

          },

          {

            name: 'Overview of statistical concepts',

            slug: 'test',

          },
                    {

            name: 'Statistical hypothesis testing',

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

            name: 'pandas',

            slug: 'test',

          },
          

          {

            name: 'Variable Problems When Building ML Models',

            slug: 'test',

          },

          {

            name: 'Performing mean or median imputation',

            slug: 'test',

          },

          {

            name: 'Mode or frequent category imputation',

            slug: 'test',

          },

          {

            name: 'Adding a missing value indicator variable',

            slug: 'test',

          },

          {

            name: 'Performing multivariate imputation by chained equations',

            slug: 'test',

          },

          {

            name: 'Assembling an imputation pipeline',

            slug: 'test',

          },

          

          {

            name: 'Creating binary variables through one-hot encoding',

            slug: 'test',

          },

          {

            name: 'Replacing categories with counts or frequency of observations',

            slug: 'test',

          },

          {

            name: 'Encoding with the mean of the target',

            slug: 'test',

          },

          {

            name: 'Encoding with the Weight of Evidence',

            slug: 'test',

          },

          {

            name: 'Grouping rare or infrequent categories',

            slug: 'test',

          },

          {

            name: 'Performing binary encoding, feature hashing',

            slug: 'test',

          },

        ],

      },

      {
      name: 'Feature Engineering II',

      content: [ {

            name: 'Transforming variables with the logarithm',

            slug: 'test',

          },

          

          {

            name: 'Transforming variables with the reciprocal function',

            slug: 'test',

          },

          {

            name: 'Using square and cube root to transform variables',

            slug: 'test',

          },

          {

            name: 'Using power transformations on numerical variables',

            slug: 'test',

          },

          {

            name: 'Performing Box-Cox transformation on numerical variables',

            slug: 'test',

          },

          {

            name: 'Performing Yeo-Johnson transformation on numerical variables',

            slug: 'test',

          },

          {

            name: 'Dividing the variable into intervals of equal width',

            slug: 'test',

          },

                   {

            name: 'Sorting the variable values in intervals of equal frequency',

            slug: 'test',

          },

          {

            name: 'Performing discretization followed by categorical encoding',

            slug: 'test',

          },

          {

            name: 'Allocating the variable values in arbitrary intervals',

            slug: 'test',

          },

          {

            name: 'Performing discretization with k-means clustering',

            slug: 'test',

          },

          {

            name: 'Using decision trees for discretization',

            slug: 'test',

          },

          {

            name: 'Trimming outliers from the dataset',

            slug: 'test',

          },

                    {

            name: 'Performing winsorization',

            slug: 'test',

          },

          {

            name: 'Capping the variable at arbitrary maximum and minimum values',

            slug: 'test',

          },

          {

            name: 'Performing zero-coding – capping the variable values at zero',

            slug: 'test',

          },

          {

            name: 'Extracting date and time parts from a datetime variable',

            slug: 'test',

          },

                    {

            name: 'Capturing the elapsed time between datetime variables',

            slug: 'test',

          },

          {

            name: 'Standardizing the features',

            slug: 'test',

          },

                    {

            name: 'Performing mean normalization',

            slug: 'test',

          },

          {

            name: 'Implementing maximum absolute scaling',

            slug: 'test',

          },

          {

            name: 'Scaling to vector unit length',

            slug: 'test',

          },

        ],

      },
      {
        name: 'Feature Engineering III',
        content: [
{

            name: 'Combining multiple features with statistical operations',

            slug: 'test',

          },

                   {

            name: 'Combining pairs of features with mathematical functions',

            slug: 'test',

          },

          {

            name: 'Performing polynomial expansion',

            slug: 'test',

          },

          {

            name: 'Deriving new features with decision trees',

            slug: 'test',

          },

                    {

            name: 'Aggregating transactions with mathematical operations',

            slug: 'test',

          },

          {

            name: 'Aggregating transactions in a time window',

            slug: 'test',

          },

                   {

            name: 'Determining the number of local maxima and minima',

            slug: 'test',

          },

          {

            name: 'Deriving time elapsed between time-stamped events',

            slug: 'test',

          },

          {

            name: 'Creating features from transactions with Featuretools',

            slug: 'test',

          },

        ],
      },
      
        {
        name: 'Machine Learning',
        content: [
          {
            name: 'Data Preparation without Data Leakage',
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
        name: 'Neural Network Foundations with TF',
        content: [
          { name: 'What TensorFlow and Keras are?', slug: 'test' },
          {
            name: 'An introduction to neural networks',
            slug: 'test',
          },
          { name: 'The perceptron and multi-layer perceptron', slug: 'test' },
          { name: 'Recognizing handwritten digits', slug: 'test' },
          { name: 'Activation functions', slug: 'test' },
          { name: 'Backpropagation', slug: 'test' },
          { name: 'Regularization methods', slug: 'test' },
        ],
      },
      {
        name: 'Regression and Classification',
        content: [
          { name: 'Regression with TF', slug: 'test' },
          { name: 'Classification using the TensorFlow', slug: 'test' },
          { name: 'Logistic regression to identify handwritten digits', slug: 'test' },
          { name: 'Linear regression to estimate the price of a house', slug: 'test' },
        ],
      },
      {
        name: 'Convolutional Neural Networks',
        content: [
          { name: 'Deep convolutional neural networks', slug: 'test' },
          { name: 'ConvNets in TensorFlow', slug: 'test' },
          { name: 'DNNs for large-scale image recognition', slug: 'test' },
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
          { name: 'Novel generation using Recurrent Neural Networks', slug: 'test' },
          { name: 'Building seq2seq network with/without attention mechanism', slug: 'test' },
        ],
      },
            {
        name: 'Transformers',
        content: [
          { name: 'Transformers: Understanding architecture', slug: 'test' },
          { name: 'Language models: BERT, Reformer, GPTs and etc.', slug: 'test' },
          { name: 'Using Hugging Face models', slug: 'test' },
          { name: 'Applying BERT models to variety of tasks', slug: 'test' },
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
    banner: '/static/courses/aws/machine-learning-aws.png',
    description:
      'Specifically designed to help you prepare for the AWS Machine Learning  Specialty Certification, this learning path provides interactive content comprised of hands-on labs and lectures. ',
    content: [
      {
        name: 'AWS Cloud Concepts',
        content: [
          { name: 'What is AWS?', slug: 'test' },
          {
            name: 'Exploring AWS Accounts',
            slug: 'test',
          },
          { name: 'AWS Identity and Access Management', slug: 'test' },
          { name: 'Overview of AWS Services ', slug: 'test' },
          { name: 'Analytics on AWS', slug: 'test' },
          { name: 'Security in AWS', slug: 'test' },
          { name: 'Billing and Pricing', slug: 'test' },
          { name: 'AWS CLI', slug: 'test' },
        ],
      },
      {
        name: 'AWS for Machine Learning',
        content: [
          { name: 'AWS Machine Learning Tech-Stack', slug: 'test' },
          { name: 'AWS services for ingesting data', slug: 'test' },
          { name: 'Detailed overview of AWS S3', slug: 'test' },
          { name: 'Migrating Oracle database to AWS using DMS', slug: 'test' },
          { name: 'AWS services for transforming data', slug: 'test' },
          { name: 'Data preprocessing with AWS Glue', slug: 'test' },
          { name: 'AWS services for consuming data', slug: 'test' },
          { name: 'Uploading dataset to S3, querying it with Amazon Athena', slug: 'test' },
          { name: 'Exploring the Amazon SageMaker', slug: 'test' },
          { name: 'AWS services for consuming data ', slug: 'test' },
          { name: 'Amazon SageMaker Autopilot', slug: 'test' },
          { name: 'Built-in algorithms in Amazon SageMaker', slug: 'test' },
          { name: 'Training models on AWS Sagemaker', slug: 'test' },
          { name: 'Training Computer Vision Models on AWS Sagemaker', slug: 'test' },
          { name: 'Training NLP Models on AWS Sagemaker', slug: 'test' },
                    { name: 'Training and deploying custom algorithms on AWS Sagemaker ', slug: 'test' },
          { name: 'Scaling training jobs with pipe mode and distributed training', slug: 'test' },
          { name: 'Deploying Machine Learning Models', slug: 'test' },
          { name: 'Monitoring models with Amazon SageMaker Model Monitor', slug: 'test' },
          { name: 'Deploying models to container services', slug: 'test' },
          { name: 'Optimizing Prediction Cost and Performance', slug: 'test' },
        ],
      },
    ],
  },

  {
    title: 'Applied ML Mentorship program',
    slug: 'mentorship-program',
    banner: '/static/courses/aws/machine-learning-aws.png',
    description:
      'Specifically designed to help you prepare for the AWS Machine Learning  Specialty Certification, this learning path provides interactive content comprised of hands-on labs and lectures. ',
    content: [
      {
        name: 'AWS Cloud Concepts',
        content: [
          { name: 'What is AWS?', slug: 'test' },
          {
            name: 'Exploring AWS Accounts',
            slug: 'test',
          },
          { name: 'AWS Identity and Access Management', slug: 'test' },
          { name: 'Overview of AWS Services ', slug: 'test' },
          { name: 'Analytics on AWS', slug: 'test' },
          { name: 'Security in AWS', slug: 'test' },
          { name: 'Billing and Pricing', slug: 'test' },
          { name: 'AWS CLI', slug: 'test' },
        ],
      },
      {
        name: 'AWS for Machine Learning',
        content: [
          { name: 'AWS Machine Learning Tech-Stack', slug: 'test' },
          { name: 'AWS services for ingesting data', slug: 'test' },
          { name: 'Detailed overview of AWS S3', slug: 'test' },
          { name: 'Migrating Oracle database to AWS using DMS', slug: 'test' },
          { name: 'AWS services for transforming data', slug: 'test' },
          { name: 'Data preprocessing with AWS Glue', slug: 'test' },
          { name: 'AWS services for consuming data', slug: 'test' },
          { name: 'Uploading dataset to S3, querying it with Amazon Athena', slug: 'test' },
          { name: 'Exploring the Amazon SageMaker', slug: 'test' },
          { name: 'AWS services for consuming data ', slug: 'test' },
          { name: 'Amazon SageMaker Autopilot', slug: 'test' },
          { name: 'Built-in algorithms in Amazon SageMaker', slug: 'test' },
          { name: 'Training models on AWS Sagemaker', slug: 'test' },
          { name: 'Training Computer Vision Models on AWS Sagemaker', slug: 'test' },
          { name: 'Training NLP Models on AWS Sagemaker', slug: 'test' },
                    { name: 'Training and deploying custom algorithms on AWS Sagemaker ', slug: 'test' },
          { name: 'Scaling training jobs with pipe mode and distributed training', slug: 'test' },
          { name: 'Deploying Machine Learning Models', slug: 'test' },
          { name: 'Monitoring models with Amazon SageMaker Model Monitor', slug: 'test' },
          { name: 'Deploying models to container services', slug: 'test' },
          { name: 'Optimizing Prediction Cost and Performance', slug: 'test' },
        ],
      },
    ],
  },
  
];

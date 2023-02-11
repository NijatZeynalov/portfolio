import { Maybe, Tuple } from '../types';
import { Stack } from './stack';

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
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment: Deployment;
  subProjects: SubProject[];
}

export const projects: Project[] = [
  {
    title: 'New product demand forecasting',
    slug: 'NewProductDemandForecasting',
    banner: '/static/projects/hypertrade/ali-nino.png',
    website: 'https://github.com/NijatZeynalov/New-product-demand-forecasting-via-Content-based-learning-for-multi-branch-stores',
    description:
      'Forecasting sales is a challenging task when you are forecasting sales of a new product because you have no past performance on which to base your estimates.                                                                                                          The proposed work is based on Ali and Nino multi-branch book store sales data. Dataset is contains 23.345 books with over 90k unique customers per month and more than 170 orders per day. Although sales dataset was generated artifically, the approach can be apply to real cases and even small improvement in forecast accuracy can lead to significant increase of company profit and customers can buy quicker and at lower price.',
    shortDescription:
      'New product demand forecasting via Content based learning for multi-branch stores: Ali and Nino Use Case',
    repository: 'https://github.com/NijatZeynalov/New-product-demand-forecasting-via-Content-based-learning-for-multi-branch-stores',
    stack: [
      Stack.nats,
      Stack.go,
      Stack.typescript,
      Stack.react,
      Stack.python,
      Stack.kubernetes,
      Stack.docker,
    ],
    dimensions: [360, 640],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Fcharts.png?alt=media&token=62c42939-9371-4413-b85d-f2dd3b4534ca',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Fdataframe.png?alt=media&token=f2e6523c-c9de-4fde-8fb3-434c74eb20d8',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Fportfolio.png?alt=media&token=8f4e3da1-2dc2-4382-9fc8-1fbc18a98146',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Fconfig.png?alt=media&token=f619b1da-47d5-4c33-b4d0-368adaead1c8',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Fconfig-strategy.png?alt=media&token=68693230-4fce-420b-b419-d211a9568dc5',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Fcharts-indicators.png?alt=media&token=21c7875f-5abe-4ceb-8057-4d7a70b67d33',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Ftelegram.png?alt=media&token=110874dd-fb96-4dd2-b299-12a62b092a04',
    ],
    deployment: {
      web: 'https://github.com/NijatZeynalov/New-product-demand-forecasting-via-Content-based-learning-for-multi-branch-stores',
    },
    subProjects: [],
  },
  {
    title: 'Azerbaijani Medical Forum Question Classification',
    slug: 'Azerbaijani Medical Forum Question Classification',
    banner: '/static/projects/peapods/classification.png',
    website: 'https://github.com/NijatZeynalov/azerbaijani-medical-question-classification',
    description: `Automatic question classifiers can overcome this issue by directing questions to specific experts according to their topic preferences to get quick and better responses. In this project, I aim to classify Azerbaijani health forum questions with BERT multilingual base model (uncased).`,
    shortDescription:
      'Azerbaijani Medical Forum Question Classification.',
    repository: 'https://github.com/NijatZeynalov/azerbaijani-medical-question-classification',
    stack: [
      Stack.javascript,
      Stack.react,
      Stack.node,
      Stack.graphql,
      Stack.aws,
      Stack.arangodb,
    ],
    screenshots: [],
    deployment: {
      web: 'https://github.com/NijatZeynalov/azerbaijani-medical-question-classification',
    },
    subProjects: [],
  },
  {
    title: 'Scraping Azerbaijani real estate website and sending whatsapp message with AWS Lambda function',
    slug: 'Scraping Azerbaijani real estate website and sending whatsapp message with AWS Lambda function',
    website: 'https://github.com/NijatZeynalov/automate-web-scraping-send-whatsapp-alert-with-aws',
    banner: '/static/projects/proximity/awslambda.png',
    description:
      'People who want to buy a house face enough difficulties. In this project, I perform web scrapping of "kub.az" real estate website. The reason that I have chosen this website is that, it brings house ads from all real estate websites of Azerbaijan. To put it briefly, I use AWS Lambda function which scrapes website in every 30 minutes and if a new house added, it creates a new csv file in S3 bucket and sends this file with a message to my whatsapp number during each run.',
    repository: 'https://github.com/NijatZeynalov/automate-web-scraping-send-whatsapp-alert-with-aws',
    stack: [
      Stack.typescript,
      Stack.reactnative,
      Stack.node,
      Stack.graphql,
      Stack.postgres,
    ],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=a9b5a094-8a16-4c84-af16-65bf2378d7d9',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=fca4c07e-c922-445e-a259-a06c038e0974',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=31dafec8-fc20-4d6f-96e7-312a4c847ac5',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-4-.png?alt=media&token=4067a226-5b7b-4ffa-859e-401323a864c4',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=c349a959-ab54-4e2d-8f8e-2393466bb5c0',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=f2c25e34-38e8-4886-b247-dc6f270c36d0',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-7.png?alt=media&token=2af284b0-4266-4072-a900-cc9ef8521f74',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-8.png?alt=media&token=e041e4bd-50fc-49a7-8a22-f6e98d3e1bc6',
    ],
    deployment: {
      web: 'https://github.com/NijatZeynalov/automate-web-scraping-send-whatsapp-alert-with-aws',
    },
    subProjects: [],
  },
  {
    title: 'Satellite Images to real maps with Deep Learning (and reverse)',
    slug: 'Satellite Images to real maps with Deep Learning (and reverse)',
    banner: '/static/projects/velvet-live/satellite.png',
    website: 'https://boom.london',
    description: `In this project, I developed a Pix2Pix generative adversarial network for image-to-image translation. I have used the so-called maps dataset used in the Pix2Pix paper. The Pix2Pix model is a type of conditional GAN, or cGAN, where the generation of the output image is conditional on an input, in this case, a source image. The image translation problem involves converting satellite photos to Google maps format, or the reverse, Google maps images to Satellite photos.`,
    repository: 'https://github.com/NijatZeynalov/Satellite-images-to-real-maps-with-Deep-Learning',
    stack: [
      Stack.javascript,
      Stack.react,
      Stack.reactnative,
      Stack.graphql,
      Stack.gcp,
    ],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=b9b044ce-a3af-402f-a1db-1ae61621bb18',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=f551d87b-4f74-4d06-b81e-50ea8bf7feba',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=4f68239e-db81-43cc-b3a4-1a8642cfe4eb',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=5655d6e8-99d4-4c40-9782-ce12efeab256',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-7.png?alt=media&token=32c12b1e-8e32-4d45-9001-9482d26bdaaf',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=609b7e74-8349-48ec-bcc0-4b0071dfb9b6',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-8.png?alt=media&token=91880856-7288-420c-abb9-c1923f7ccd57',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=3dcdc3bd-cbb7-4d8e-9368-306158cce40d',
    ],
    deployment: {
      web: 'https://github.com/NijatZeynalov/Satellite-images-to-real-maps-with-Deep-Learning',
    },
    subProjects: [],
  },
  {
    title: 'Identifiyng and solving Concept Drift detection with two approaches',
    slug: 'Identifiyng and solving Concept Drift detection with two approaches',
    website: 'https://github.com/NijatZeynalov/concept-drift-adversarial-validation',
    repository: 'https://github.com/NijatZeynalov/concept-drift-adversarial-validation',
    banner: '/static/projects/stewards/conceptdrift.png',
    description:
      'Data can change over time. This can result in poor and degrading predictive performance in predictive models that assume a static relationship between input and output variables. This problem of the changing underlying relationships in the data is called concept drift in the field of machine learning. In the project, I have detected concept drift by using adversarial validation and Kolmogorov-Smirnov test which can also be used in the deployed system.',
    stack: [
      Stack.javascript,
      Stack.react,
      Stack.reactnative,
      Stack.graphql,
      Stack.gcp,
    ],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=ba9d7163-8df6-43ae-b804-01cd221cc593',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=c8194dc7-08cf-4b8c-a3ad-f6c643291a95',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=37c14308-767c-41c7-a064-df8b63cd18e8',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=6ad6b4f6-ba09-423d-bd3f-b06ae093113a',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=cd2945c0-af97-4b3d-a503-d52174232a8e',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=6fcaeab6-d539-4f39-9985-e6ee85e28f0a',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-7.png?alt=media&token=3c1fcd3e-4d93-4275-8d87-94a9b9236a9d',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-8.png?alt=media&token=9733914a-61a9-41ed-b715-3334ca425588',
    ],
    deployment: {
      web: 'https://github.com/NijatZeynalov/concept-drift-adversarial-validation',
    },
    subProjects: [],
  },
  {
    title: 'mT5-small based Azerbaijani News Summarization',
    slug: 'mT5-small based Azerbaijani News Summarization',
    website: 'https://github.com/NijatZeynalov/mT5-based-azerbaijani-news-summarize',
    banner: '/static/projects/celebrify/mt5.png',
    description:
      'In this model, Google Multilingual T5-small is fine-tuned on Azerbaijani News Summary Dataset for Summarization downstream task. The model is trained with 3 epochs, 64 batch size and 10e-4 learning rate. It took almost 12 hours on GPU instance with Ubuntu Server 20.04 LTS image in Microsoft Azure. The max news length is kept as 2048 and max summary length is determined as 128.',
    repository: 'https://github.com/NijatZeynalov/mT5-based-azerbaijani-news-summarize',
    stack: [Stack.react, Stack.reactnative, Stack.django, Stack.aws],
    dimensions: [450, 270],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=93fffd15-08ca-4ffc-8fce-47bc269237ee',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=fd597baf-3aaa-4ad8-abe9-1d42c628285f',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=779ea419-adb0-4f62-8ef7-dcfa8d9a4228',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=e77b8603-4885-4eed-b108-f9f4bb751796',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=94f43db6-c835-404d-ab35-85ddad624a06',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=7794ae58-7e3a-45c5-a47a-6c86b909e423',
    ],
    deployment: {
      web: 'https://github.com/NijatZeynalov/mT5-based-azerbaijani-news-summarize',},
    subProjects: [],
  },
  {
    title: `Norvig's Spell Checker Algorithm for Azerbaijani Language`,
    slug: `Norvig's Spell Checker Algorithm for Azerbaijani Language`,
    banner: '/static/projects/kcards/spell.png',
    description:
      `The purpose of this project is to prepare a spell checker for Azerbaijani language by implementing a Azerbaijani corpus to Norvig’s algorithm. In general, Spell checking tools train through a corpus, train themselves on the correct spelling of words, and in the future, if the word is misspelled, take the correct word in the corpus as a reference. Choosing the right corpus is very important in spell checking, for this purpose I tried several corpuses in the Azerbaijani language available on the Internet, but most of the corpus itself contained such incorrect spelling words. I decided to create a new corpus based on several books written in Azerbaijani. Because, existing corpuses are crawled data and errors may exist. The corpus I created consists of 1478667 words collected from 47 books in 6 fields (biology, geography, detective, literature, encyclopedia, novel).`,
    repository: 'https://github.com/NijatZeynalov/Norvig-s-Spell-Checker-Algorithm-for-Azerbaijani-Language',
    stack: [Stack.react, Stack.reactnative, Stack.node, Stack.mongo],
    dimensions: [450, 270],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=5de462e1-7368-49fd-843f-abd4cccb3317',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=30061b0b-5bed-47d5-bf43-16c44cf076e0',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=350180a1-f559-45e7-b887-dafd2cf9eb78',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=574212b2-cf17-4e11-b8c0-a3a81473aeec',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=ecff0737-b3b5-45cc-8d85-97b684f9c4b7',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=b49f3f8e-6596-47ab-b3e6-872f5f67d7fe',
    ],
    deployment: {
      web: 'https://github.com/NijatZeynalov/Norvig-s-Spell-Checker-Algorithm-for-Azerbaijani-Language',
    },
    website: 'https://github.com/NijatZeynalov/Norvig-s-Spell-Checker-Algorithm-for-Azerbaijani-Language',
    subProjects: [],
  },
    {
    title: `Generate Synthetic Images with DCGANs in Keras`,
    slug: `Generate Synthetic Images with DCGANs in Keras`,
    banner: '/static/projects/dgans/dgan.png',
    description:
      `In our GAN setup, we want to be able to sample from a complex, high-dimensional training distribution of the Fashion MNIST images. However, there is no direct way to sample from this distribution. The solution is to sample from a simpler distribution, such as Gaussian noise. We want the model to use the power of neural networks to learn a transformation from the simple distribution directly to the training distribution that we care about.

The GAN consists of two adversarial players: a discriminator and a generator. We’re going to train the two players jointly in a minimax game theoretic formulation.`,
    repository: 'https://github.com/NijatZeynalov/Generate-Synthetic-Images-with-DCGANs-in-Keras',
    stack: [Stack.react, Stack.reactnative, Stack.node, Stack.mongo],
    dimensions: [450, 270],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=5de462e1-7368-49fd-843f-abd4cccb3317',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=30061b0b-5bed-47d5-bf43-16c44cf076e0',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=350180a1-f559-45e7-b887-dafd2cf9eb78',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=574212b2-cf17-4e11-b8c0-a3a81473aeec',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=ecff0737-b3b5-45cc-8d85-97b684f9c4b7',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=b49f3f8e-6596-47ab-b3e6-872f5f67d7fe',
    ],
    deployment: {
      web: 'https://github.com/NijatZeynalov/Generate-Synthetic-Images-with-DCGANs-in-Keras',
    },
    website: 'https://github.com/NijatZeynalov/Generate-Synthetic-Images-with-DCGANs-in-Keras',
    subProjects: [],
  },
    {
    title: `Easy Recipes bot`,
    slug: `Easy Recipes bot`,
    banner: '/static/projects/bot/bot.png',
    description:
      `Just write down your ingredients and this bot instantly finds the matching recipes! This telegram bot recommends easy recipes in Azerbaijani using ingredients you already have in the kitchen. I have used text similarity method in order to determine how ‘close’ user message and our text. The big idea is that we represent documents as vectors of features, and compare documents by measuring the distance between these features. I have tried a few similarity methods, but after some experiments, I have chosen Cosine similarity method. As a dataset, I have fully scraped dadli.az website (2400 + recip.). You can find whole dataset in data folder.`,
    repository: 'https://github.com/NijatZeynalov/Easy-Recipes-bot',
    stack: [Stack.react, Stack.reactnative, Stack.node, Stack.mongo],
    dimensions: [450, 270],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=5de462e1-7368-49fd-843f-abd4cccb3317',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=30061b0b-5bed-47d5-bf43-16c44cf076e0',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=350180a1-f559-45e7-b887-dafd2cf9eb78',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=574212b2-cf17-4e11-b8c0-a3a81473aeec',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=ecff0737-b3b5-45cc-8d85-97b684f9c4b7',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=b49f3f8e-6596-47ab-b3e6-872f5f67d7fe',
    ],
    deployment: {
      web: 'https://github.com/NijatZeynalov/Easy-Recipes-bot',
    },
    website: 'https://github.com/NijatZeynalov/Easy-Recipes-bot',
    subProjects: [],
  },
    {
    title: `Azerbaijani News Summary Dataset`,
    slug: `Azerbaijani News Summary Dataset`,
    banner: '/static/projects/news/news.png',
    description:
      `I present az-news-summary, a comprehensive and diverse dataset comprising 143k (143,448) Azerbaijani news articles extracted using a set of carefully designed heuristics. The dataset covers common topics for news reports include war, government, politics, education, health, the environment, economy, business, fashion, entertainment, and sport, as well as quirky or unusual events.

The dataset is prepared for Abstractive/Extractive summarization tasks. It can also be used in other scopes like Text Generation, Title Generation and etc.`,
    repository: 'https://github.com/NijatZeynalov/azerbaijani-multi-news-dataset',
    stack: [Stack.react, Stack.reactnative, Stack.node, Stack.mongo],
    dimensions: [450, 270],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=5de462e1-7368-49fd-843f-abd4cccb3317',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=30061b0b-5bed-47d5-bf43-16c44cf076e0',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=350180a1-f559-45e7-b887-dafd2cf9eb78',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=574212b2-cf17-4e11-b8c0-a3a81473aeec',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=ecff0737-b3b5-45cc-8d85-97b684f9c4b7',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=b49f3f8e-6596-47ab-b3e6-872f5f67d7fe',
    ],
    deployment: {
      web: 'https://github.com/NijatZeynalov/azerbaijani-multi-news-dataset',
    },
    website: 'https://github.com/NijatZeynalov/azerbaijani-multi-news-dataset',
    subProjects: [],
  },
  {
    title: `Supermarket sales dataset`,
    slug: `Supermarket sales dataset`,
    banner: '/static/projects/supermarket/supermarket.png',
    description:
      `You have started working as a data analyst in a company with a large supermarket chain in Baku and you are participating in the first meeting. Your task is to perform the tasks mentioned to you in a meeting attended by several people from each department. They will say that they understand the tasks - in simple language, and you should come up with the most optimal result. In order to make the simulation of a real business meeting more believable, all the tasks are designed in the form of dialogue and have no relation to reality. The dataset contains data on 438,826 Azerbaijani products purchased by 80,000 customers in 20 branches of the supermarket in 2019. `,
    repository: 'https://www.academia.edu/42561999/Data_Analitikası_tapşırıqları',
    stack: [Stack.react, Stack.reactnative, Stack.node, Stack.mongo],
    dimensions: [450, 270],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=5de462e1-7368-49fd-843f-abd4cccb3317',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=30061b0b-5bed-47d5-bf43-16c44cf076e0',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=350180a1-f559-45e7-b887-dafd2cf9eb78',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=574212b2-cf17-4e11-b8c0-a3a81473aeec',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=ecff0737-b3b5-45cc-8d85-97b684f9c4b7',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=b49f3f8e-6596-47ab-b3e6-872f5f67d7fe',
    ],
    deployment: {
      web: 'https://www.academia.edu/42561999/Data_Analitikası_tapşırıqları',
    },
    website: 'https://www.academia.edu/42561999/Data_Analitikası_tapşırıqları',
    subProjects: [],
  },
  {
    title: `Azerbaijani Fake News Generator`,
    slug: `Azerbaijani Fake News Generator`,
    banner: '/static/projects/velvet-live/fakenews.png',
    description: `A language model can predict the probability of the next word in the sequence, based on the words already observed in the sequence. Neural network models are a preferred method for developing statistical language models because they can use a distributed representation where different words with similar meanings have similar representation and because they can use a large context of recently observed words when making predictions. `,
    repository: 'https://github.com/NijatZeynalov/Azerbaijani-Fake-News-Generator',
    stack: [Stack.react, Stack.reactnative, Stack.node, Stack.mongo],
    dimensions: [450, 270],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=5de462e1-7368-49fd-843f-abd4cccb3317',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=30061b0b-5bed-47d5-bf43-16c44cf076e0',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=350180a1-f559-45e7-b887-dafd2cf9eb78',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=574212b2-cf17-4e11-b8c0-a3a81473aeec',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=ecff0737-b3b5-45cc-8d85-97b684f9c4b7',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=b49f3f8e-6596-47ab-b3e6-872f5f67d7fe',
    ],
    deployment: {
      web: 'https://github.com/NijatZeynalov/Azerbaijani-Fake-News-Generator',
    },
    website: 'https://github.com/NijatZeynalov/Azerbaijani-Fake-News-Generator',
    subProjects: [],
  },
  {
    title: 'Developing a Neural Machine Translation Model (Azerbaijani - English)',
    slug: 'Developing a Neural Machine Translation Model (Azerbaijani - English)',
    banner: '/static/projects/velvet-live/translate.png',
    description: `In this project, I have discovered how to develop a neural machine translation system for translating Azerbaijani phrases to English. I use a dataset of Azerbaijani to English terms used as the basis for flashcards for language learning.`,
    repository: 'https://github.com/NijatZeynalov/Neural-Machine-Translation-Model',
    stack: [Stack.react, Stack.reactnative, Stack.node, Stack.mongo],
    dimensions: [450, 270],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=5de462e1-7368-49fd-843f-abd4cccb3317',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=30061b0b-5bed-47d5-bf43-16c44cf076e0',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=350180a1-f559-45e7-b887-dafd2cf9eb78',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=574212b2-cf17-4e11-b8c0-a3a81473aeec',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=ecff0737-b3b5-45cc-8d85-97b684f9c4b7',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=b49f3f8e-6596-47ab-b3e6-872f5f67d7fe',
    ],
    deployment: {
      web: 'https://github.com/NijatZeynalov/Neural-Machine-Translation-Model',
    },
    website: 'https://github.com/NijatZeynalov/Neural-Machine-Translation-Model',
    subProjects: [],
  },
];

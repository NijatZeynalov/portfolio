import Card from '@/components/Card';
import { Header } from '@/components/Form';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import config from 'config';

export default function Courses(): React.ReactElement {
  return (
    <>
      <PageSEO
        title={`Courses - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
        <Header
          title='Courses'
          subtitle="This program features the perfect mix of theory, case studies and extensive hands-on practice."
        />
        <div className='container py-12'>
          <div className='-m-4 flex flex-wrap'>
            {config.courses.map(({ slug, title, description, banner }) => (
              <Card
                key={slug}
                title={title}
                description={description}
                banner={banner}
                href={`/courses/${slug}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

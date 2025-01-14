import Link from '@/components/Link';

export default function FourZeroFour() {
  return (
    <div className='fade-in flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6'>
      <div className='space-x-2 pt-6 pb-8 md:space-y-5'>
        <h1 className='text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14'>
          403
        </h1>
      </div>
      <div className='max-w-md'>
        <p className='mb-4 text-xl font-bold leading-normal md:text-2xl'>
          Sorry! You don't have an access to course content. Lessons, supplemental materials, assignments, projects, and other resources will only be shared with students in live classes.
        </p>
        <p className='mb-8'>
         The number of students in the class is limited. Take your first steps and register today. For registering, contact me via linkedin.
        </p>
        <Link href='/'>
          <button className='focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500'>
            Back to homepage
          </button>
        </Link>
      </div>
    </div>
  );
}

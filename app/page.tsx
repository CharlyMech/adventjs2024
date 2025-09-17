import Link from 'next/link';
import { challenges } from '@/data/challenges';
import { Card, AdventJSLogo } from '@/components';

export default function Home() {
  return (
    <div className="min-h-max">
      <section className='mb-[64px]'>
        <div className='flex flex-col items-center mb-4'>
          <AdventJSLogo />
          <h1>2024 Edition</h1>
        </div>
        <div className='flex flex-col items-center mb-5'>
          <h3>Welcome to the 2024 edition of AdventJS, a challenge from <Link className='underline text-blue-400' href='https://www.youtube.com/c/midudev' target='_blank'>@midudev</Link></h3>
        </div>
      </section>
      <section className='px-[32px]'>
        <div className='w-full'>
          <div className='flex flex-wrap justify-center gap-[24px] max-w-[50%] mx-auto'>
            {challenges.map((day) => <Card key={day.day} day={day} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
import Link from 'next/link';
import { bentoItems } from '@/data/bentoItems';
import { Card } from '@/components/Card';
import { AdventJSLogo } from '@/components/AdventJSLogo';

export default function Home() {
  return (
    <div className="min-h-max bg-yellow-300 bg-opacity-15">
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
        <h3>Challenges:</h3>
        <div className='flex flex-col items-center gap-[24px] bg-white bg-opacity-15 min-w-[400px]'>
          {bentoItems.map((day) => <Card key={day.id} day={day} />)}
        </div>
      </section>
    </div>
  );
}
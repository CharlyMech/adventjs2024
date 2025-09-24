import Link from 'next/link';
import { challenges } from '@/data/challenges';
import { Card, AdventJSLogo, ChallengesOverview } from '@/components';

export default function Home() {
  return (
    <main className="min-h-max mx-auto px-[16px] py-[32px]">
      <section className='mb-[16px]'>
        <div className='flex flex-col items-center mb-[16px]'>
          <AdventJSLogo />
          <h1>2024 Edition</h1>
        </div>
        <div className='flex flex-col items-center mb-[16px]'>
          <h3>Welcome to the 2024 edition of AdventJS, a challenge from <Link className='underline text-blue-400' href='https://www.youtube.com/c/midudev' target='_blank'>@midudev</Link></h3>
        </div>
      </section>
      <section className="w-full mb-[32px]">
        <div className=' max-w-[1280px] mx-auto flex flex-col items-center'>
          <ChallengesOverview />
        </div>
      </section>
      <section>
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="grid gap-[16px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {challenges.map((day) => (
              <Card key={day.day} day={day} className="h-full w-full !min-w-0 !max-w-none" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
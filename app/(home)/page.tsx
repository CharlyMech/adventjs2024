import Link from 'next/link';
import Image from 'next/image';
import { Bento } from "@/components/export";
import { bentoItems } from '@/data/bentoItems';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className='flex flex-col items-center mb-4'>
        <Link href='https://adventjs.dev/' target='_blank'>
          <Image
            src="/logo.webp"
            width={500}
            height={200}
            className="hidden md:block"
            alt="AdventJS Challenge logo from original web site"
          />
        </Link>
        <p>2024 Edition</p>
      </div>
      <div className='flex flex-col items-center mb-5'>
        <p>Welcome to the 2024 edition of AdventJS, a challenge from <Link className='underline text-blue-400' href='https://www.youtube.com/c/midudev' target='_blank'>@midudev</Link></p>
      </div>
      <section className='my-8'>
        <Bento days={bentoItems} />
      </section>
    </div>
  );
}
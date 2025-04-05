import React from 'react';
import { BentoCard } from '@/components/BentoCard';
import { BentoItem } from '@/data/bentoItems';
import Link from 'next/link';

type BentoGridProps = {
	days: BentoItem[];
};

export function Bento({ days }: BentoGridProps) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
			{days.map((day) => (
				<Link href={`/day/${day.id}`} key={day.id}>
					<BentoCard day={day} />
				</Link>
			))}
		</div>
	);
};
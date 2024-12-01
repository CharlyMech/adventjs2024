// components/BentoGrid.tsx
import React from 'react';
import Card from './card';

export default function Bento() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 p-4 max-w-screen-lg mx-auto">
			<Card colSpan={2} rowSpan={2} day={1} />
			<Card colSpan={2} rowSpan={1} day={2} />
			<Card colSpan={1} rowSpan={1} day={5} />
			<Card colSpan={1} rowSpan={2} day={7} />
			<Card colSpan={1} rowSpan={1} day={3} />
			<Card colSpan={1} rowSpan={1} day={4} />
			<Card colSpan={1} rowSpan={1} day={6} />
			<Card colSpan={1} rowSpan={2} day={8} />
			<Card colSpan={2} rowSpan={1} day={9} />
			<Card colSpan={2} rowSpan={2} day={12} />
			<Card colSpan={1} rowSpan={1} day={13} />
			<Card colSpan={1} rowSpan={1} day={10} />
			<Card colSpan={1} rowSpan={1} day={11} />
			<Card colSpan={1} rowSpan={1} day={14} />
			<Card colSpan={1} rowSpan={1} day={15} />
			<Card colSpan={1} rowSpan={2} day={17} />
			<Card colSpan={2} rowSpan={1} day={18} />
			<Card colSpan={1} rowSpan={1} day={21} />
			<Card colSpan={1} rowSpan={1} day={23} />
			<Card colSpan={1} rowSpan={1} day={16} />
			<Card colSpan={1} rowSpan={1} day={19} />
			<Card colSpan={1} rowSpan={1} day={20} />
			<Card colSpan={1} rowSpan={1} day={22} />
			<Card colSpan={1} rowSpan={1} day={24} />
			<Card colSpan={6} rowSpan={1} day={25} />
		</div>
	);
};
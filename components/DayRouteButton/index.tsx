"use client";
import React, { useEffect, useState } from 'react';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

interface DayRouteButtonProps {
	direction: 'left' | 'right';
	onClick: () => void;
	targetDay?: number;
}

export function DayRouteButton({
	direction,
	onClick,
	targetDay,
}: DayRouteButtonProps) {
	const Icon = direction === 'left' ? IconArrowLeft : IconArrowRight;
	const ariaLabel = targetDay
		? `Go to day ${targetDay}`
		: `Go to ${direction === 'left' ? 'previous' : 'next'} day`;

	const [screenWidth, setScreenWidth] = useState(0);
	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};
		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<button
			onClick={onClick}
			aria-label={ariaLabel}
		>
			<div className="w-[60px] md:w-[200px] px-[16px] py-[8px] flex items-center justify-center gap-[8px] bg-gray-200 text-black rounded-[8px] shadow-lg hover:bg-white transition-colors duration-200">
				{direction === 'right' ? <span className="hidden md:inline">Next day</span> : null}
				<Icon size={screenWidth >= 768 ? 20 : 40} />
				{direction === 'left' ? <span className="hidden md:inline">Previous day</span> : null}
			</div>
		</button>
	);
}
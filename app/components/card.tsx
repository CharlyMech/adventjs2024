'use client';

import { motion } from "motion/react";

type CardProps = {
	colSpan: number;
	rowSpan: number;
	day: number;
};

export default function Card({ colSpan, rowSpan, day }: CardProps) {
	return (
		<motion.div
			whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
			className={`relative bg-transparent p-6 rounded-lg shadow-lg flex items-center justify-center overflow-hidden cursor-pointer`}
			style={{
				gridColumn: `span ${colSpan} / span ${colSpan}`,
				gridRow: `span ${rowSpan} / span ${rowSpan}`,
			}}
		>
			<div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm rounded-lg shadow-inner"></div>
			<span className="text-xl font-semibold z-10">Day {day}</span>
		</motion.div>
	);
}
'use client';

import { motion } from "motion/react";
import { BentoItem } from "@/data/bentoItems";

type BentoCardProps = {
	day: BentoItem;
};

export function BentoCard({ day }: BentoCardProps) {
	return (
		<motion.div
			whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
			className={`relative bg-transparent p-6 rounded-lg shadow-lg flex items-center justify-center overflow-hidden cursor-pointer`}
		>
			<div className="flex items-center space-x-4">
				<div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm rounded-lg shadow-inner"></div>
				<span className="text-xl font-semibold z-10">Day {day.day}</span>
			</div>
		</motion.div>
	);
}
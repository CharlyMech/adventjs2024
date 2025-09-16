'use client';

import { motion } from "motion/react";
import { BentoItem } from "@/data/bentoItems";

type CardProps = {
	day: BentoItem;
};

export function Card({ day }: CardProps) {
	return (
		<motion.div
			whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
			className={`relative bg-transparent p-6 rounded-lg shadow-lg flex items-center justify-center overflow-hidden cursor-pointer`}
		>
			<div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm rounded-lg shadow-inner"></div>
			<span className="text-xl font-semibold z-10">Day {day.day}</span>
		</motion.div>
	);
}

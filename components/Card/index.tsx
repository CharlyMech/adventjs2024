'use client';

import { motion } from "motion/react";
import { Challenge } from "@/data/challenges";
import { DifficultyBadge, StarRating } from "@/components";
import { useRouter } from "next/navigation";

type CardProps = {
	day: Challenge;
	className?: string;
};

export function Card({ day, className }: CardProps) {
	const router = useRouter();

	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			onClick={() => router.push(`/day/${day.day}`)}
			className={`${className} relative bg-transparent min-w-[350px] max-w-[550px] p-[16px] rounded-[8px] shadow-lg flex items-center justify-center overflow-hidden cursor-pointer w-full`}
			role="link"
			aria-label={`Go to challenge day ${day.day}`}
		>
			<div className="absolute inset-0 bg-black/10 backdrop-blur-sm rounded-lg shadow-inner" />
			<div className="w-full h-full z-10">
				<div className="w-full flex items-center">
					<div className="flex-1 items-center justify-start">
						<p className="text-xl font-semibold text-start">Day {day.day}</p>
					</div>
					<div className="flex-1 flex flex-col gap-[16px]">
						<div className="flex items-center justify-end">
							<DifficultyBadge difficulty={day.difficulty} />
						</div>
						<div className="flex items-center justify-end">
							<StarRating rating={day.stars} />
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
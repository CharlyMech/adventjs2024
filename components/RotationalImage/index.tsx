"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { IconRotateClockwise } from "@tabler/icons-react";

interface RotationalImageProps {
	className?: string;
	/** Images paths */
	primarySrc: string;
	secondarySrc: string;
	altPrimary?: string;
	altSecondary?: string;

	/** Images container shape */
	width?: number;
	height?: number;

	/** Images container border radius */
	borderRadius?: string;

	quality?: number;
	priority?: boolean;

	buttonLabel?: string;
}

export function RotationalImage({
	className = "",
	primarySrc,
	secondarySrc,
	altPrimary = "First image",
	altSecondary = "Second image",
	width = 600,
	height = 400,
	borderRadius = "12px",
	priority = false,
	buttonLabel = "Change image"
}: RotationalImageProps) {
	const [showPrimary, setShowPrimary] = useState(true);

	const currentSrc = showPrimary ? primarySrc : secondarySrc;
	const currentAlt = showPrimary ? altPrimary : altSecondary;

	const toggleImage = () => setShowPrimary(!showPrimary);

	return (
		<div className={`relative w-full h-full flex items-center justify-center ${className}`}>
			{/* Image container */}
			<div
				className="relative w-full overflow-visible"
				style={{
					width: "100%",
					aspectRatio: `${width} / ${height}`,
					borderRadius,
					perspective: "2000px"
				}}
			>
				<AnimatePresence mode="wait">
					<motion.div
						key={currentSrc}
						className="absolute inset-0"
						initial={{ rotateY: -90, opacity: 1, scale: 0.92 }}
						animate={{ rotateY: 0, opacity: 1, scale: 1 }}
						exit={{ rotateY: 90, opacity: 1, scale: 0.92 }}
						transition={{
							duration: 0.3,
						}}
						style={{
							transformOrigin: "center",
							willChange: "transform",
							transformPerspective: 5000,
							transformStyle: "preserve-3d",
							backfaceVisibility: "hidden"
						}}
					>
						<Image
							src={currentSrc}
							alt={currentAlt}
							fill
							priority={priority}
							sizes="100vw"
							className="object-cover"
							style={{ borderRadius }}
						/>
					</motion.div>
				</AnimatePresence>
				<button
					onClick={toggleImage}
					aria-label={buttonLabel}
					className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 
					         flex items-center justify-center w-10 h-10 
					         bg-white/80 rounded-[8px]
					         shadow-md hover:bg-white
					         transition-all duration-200 hover:scale-105"
				>
					<motion.div
						animate={{ rotate: 360 }}
						transition={{
							duration: 0.4,
							ease: "easeInOut"
						}}
						key={currentSrc}
					>
						<IconRotateClockwise size={20} className="text-black" />
					</motion.div>
				</button>
			</div>
		</div>
	);
}
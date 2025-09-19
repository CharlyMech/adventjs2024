"use client";
import { useParams, useRouter } from "next/navigation";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { DayRouteButton } from "@/components";

export default function DayLayout({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const params = useParams();
	const currentDay = parseInt(params.id as string, 10);

	const goToPreviousDay = () => {
		if (currentDay > 1) {
			router.push(`/day/${currentDay - 1}`);
		}
	};

	const goToNextDay = () => {
		if (currentDay < 26) {
			router.push(`/day/${currentDay + 1}`);
		}
	};

	const hasPreviousDay = currentDay > 1;
	const hasNextDay = currentDay < 26;

	return (
		<div className="min-h-max w-full xl:px-[128px] lg:px-[128px] md:px-[96px] sm:px-[64px] px-[32px]">
			<header className="w-full flex justify-between">
				{hasPreviousDay ? (
					<DayRouteButton
						direction="left"
						onClick={goToPreviousDay}
						targetDay={currentDay - 1}
					/>
				) : (
					<div></div>
				)}

				{hasNextDay ? (
					<DayRouteButton
						direction="right"
						onClick={goToNextDay}
						targetDay={currentDay + 1}
					/>
				) : (
					<div></div>
				)}
			</header>
			<main>{children}</main>
		</div>
	);
}
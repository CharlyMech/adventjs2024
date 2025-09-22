"use client";
import { notFound, useRouter } from "next/navigation";
import { challenges } from "@/data/challenges";
import { DayChallengeContent, DayRouteButton } from "@/components";
import { useEffect, useState } from "react";

type Props = {
	params: Promise<{ id: string }>;
};

export default function DayPage({ params }: Props) {
	const [challenge, setChallenge] = useState<any>(null);
	const [currentDay, setCurrentDay] = useState<number>(0);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		const loadChallenge = async () => {
			const { id } = await params;
			const dayNumber = Number(id);

			if (!Number.isFinite(dayNumber)) {
				notFound();
				return;
			}

			const foundChallenge = challenges.find(c => c.day === dayNumber);
			if (!foundChallenge) {
				notFound();
				return;
			}

			setChallenge(foundChallenge);
			setCurrentDay(dayNumber);
			setLoading(false);
		};

		loadChallenge();
	}, [params]);

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

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!challenge) {
		return notFound();
	}

	return (
		<>
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
			<section className="w-full px-[32px] py-[16px]">
				<h1 className="text-[32px] font-bold underline">Day {challenge.day}</h1>
				<article className="w-full mx-auto px-[16px] py-[16px] flex flex-col gap-[32px]">
					<DayChallengeContent challenge={challenge} />
				</article>
			</section>
		</>
	);
}
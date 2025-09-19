import { notFound } from "next/navigation";
import { challenges } from "@/data/challenges";
import { DayChallengeContent } from "@/components";

export const runtime = "nodejs";

type Props = {
	params: Promise<{ id: string }>;
};

export default async function DayPage({ params }: Props) {
	const { id } = await params;
	const dayNumber = Number(id);

	if (!Number.isFinite(dayNumber)) notFound();

	const challenge = challenges.find(c => c.day === dayNumber);
	if (!challenge) notFound();

	return (
		<section className="w-full px-[32px] py-[16px]">
			<h1 className="text-[32px] font-bold underline">Day {challenge.day}</h1>
			<article className="w-full mx-auto px-[16px] py-[16px] flex flex-col gap-[32px]">
				<DayChallengeContent challenge={challenge} />
			</article>
		</section>
	);
}
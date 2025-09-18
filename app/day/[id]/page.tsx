import { notFound } from "next/navigation";
import { challenges } from "@/data/challenges";

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
		<section>
			<h1>Day {challenge.day}</h1>
			<article className="w-full mx-auto xl:px-[64px] lg:px-[64px] md:px-[96px] sm:px-[64px] px-[32px] py-6">
				<p dangerouslySetInnerHTML={{ __html: challenge.statement }} />
				{/* TODO -> Code block */}
				{challenge.additionalComment ? (
					<p dangerouslySetInnerHTML={{ __html: challenge.additionalComment }} />
				) : null}
			</article>
		</section>
	);
}
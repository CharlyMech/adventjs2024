import { notFound } from "next/navigation";
import path from "node:path";
import { promises as fs } from "node:fs";
import ReactMarkdown from "react-markdown";
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

	const absPath = path.join(process.cwd(), challenge.filePath);
	const fileContent = await fs.readFile(absPath, "utf-8");

	return (
		<article className="w-full mx-auto xl:px-[64px] lg:px-[64px] md:px-[64px] sm:px-[64px] px-[32px] py-6">
			<h1>Day {challenge.day}</h1>
			<ReactMarkdown>{fileContent}</ReactMarkdown>
		</article>
	);
}
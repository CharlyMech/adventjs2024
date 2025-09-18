import { BackButton } from "@/components/";

export default function DayLayout({ children }: { children: React.ReactNode }) {
	// TODO -> Add next/previous buttons for day challenge
	return (
		<div className="min-h-max w-full xl:px-[128px] lg:px-[128px] md:px-[96px] sm:px-[64px] px-[32px]">
			<header className="w-full">
				<BackButton />
			</header>
			<main>{children}</main>
		</div>
	);
}
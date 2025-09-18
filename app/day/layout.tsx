import { BackButton } from "@/components/";

export default function DayLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-max w-full xl:px-[128px] lg:px-[128px] md:px-[96px] sm:px-[64px] px-[32px] bg-slate-600/20">
			<header className="w-full">
				<BackButton />
			</header>
			<main>{children}</main>
		</div>
	);
}
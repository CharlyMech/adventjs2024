export default function DayLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="min-h-max w-full xl:px-[128px] lg:px-[128px] md:px-[96px] sm:px-[64px] px-[32px]">{children}</main>
	);
}
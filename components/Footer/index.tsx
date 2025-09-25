export function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="w-full py-[24px] text-center text-[14px]">
			<p className="leading-relaxed text-white">
				<span>© {year} Carlos Sánchez Recio (@CharlyMech).</span>{' '}
				<span className="inline-block">All rights reserved for this website.</span>
			</p>
			<p className="mt-[4px] leading-relaxed text-white/60">
				<span className="opacity-90">AdventJS is a programming challenge by </span>
				<a
					href="https://midu.dev/"
					target="_blank"
					rel="noopener noreferrer"
					className="underline underline-offset-2 hover:opacity-70"
				>
					midudev
				</a>
				<span>. This fan-made site is not affiliated with or endorsed by midudev.</span>
			</p>
		</footer>
	);
}
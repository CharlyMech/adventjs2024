import { IconExternalLink } from '@tabler/icons-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About AdventJS'
};

interface Link {
	href: string;
	label: string;
}

export default function AdventJSPage() {
	const links: Link[] = [
		{ href: "https://adventjs.dev/", label: "Web oficial del reto" },
		{ href: "https://midu.dev/", label: "Web oficial de midudev" },
		{ href: "https://www.twitch.tv/midudev", label: "Canal de Twitch" },
		{ href: "https://www.linkedin.com/in/midudev/", label: "Perfil de LinkedIn" },
	];

	return (
		<main className="min-h-max w-full xl:px-[128px] lg:px-[128px] md:px-[96px] sm:px-[64px] px-[32px]">
			<div className="w-full flex flex-col items-start justify-center gap-[16px]">
				<h1 className="text-[56px] md:text-[64px] font-bold mb-[16px]">
					AdventJS
				</h1>
				<p className="text-[18px] md:text-[18px] text-white">
					AdventJS is a challenge to practice web development created by <u>Miguel Ángel Durán García</u> or <b>midudev</b>. The goal is to solve all the challenges with the most amount of stars. This challenge is inspired in the tradition of advent calendars, but for programming.
				</p>
				<div className="flex flex-wrap gap-3">
					<a
						href="https://adventjs.dev/"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-[8px] px-[16px] py-[8px] bg-white/90 text-black hover:bg-white transition"
					>
						<span className="text-[18px]">2024 AdventJS</span>
						<IconExternalLink size={18} />
					</a>
				</div>

				{/* About the challenge */}
				<section className="mx-auto w-full max-w-[1000px]">
					<div className="grid gap-[16px] lg:gap-[24px] lg:grid-cols-2">
						<article className="backdrop-blur-xl bg-white/5 shadow-lg shadow-gray-500/10 rounded-[8px] p-[16px] md:p-[24px] border border-white/10 max-w-[650px] mx-auto">
							<h2 className="text-[20px] md:text-[26px] font-semibold">What is it about?</h2>
							<p className="text-[14px] md:text-[16px] text-white">
								In the classic advent calendar, each day you open a door from a box and you get a gift.
								The AdventJS version, instead of getting a gift, you unlock a programming challenge that you can solve in your favourite browser or in your favourite editor.
							</p>
						</article>

						<article className="backdrop-blur-xl bg-white/5 shadow-lg shadow-gray-500/10 rounded-[8px] p-[16px] md:p-[24px] border border-white/10 max-w-[650px] mx-auto">
							<h2 className="text-[20px] md:text-[26px] font-semibold">How it works?</h2>
							<p className="text-[14px] md:text-[16px] text-white">
								Each day a challenge is unlocked with a statement, examples, and tests. You can solve it in your favourite browser or in your favourite editor.
								You can solve it in 3 different programming languages: JavaScript, TypeScript and Python.
								Once you complete the challege, you get an score based on stars out of 5, get the most amount of starts you can!
							</p>
						</article>
					</div>
				</section>

				{/* Official links */}
				<section className="mt-[16px] mx-auto w-full flex flex-col gap-[16px]">
					<h2 className="text-xl sm:text-2xl font-bold">Official links</h2>
					<div className="w-full md:max-w-[1000px] md:mx-auto">
						<div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 auto-rows-fr">
							{links.map((l) => (
								<div key={l.href} className="h-full">
									<a href={l.href}
										target="_blank"
										rel="noopener noreferrer"
										className="h-full w-full block">
										<div className="h-full w-full flex flex-col justify-center backdrop-blur-xl bg-white/5 shadow-lg shadow-gray-500/10 rounded-[8px] p-[16px] md:p-[24px] border border-white/10">
											<div className="flex items-center justify-between gap-2">
												<span className="text-[14px] md:text-[16px] font-medium">{l.label}</span>
												<IconExternalLink size={18} />
											</div>
										</div>
									</a>
								</div>
							))}
						</div>
					</div>
				</section>

				<div className="w-full text-center my-[64px] text-sm text-gray-400">
					This is not an official website. All credit goes to midudev and his community ✨
				</div>
			</div>
		</main>
	);
}
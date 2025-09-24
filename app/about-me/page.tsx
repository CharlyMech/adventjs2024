import { RotationalImage } from "@/components";
import { IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About me"
};

// TODO -> Hydratation error

interface Link {
	href: string;
	label: string;
}

export default function AboutMe() {
	const links: Link[] = [
		{ href: "https://github.com/CharlyMech", label: "GitHub profile" },
		{ href: "https://www.linkedin.com/in/carlos-sanchezrecio-dev/", label: "LinkedIn profile" },
		{ href: "http://www.charlymech.com/", label: "Personal portfolio" },
	];
	return (
		<main className="min-h-max w-full xl:px-[128px] lg:px-[128px] md:px-[96px] sm:px-[64px] px-[32px]">
			<h1 className="text-[56px] md:text-[64px] font-bold mb-[16px]">About Me</h1>
			<div className="flex flex-col items-start gap-[16px]">
				<section className="w-full">
					<h3 className="text-[24px] md:text-[28px] font-semibold mb-[16px]">Hi! 👋 My name is Carlos.</h3>
					<div className="backdrop-blur-xl bg-white/5 shadow-lg shadow-gray-500/10 rounded-[8px] p-[16px] md:p-[24px] border border-white/10 w-full max-w-[1000px] mx-auto">
						<div className="flex flex-col items-center lg:flex-row lg:items-start gap-[32px]">
							<div className="shrink-0 flex justify-center lg:justify-start w-full md:w-[420px] lg:w-[450px] xl:w-[520px]">
								<RotationalImage
									primarySrc="/img/carlos.webp"
									secondarySrc="/img/charlymech.webp"
									altPrimary="Carlos"
									altSecondary="CharlyMech"
									className="w-full"
									height={400}
									width={350}
									borderRadius="8px"
								/>
							</div>
							<div className="w-full md:flex-1 md:min-w-0">
								<p className="text-[16px] xl:text-[18px] lg:text-[18px] md:text-[20px] leading-relaxed text-white">
									Also known as <span className="font-semibold">@CharlyMech</span>, I’m a <span className="font-semibold">Mobile and Full Stack Developer</span> from Spain, experienced in building cross-platform mobile frameworks, such as Flutter and React Native, also native development with Jetpack Compose (Kotlin), web development with React/NextJS and Angular and also data analysis and machine learning with Python and several libraries like FastAPI, Tensorflow, scikit-learn, pandas, numpy, matplotlib, seaborn, etc.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="mt-[16px] mx-auto w-full flex flex-col gap-[16px] mb-[64px]">
					<h3 className="text-[24px] md:text-[28px] font-semibold">Find me</h3>
					<div className="w-full md:max-w-[1000px] md:mx-auto">
						<div className="flex flex-col md:flex-row md:items-stretch gap-[16px]">
							{links.map((l) => (
								<div key={l.href} className="h-full w-full md:flex-1 md:min-w-0">
									<a href={l.href}
										target="_blank"
										rel="noopener noreferrer"
										className="h-full w-full block">
										<div className="h-full w-full flex flex-col justify-center backdrop-blur-xl bg-white/5 shadow-lg shadow-gray-500/10 rounded-[8px] p-[16px] md:p-[24px] border border-white/10">
											<div className="flex items-center justify-between gap-[16px]">
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
			</div>
		</main>
	);
}
import { RotationalImage } from "@/components";
import Link from "next/link";

export default function AboutMe() {
	return (
		<main className="min-h-max w-full xl:px-[128px] lg:px-[128px] md:px-[96px] sm:px-[64px] px-[32px]">
			<h1 className="text-4xl font-bold mb-6">About Me</h1>
			<div className="flex flex-col items-start gap-[16px]">
				<div className="w-full flex items-center justify-center">
					<div className="backdrop-blur-xl bg-white/5 shadow-lg shadow-gray-500/10 rounded-2xl p-8 md:p-12 border border-white/10 max-w-2xl mx-auto">
						<h3 className="text-2xl font-semibold mb-4">Hi! 👋 My name is Carlos Sánchez Recio.</h3>
						<RotationalImage
							primarySrc="/img/carlos.webp"
							secondarySrc="/img/charlymech.webp"
							altPrimary="Carlos"
							altSecondary="CharlyMech"
							className="w-full max-w-md lg:max-w-lg"
							height={500}
							width={400}
						/>
					</div>
				</div>
				<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
					Also known as <span className="font-semibold">@CharlyMech</span>, I’m a <span className="font-semibold">Mobile and Full Stack Developer</span> from Spain, experienced in building cross-platform mobile frameworks, such as Flutter and React Native, also native development with Jetpack Compose (Kotlin), web development with React/NextJS and Angular and finally also data analysis and machine learning with Python and several libraries like FastAPI, Tensorflow, scikit-learn, pandas, numpy, matplotlib, seaborn, etc.
				</p>
				<h2 className="text-2xl font-semibold mb-4">Find me online</h2>
				<ul className="space-y-3">
					<li>
						<Link
							href="https://github.com/CharlyMech"
							target="_blank"
							className="text-blue-600 dark:text-blue-400 hover:underline"
						>
							🌐 GitHub: @CharlyMech
						</Link>
					</li>
					<li>
						<Link
							href="https://www.linkedin.com/in/carlos-sanchezrecio-dev/"
							target="_blank"
							className="text-blue-600 dark:text-blue-400 hover:underline"
						>
							💼 LinkedIn: Carlos Sánchez Recio
						</Link>
					</li>
					<li>
						<Link
							href="http://www.charlymech.com/"
							target="_blank"
							className="text-blue-600 dark:text-blue-400 hover:underline"
						>
							🌍 Personal website: charlymech.com
						</Link>
					</li>
				</ul>
			</div>
		</main>
	);
}
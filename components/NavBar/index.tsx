"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import * as PhosphorIcon from "@phosphor-icons/react";
import { ElementType } from "react";

export type NavigationItem = {
	href: string;
	label: string;
	icon: keyof typeof PhosphorIcon;
};

type FullScreenNavbarProps = {
	githubUrl: string;
	externalImage?: {
		src: string;
		link: string;
		alt: string;
	};
};

const navigationItems: NavigationItem[] = [
	{
		href: "/",
		label: "Home",
		icon: "House",
	},
	{
		href: "/about-me",
		label: "About Me",
		icon: "User",
	},
	{
		href: "/about-adventjs",
		label: "About AdventJS",
		icon: "Info",
	},
];

export function NavBar({
	githubUrl,
	externalImage,
}: FullScreenNavbarProps) {
	const pathname = usePathname();

	return (
		<nav
			className="w-full px-[32px] py-[20px]"
		>
			{/* Left side - GitHub badge */}
			<div className="flex items-center space-x-4">
				{/* External image link (hidden on small screens) */}
				{externalImage && (
					<a
						href={externalImage.link}
						target="_blank"
						rel="noopener noreferrer"
						className="hidden md:inline-block"
					>
						<Image
							src={externalImage.src}
							alt={externalImage.alt}
							width={40}
							height={40}
						/>
					</a>
				)}

				{/* Dynamic Nav Links */}
				{navigationItems.map(({ href, label, icon }) => {
					const isActive = pathname === href;
					const IconComponent = PhosphorIcon[icon] as ElementType;

					return (
						<Link key={href} href={href}>
							<span
								className={`flex items-center space-x-1 hover:text-white hover:opacity-100 transition text-white ${isActive ? "opacity-100 font-semibold" : "opacity-60"
									}`}
							>
								<IconComponent weight={isActive ? "fill" : "duotone"} size={20} />
								<span className="hidden md:inline">{label}</span>
							</span>
						</Link>
					);
				})}
			</div>

			{/* Right side */}
			<div className="flex items-center space-x-6">
				<a href={githubUrl}></a>
			</div>
		</nav>
	);
}

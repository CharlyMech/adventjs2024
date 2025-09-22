"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ElementType } from "react";
import { GitHubBadge } from "../GitHubBadge";

import {
	IconHome,
	IconHomeFilled,
	IconUser,
	IconUserFilled,
	IconInfoCircle,
	IconInfoCircleFilled
} from '@tabler/icons-react';

export type NavigationItem = {
	href: string;
	label: string;
	icon: ElementType;
	iconFilled: ElementType;
};

const navigationItems: NavigationItem[] = [
	{
		href: "/",
		label: "Home",
		icon: IconHome,
		iconFilled: IconHomeFilled,
	},
	{
		href: "/about-me",
		label: "About Me",
		icon: IconUser,
		iconFilled: IconUserFilled,
	},
	{
		href: "/about-adventjs",
		label: "About AdventJS",
		icon: IconInfoCircle,
		iconFilled: IconInfoCircleFilled,
	},
];

export function NavBar() {
	const pathname = usePathname();

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 w-full px-[32px] py-[20px] flex justify-between backdrop-blur-xl bg-white/5 shadow-lg shadow-gray/10">
			{/* Left side*/}
			<div className="flex items-center space-x-4">
				{navigationItems.map(({ href, label, icon, iconFilled }) => {
					const isActive = pathname === href;
					const IconComponent = isActive ? iconFilled : icon;

					return (
						<Link key={href} href={href}>
							<span
								className={`flex items-center space-x-1 hover:text-white hover:opacity-100 transition text-white ${isActive ? "opacity-100 font-semibold" : "opacity-60"
									}`}
							>
								<IconComponent
									stroke={1.5}
									size={20}
								/>
								<span className="hidden md:inline">{label}</span>
							</span>
						</Link>
					);
				})}
			</div>

			{/* Right side */}
			<GitHubBadge githubUrl="https://github.com/CharlyMech/adventjs2024" />
		</nav>
	);
}
import type { PropsWithChildren, ReactNode } from "react";

export type HomeLayoutProps = Readonly<PropsWithChildren<{
	modals: ReactNode;
}>>;

export default async function HomeLayout({
	children,
	modals,
}: HomeLayoutProps) {
	return (
		<>
			{children}
			{modals}
		</>
	);
}
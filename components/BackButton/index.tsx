'use client';
import { useRouter } from "next/navigation";
import { IconArrowLeft } from "@tabler/icons-react";

export function BackButton() {
	const router = useRouter();
	return (
		<button
			onClick={() => router.push('/')}
			className="inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition"
			aria-label="Go back"
		>
			<IconArrowLeft size={32} />
		</button>
	);
}
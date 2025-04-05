'use client';

import { useRouter } from "next/router";

export function DayModal({ children }: Readonly<{
	children: React.ReactNode;
}>) {
	const router = useRouter();

	const handleClose = () => {
		router.back();
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
			<div className="bg-white dark:bg-zinc-900 w-full max-w-2xl rounded-xl shadow-lg p-6">
				<div className="mb-4">{children}</div>
				<div className="flex justify-end">
					<button
						onClick={handleClose}
						className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition"
					>
						Close
					</button>
				</div>
			</div>
		</div>
	);
}
import Link from "next/link";
import Image from "next/image";

export function AdventJSLogo() {
	return (
		<Link href='https://adventjs.dev/' target='_blank'>
			<Image
				src="/logo.webp"
				width={500}
				height={200}
				className="hidden md:block"
				alt="AdventJS Challenge logo from original web site"
			/>
		</Link>
	);
}
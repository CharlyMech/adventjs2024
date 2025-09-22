import Link from "next/link";
import Image from "next/image";

export function AdventJSLogo() {
	return (
		<Link href='https://adventjs.dev/' target='_blank'>
			<Image
				src="/logo.webp"
				width={500}
				height={200}
				className="scale-60 md:scale-100"
				alt="AdventJS Challenge logo from original web site"
			/>
		</Link>
	);
}
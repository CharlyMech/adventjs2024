import Link from "next/link";
import { IconBrandGithubFilled } from '@tabler/icons-react';

export function GitHubBadge({ githubUrl }: { githubUrl: string }) {
	return (
		<Link href={githubUrl} target="_blank">
			<div className="w-auto h-[36px] rounded-[8px] shadow-lg bg-[#0E1217] flex items-center justify-start">
				<div className="h-[36px] w-[36px] rounded-[8px] bg-white flex items-center justify-center">
					<IconBrandGithubFilled color="#0E1217" width={20} height={20} />
				</div>
				<p className="text-white text-xs hidden md:inline px-2">Project&apos;s repository</p>
			</div>
		</Link>
	);
}

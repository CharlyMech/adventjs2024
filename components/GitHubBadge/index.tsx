import Link from "next/link";
import { IconBrandGithubFilled } from '@tabler/icons-react';

export function GitHubBadge({ githubUrl }: { githubUrl: string }) {
	return (
		<Link href={githubUrl} target="_blank">
			<div className="flex items-center space-x-2 h-10 w-50 rounded-[12px] p-2 shadow-lg" style={{ backgroundColor: "#0E1217" }}>
				<div className="rounded-[8px] bg-white p-1">
					<IconBrandGithubFilled color="#0E1217" width={20} height={20} />
				</div>
				<p className="text-white text-xs">Project&apos;s repository</p>
			</div>
		</Link>
	);
}

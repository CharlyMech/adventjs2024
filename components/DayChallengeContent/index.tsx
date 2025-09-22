"use client";

import { Challenge } from "@/data/challenges";
import { useEffect, useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";

export function DayChallengeContent({
	challenge,
}: {
	challenge: Challenge;
}) {
	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) {
		return (
			<div>
				{challenge.statement && (
					<p className="italic">{challenge.statement}</p>
				)}
				{challenge.code && (
					<div className="bg-gray-100 p-4 rounded-lg my-4">
						<pre className="text-sm font-mono whitespace-pre-wrap">
							<code>{challenge.code}</code>
						</pre>
					</div>
				)}
				{challenge.additionalComment && (
					<div dangerouslySetInnerHTML={{ __html: challenge.additionalComment }} />
				)}
			</div>
		);
	}

	return (
		<div>
			{challenge.statement && (
				<div className="rich-html italic" dangerouslySetInnerHTML={{ __html: challenge.statement }} />
			)}
			{challenge.code && (
				<div className="my-4">
					<CodeBlock
						code={challenge.code}
						language="typescript"
						showLineNumbers={true}
					/>
				</div>
			)}
			{challenge.additionalComment && (
				<div dangerouslySetInnerHTML={{ __html: challenge.additionalComment }} />
			)}
		</div>
	);
}

"use client";

import { Challenge } from "@/data/challenges";
import { useEffect, useState } from "react";

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
				{/* CODEBLOCK */}
				{challenge.additionalComment && (
					<b><p>{challenge.additionalComment}</p></b>
				)}
			</div>
		);
	}

	return (
		<div>
			{challenge.statement && (
				<p className="italic" dangerouslySetInnerHTML={{ __html: challenge.statement }} />
			)}
			{/* CODEBLOCK */}
			{challenge.additionalComment && (
				<b><p dangerouslySetInnerHTML={{ __html: challenge.additionalComment }} /></b>
			)}
		</div>
	);
}

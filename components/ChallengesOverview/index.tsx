"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { challenges } from '@/data/challenges';
import { IconCalendarWeekFilled, IconExternalLink, IconStar, IconStarFilled } from '@tabler/icons-react';

interface GitHubUser {
	login: string;
	name: string;
	avatar_url: string;
	html_url: string;
	bio: string;
	public_repos: number;
	followers: number;
	following: number;
	location: string;
	company: string;
}

interface ChallengeStats {
	totalChallenges: number;
	totalStars: number;
	completedChallenges: number;
	totalEarnedStars: number;
	averageStars: number;
}

export function ChallengesOverview() {
	const [githubUser, setGithubUser] = useState<GitHubUser | null>(null);
	const [challengeStats, setChallengeStats] = useState<ChallengeStats | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const username = 'charlymech';

	function calculateChallengeStats(): ChallengeStats {
		const totalChallenges = challenges.length;
		const totalStars = totalChallenges * 5;
		const totalEarnedStars = challenges.reduce((sum, challenge) => sum + challenge.stars, 0);
		const completedChallenges = challenges.length;
		const averageStars = totalEarnedStars / totalChallenges;

		return {
			totalChallenges,
			totalStars,
			completedChallenges,
			totalEarnedStars,
			averageStars
		};
	}

	async function fetchGitHubUser() {
		try {
			const response = await fetch(`https://api.github.com/users/${username}`);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const userData: GitHubUser = await response.json();
			setGithubUser(userData);
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Failed to fetch GitHub data');
		}
	};

	useEffect(() => {
		async function initializeData() {
			setLoading(true);
			try {
				const stats = calculateChallengeStats();
				setChallengeStats(stats);

				await fetchGitHubUser();
			} catch (err) {
				setError('Failed to initialize data');
			} finally {
				setLoading(false);
			}
		};

		initializeData();
	}, []);

	if (loading) {
		return (
			<div className="relative min-w-[350px] max-w-[550px] p-[16px] rounded-[8px] shadow-lg flex items-center justify-center overflow-hidden cursor-pointer w-full">
				<div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-[8px] shadow-inner" />
				<div className="w-full h-full z-10 flex items-center justify-center text-white">
					Loading...
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="relative min-w-[350px] max-w-[550px] p-[16px] rounded-[8px] shadow-lg flex items-center justify-center overflow-hidden cursor-pointer w-full">
				<div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-[8px] shadow-inner" />
				<div className="w-full h-full z-10 flex items-center justify-center text-red-500">
					Error: {error}
				</div>
			</div>
		);
	}

	return (
		<div
			className="relative min-w-[350px] max-w-[650px] p-[12px] rounded-[8px] shadow-lg flex items-center justify-center overflow-hidden cursor-pointer w-full"
		>
			<div className="absolute inset-0 bg-[#0c1117]/70 backdrop-blur-sm rounded-[8px] shadow-inner" />
			<div className="w-full h-full z-10">
				<div className="w-full flex items-center">
					<div className="w-full flex flex-col gap-[12px]">
						{githubUser && (
							<div className="flex items-start gap-[12px]">
								<Image
									src={githubUser.avatar_url}
									alt={githubUser.name || githubUser.login}
									width={96}
									height={96}
									className="rounded-[4px]"
								/>
								<div className="flex-1 flex flex-col justify-between h-[96px]">
									<div>
										<div className='w-full flex flex-col sm:flex-row items-baseline gap-[6px]'>
											<h2 className="text-[18px] sm:text-[24px] font-bold text-white">
												{githubUser.name || githubUser.login}
											</h2>
											<p className="text-[14px] sm:text-[18px] text-white/80">@{githubUser.login}</p>
										</div>
										{githubUser.bio && (
											<p className="text-xs text-white/70 mt-1">{githubUser.bio}</p>
										)}
									</div>
									<a
										href={githubUser.html_url}
										target="_blank"
										rel="noopener noreferrer"
										className="text-xs text-blue-400 hover:text-blue-300 underline flex items-center gap-[4px]"
									>
										<span>View Profile</span>
										<IconExternalLink size={16} />
									</a>
								</div>
							</div>
						)}

						{challengeStats && (
							<div className='w-full flex flex-col sm:flex-row gap-[12px]'>
								<div
									className={`flex-1 relative bg-transparent rounded-[4px] py-[4px] px-[8px] shadow-lg flex flex-col w-full`}
								>
									<div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg shadow-inner" />
									<div className="w-full h-full z-10">
										<div className="w-full flex flex-col items-start gap-[4px]">
											<h3>Completed days:</h3>
											<div className="w-full flex items-center justify-center gap-[8px]">
												<p className="text-[24px] font-semibold text-white inline-flex items-center gap-[8px]">
													<IconCalendarWeekFilled className="text-red-500" size={22} />
													{challengeStats.completedChallenges}/{challengeStats.totalChallenges}
												</p>
											</div>
										</div>
									</div>
								</div>
								<div
									className={`flex-1 relative bg-transparent rounded-[4px] py-[4px] px-[8px] shadow-lg flex flex-col w-full`}
								>
									<div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg shadow-inner" />
									<div className="w-full h-full z-10">
										<div className="w-full flex flex-col items-start gap-[4px]">
											<h3>Earned stars:</h3>
											<div className="w-full flex items-center justify-center gap-[8px]">
												<p className="text-[24px] font-semibold text-white inline-flex items-center gap-[8px]">
													<IconStarFilled className="text-[#ffcc00]" size={22} />
													{challengeStats.totalEarnedStars}/{challengeStats.totalStars}
												</p>
											</div>
										</div>
									</div>
								</div>
								<div
									className={`flex-1 relative bg-transparent rounded-[4px] py-[4px] px-[8px] shadow-lg flex flex-col w-full`}
								>
									<div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg shadow-inner" />
									<div className="w-full h-full z-10">
										<div className="w-full flex flex-col items-start gap-[4px]">
											<h3>Average stars:</h3>
											<div className="w-full flex items-center justify-center gap-[8px]">
												<p className="text-[24px] font-semibold text-white inline-flex items-center gap-[8px]">
													<IconStar className="text-green-500" size={22} />
													{challengeStats.averageStars.toFixed(1)}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
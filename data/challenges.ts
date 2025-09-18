export enum Difficulty {
	EASY = "Easy",
	MEDIUM = "Medium",
	HARD = "Hard",
}

export type Challenge = {
	day: number;
	filePath: string;
	difficulty: Difficulty;
	stars: number;
};

export const challenges: Challenge[] = [
	{
		day: 1,
		filePath: "data/challenges/md/1.md",
		difficulty: Difficulty.EASY,
		stars: 5,
	},
	{
		day: 2,
		filePath: "data/challenges/md/2.md",
		difficulty: Difficulty.EASY,
		stars: 3,
	},
	{
		day: 3,
		filePath: "data/challenges/md/3.md",
		difficulty: Difficulty.EASY,
		stars: 4,
	},
	{
		day: 4,
		filePath: "data/challenges/md/4.md",
		difficulty: Difficulty.MEDIUM,
		stars: 4,
	},
	{
		day: 5,
		filePath: "data/challenges/md/5.md",
		difficulty: Difficulty.EASY,
		stars: 3,
	},
	{
		day: 6,
		filePath: "data/challenges/md/6.md",
		difficulty: Difficulty.MEDIUM,
		stars: 5,
	},
	{
		day: 7,
		filePath: "data/challenges/md/7.md",
		difficulty: Difficulty.MEDIUM,
		stars: 5,
	},
	{
		day: 8,
		filePath: "data/challenges/md/8.md",
		difficulty: Difficulty.EASY,
		stars: 4,
	},
	{
		day: 9,
		filePath: "data/challenges/md/9.md",
		difficulty: Difficulty.MEDIUM,
		stars: 1,
	},
	{
		day: 10,
		filePath: "data/challenges/md/10.md",
		difficulty: Difficulty.MEDIUM,
		stars: 3,
	},
	{
		day: 11,
		filePath: "data/challenges/md/11.md",
		difficulty: Difficulty.EASY,
		stars: 5,
	},
	{
		day: 12,
		filePath: "data/challenges/md/12.md",
		difficulty: Difficulty.EASY,
		stars: 4,
	},
	{
		day: 13,
		filePath: "data/challenges/md/13.md",
		difficulty: Difficulty.HARD,
		stars: 4,
	},
	{
		day: 14,
		filePath: "data/challenges/md/14.md",
		difficulty: Difficulty.EASY,
		stars: 5,
	},
	{
		day: 15,
		filePath: "data/challenges/md/15.md",
		difficulty: Difficulty.EASY,
		stars: 3,
	},
	{
		day: 16,
		filePath: "data/challenges/md/16.md",
		difficulty: Difficulty.EASY,
		stars: 5,
	},
	{
		day: 17,
		filePath: "data/challenges/md/17.md",
		difficulty: Difficulty.MEDIUM,
		stars: 5,
	},
	{
		day: 18,
		filePath: "data/challenges/md/18.md",
		difficulty: Difficulty.HARD,
		stars: 4,
	},
	{
		day: 19,
		filePath: "data/challenges/md/19.md",
		difficulty: Difficulty.HARD,
		stars: 2,
	},
	{
		day: 20,
		filePath: "data/challenges/md/20.md",
		difficulty: Difficulty.EASY,
		stars: 5,
	},
	{
		day: 21,
		filePath: "data/challenges/md/21.md",
		difficulty: Difficulty.EASY,
		stars: 5,
	},
	{
		day: 22,
		filePath: "data/challenges/md/22.md",
		difficulty: Difficulty.MEDIUM,
		stars: 2,
	},
	{
		day: 23,
		filePath: "data/challenges/md/23.md",
		difficulty: Difficulty.EASY,
		stars: 4,
	},
	{
		day: 24,
		filePath: "data/challenges/md/24.md",
		difficulty: Difficulty.MEDIUM,
		stars: 3,
	},
	{
		day: 25,
		filePath: "data/challenges/md/25.md",
		difficulty: Difficulty.MEDIUM,
		stars: 1,
	},
	{
		day: 26,
		filePath: "data/challenges/md/26.md",
		difficulty: Difficulty.EASY,
		stars: 3,
	},
];

import { Difficulty } from "@/data/challenges";

const getDifficultyColor = (difficulty: Difficulty) => {
	switch (difficulty) {
		case 'Easy': return 'bg-green-500';
		case 'Medium': return 'bg-yellow-500';
		case 'Hard': return 'bg-red-500';
		default: return 'bg-gray-500';
	}
};

export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
	return (
		<div className="flex items-center gap-[8px] bg-white text-black py-[2px] px-[8px] rounded-full">
			<span className={`w-[8px] h-[8px] rounded-full ${getDifficultyColor(difficulty)}`}></span>
			{difficulty}
		</div>
	);
}
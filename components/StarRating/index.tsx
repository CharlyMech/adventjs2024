import { IconStar, IconStarFilled } from '@tabler/icons-react';

export function StarRating({ rating }: { rating: number }) {
	return (
		<div className="flex">
			{[...Array(5)].map((_, i) =>
				i < rating ?
					<IconStarFilled key={i} className="text-[#ffcc00]" size={16} /> :
					<IconStar key={i} className="text-white" size={16} />
			)}
		</div>
	);
}
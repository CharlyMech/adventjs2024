type CardProps = {
	colSpan: number;
	rowSpan: number;
	day: number;
};

export default function Card({ colSpan, rowSpan, day }: CardProps) {
	return (
		<div
			className={`relative bg-transparent p-6 rounded-lg shadow-lg flex items-center justify-center overflow-hidden`}
			style={{
				gridColumn: `span ${colSpan} / span ${colSpan}`,
				gridRow: `span ${rowSpan} / span ${rowSpan}`,
			}}
		>
			<div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm rounded-lg shadow-inner"></div>
			<span className="text-xl font-semibold z-10">Day {day}</span>
		</div>
	);
}
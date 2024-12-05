/*
Santa Claus's elves 🧝🧝‍♂️ have found a bunch of mismatched magic boots in the workshop. Each boot is described by two values:

- type indicates if it's a left boot (I) or a right boot (R).
- size indicates the size of the boot.
Your task is to help the elves pair all the boots of the same size having a left and a right one. To do this, you should return a list of the available sizes after pairing the boots.
*/

type Shoe = {
	type: "I" | "R";
	size: number;
};

function organizeShoes(shoes: Shoe[]): number[] {
	const breakdownShoes = shoes.reduce<
		Record<number, { I: number; R: number }>
	>((acc, { size, type }) => {
		acc[size] ||= { I: 0, R: 0 };
		acc[size][type]++;
		return acc;
	}, {});

	return Object.entries(breakdownShoes).flatMap(([size, { I, R }]) => {
		const pairs = Math.min(I, R);
		return Array(pairs).fill(Number(size));
	});
}

const shoes: Shoe[] = [
	{ type: "I", size: 38 },
	{ type: "R", size: 38 },
	{ type: "R", size: 42 },
	{ type: "I", size: 41 },
	{ type: "I", size: 42 },
];

organizeShoes(shoes);
// [38, 42]

const shoes2: Shoe[] = [
	{ type: "I", size: 38 },
	{ type: "R", size: 38 },
	{ type: "I", size: 38 },
	{ type: "I", size: 38 },
	{ type: "R", size: 38 },
];
organizeShoes(shoes2);
// [38, 38]

const shoes3: Shoe[] = [
	{ type: "I", size: 38 },
	{ type: "R", size: 36 },
	{ type: "R", size: 42 },
	{ type: "I", size: 41 },
	{ type: "I", size: 43 },
];

organizeShoes(shoes3);
// []

// 3 ⭐ //

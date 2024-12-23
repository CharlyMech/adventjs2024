/*
The day to give out gifts is approaching! We need to stack the gifts we will transport on the sleigh 🛷, and for that, we are going to put them in boxes 📦.

The gifts can be placed in 4 different boxes, where each box can hold weights of 1, 2, 5, and 10, represented as follows:
1: |_|
    _____
2: |_____|
    _____
5: |     |
   |_____|

_________
10: |         |
    |_________|

//JavaScript representation:
const boxRepresentations = {
  1: [" _ ", "|_|"] ,
  2: [" ___ ", "|___|"],
  5: [" _____ ", "|     |", "|_____|"],
  10: [" _________ ", "|         |", "|_________|"]
}

Your mission is, upon receiving the weight of the gifts, to use the fewest boxes possible and also stack them from less weight (top) to more weight (bottom). Always aligned to the left.

Additionally, keep in mind that when stacking them, the lower edge of the box is reused.
*/

// Note: Be careful with the white spaces! Do not add whitespace to the right of a box unless necessary.

function distributeWeight(weight: number): string {
	const boxRepresentations: Record<number, string[]> = {
		1: [" _ ", "|_|"],
		2: [" ___ ", "|___|"],
		5: [" _____ ", "|     |", "|_____|"],
		10: [" _________ ", "|         |", "|_________|"],
	};
	const boxKeys: number[] = Object.keys(boxRepresentations)
		.map((key) => parseInt(key, 10))
		.sort((a, b) => b - a);
	const boxes: string[][] = [];

	while (weight > 0) {
		if (weight < boxKeys[0]) {
			boxKeys.shift();
			continue;
		}

		const boxWeight: number = boxKeys[0];
		const boxRepresentation: string[] = [...boxRepresentations[boxWeight]];

		if (boxes.length > 0) {
			const previousBoxTop: string = boxes[boxes.length - 1][0];
			const currentBoxBottom: string =
				boxRepresentation[boxRepresentation.length - 1];
			console.log(previousBoxTop, "\n", currentBoxBottom);
			const paddedBottom: string = currentBoxBottom.padEnd(
				previousBoxTop.length - 1,
				"_"
			);
			boxRepresentation[boxRepresentation.length - 1] = paddedBottom;
			boxes[boxes.length - 1].shift();
		}

		boxes.push(boxRepresentation);
		weight -= boxWeight;
	}

	return boxes.reverse().flat().join("\n");
}

distributeWeight(1);
// Returns:
//  _
// |_|

distributeWeight(2);
// Returns:
//  ___
// |___|

distributeWeight(3);
// Returns:
//  _
// |_|_
// |___|

distributeWeight(4);
// Returns:
//  ___
// |___|
// |___|

distributeWeight(5);
// Returns:
//  _____
// |     |
// |_____|

distributeWeight(6);
// Returns:
//  _
// |_|___
// |     |
// |_____|

// 2 ⭐ //

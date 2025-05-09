/*
Santa Claus 🎅 is checking a list of unique toys that he might include in his magic gift bag. He wants to explore all possible combinations of toys. He wants to see all combinations that actually contain at least one toy.

Your task is to write a function that, given an array of toys, returns all possible combinations.

Important: You must return it in the order the toys appear and in combinations from 1 to n toys.
*/

function generateGiftSets(gifts: string[]): string[][] {
	const result: string[][] = [];

	function backtrack(current: string[], index: number): void {
		if (current.length > 0) {
			result.push([...current]);
		}

		for (let i = index; i < gifts.length; i++) {
			current.push(gifts[i]);
			backtrack(current, i + 1);
			current.pop();
		}
	}

	backtrack([], 0);
	return result.sort((a, b) => a.length - b.length);
}

generateGiftSets(["car", "doll", "puzzle"]);
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

generateGiftSets(["ball"]);
// [
//   ['ball']
// ]

generateGiftSets(["game", "pc"]);
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]

// 2 ⭐ //

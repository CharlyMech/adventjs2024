/*
We have already wrapped hundreds of presents 🎁… but an elf forgot to check if the present, represented by an asterisk *, is inside the box.

The box has a present (*) and counts as "inside the box" if:

It is completely surrounded by # on the box's edges.
The * is not on the box's edges.
Keep in mind that the * can be inside, outside, or may not even be there. We must return true if the * is inside the box and false otherwise.
*/

function inBox(box: string[]): boolean {
	if (box.length < 3) return false;

	box.pop();
	box.shift();

	const isInTheBox = /#\s*\*\s*#/;
	for (const i of box) {
		if (isInTheBox.test(i)) return true;
	}
	return false;
}

console.log(inBox(["###", "#*#", "###"])); // ➞ true

console.log(inBox(["####", "#* #", "#  #", "####"])); // ➞ true

console.log(inBox(["*####", "#   #", "#  #*", "####"])); // ➞ false

console.log(inBox(["#####", "#   #", "#   #", "#   #", "#####"])); // ➞ false

// 5 ⭐ //

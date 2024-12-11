/*
The elves are playing with a magical train 🚂 that carries gifts. This train moves on a board represented by an array of strings.

The train consists of an engine (@), followed by its carriages (o), and must collect magical fruits (*) which serve as fuel. The movement of the train follows these rules:

You will receive two parameters board and mov.

board is an array of strings that represents the board:
- @ is the train's engine.
- o are the train's carriages.
- * is a magical fruit.
- · are empty spaces.

mov is a string that indicates the next movement of the train from the train's head @:
- 'L': left
- 'R': right
- 'U': up
- 'D': down.

With this information, you must return a string:
- 'crash': If the train crashes into the edges of the board or itself.
- 'eat': If the train collects a magical fruit (*).
- 'none': If it moves without crashing or collecting any magical fruit.
*/

type Board = string[];
type Movement = "U" | "D" | "R" | "L";
type Result = "none" | "crash" | "eat";

function moveTrain(board: Board, mov: Movement): Result {
	const trainCoordinates = board.reduce<[number, number] | []>(
		(acc, value, rowIndex) => {
			if (acc.length > 0) return acc;
			const colIndex = value.indexOf("@");
			return colIndex !== -1 ? [colIndex, rowIndex] : acc;
		},
		[]
	);
	if (trainCoordinates.length == 0) return "none";

	let [col, row] = trainCoordinates;

	switch (mov) {
		case "U":
			row -= 1;
			break;
		case "D":
			row += 1;
			break;
		case "L":
			col -= 1;
			break;
		case "R":
			col += 1;
			break;
	}

	if (row < 0 || row >= board.length || col < 0 || col >= board[0].length)
		return "crash";

	const newPosition = board[row][col];

	if (newPosition === "o") return "crash";

	if (newPosition === "*") return "eat";

	return "none";
}

const board = ["·····", "*····", "@····", "o····", "o····"];
/*
"·····", 
"*····", 
"@····", 
"o····",
"o····"
*/

console.log(moveTrain(board, "U"));
// ➞ 'eat'
// Because the train moves up and finds a magical fruit

console.log(moveTrain(board, "D"));
// ➞ 'crash'
// The train moves down and the head crashes into itself

console.log(moveTrain(board, "L"));
// ➞ 'crash'
// The train moves to the left and crashes into the wall

console.log(moveTrain(board, "R"));
// ➞ 'none'
// The train moves to the right and there is empty space on the right

// 1 ⭐ //

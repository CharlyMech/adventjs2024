export enum Difficulty {
	EASY = "Easy",
	MEDIUM = "Medium",
	HARD = "Hard",
}

export type Challenge = {
	day: number;
	difficulty: Difficulty;
	statement: string;
	code: string;
	additionalComment?: string;
	stars: number;
};

export const challenges: Challenge[] = [
	{
		day: 1,
		difficulty: Difficulty.EASY,
		statement: `
		<p>Santa Claus 🎅 has received a list of magical numbers representing gifts 🎁, but some of them are duplicated and must be removed to avoid confusion. Additionally, the gifts must be sorted in ascending order before being delivered to the elves.</p>
		<br/>
		<p>Your task is to write a function that receives a list of integers (which may include duplicates) and returns a new list without duplicates, sorted in ascending order.</p>`,
		code: `function prepareGifts(gifts: number[]): number[] {
	const uniqueList = [...new Set(gifts)];
	return uniqueList.sort((a, b) => a - b);
}

const gifts1 = [3, 1, 2, 3, 4, 2, 5];
const preparedGifts1 = prepareGifts(gifts1);
console.log(preparedGifts1); // [1, 2, 3, 4, 5]

const gifts2 = [6, 5, 5, 5, 5];
const preparedGifts2 = prepareGifts(gifts2);
console.log(preparedGifts2); // [5, 6]

const gifts3: number[] = [];
const preparedGifts3 = prepareGifts(gifts3);
console.log(preparedGifts3); // []
// There are no gifts, the list remains empty`,
		stars: 5,
	},
	{
		day: 2,
		difficulty: Difficulty.EASY,
		statement: `
		<p>Santa Claus 🎅 wants to frame the names of the good children to decorate his workshop 🖼️, but the frame must follow specific rules. Your task is to help the elves generate this magical frame.</p>
		<br/>
		<p>Rules:</p>
		<ul>
			<li>Given an array of names, you must create a rectangular frame that contains all of them.</li>
			<li>Each name must be on a line, aligned to the left.</li>
			<li>The frame is built with * and has a border one line thick.</li>
			<li>The width of the frame automatically adapts to the longest name plus a margin of 1 space on each side.</li>
		</ul>
		`,
		code: `function createFrame(names: string[]): string {
	const nameMaxLength = names.reduce((longest, current) =>
		current.length > longest.length ? current : longest
	).length;
	const frame = "*".repeat(nameMaxLength + 4);
	const rowNamesList = names.map(
		(name) => \`* \${name.padEnd(nameMaxLength, " ")} *\`
	);
	return [frame, ...rowNamesList, frame].join("\n");
}

createFrame(["midu", "madeval", "educalvolpz"]);

// Expected result:
/* ***************
* midu        *
* madeval     *
* educalvolpz *
*************** */

createFrame(["midu"]);

// Expected result:
/* ********
* midu *
******** */

createFrame(["a", "bb", "ccc"]);

// Expected result:
/* *******
* a   *
* bb  *
* ccc *
******* */

createFrame(["a", "bb", "ccc", "dddd"]);`,
		stars: 3,
	},
	{
		day: 3,
		difficulty: Difficulty.EASY,
		statement: `
		<p>Santa Claus 🎅 is checking his workshop inventory to prepare gift delivery. The elves have recorded the toys in an array of objects, but the information is a bit disorganized. You need to help Santa organize the inventory.</p>
		<p>You will receive an array of objects, where each object represents a toy and has the properties:</p>
		<ul>
			<li>name: the name of the toy (string).</li>
			<li>quantity: the available quantity of that toy (integer).</li>
			<li>category: the category to which the toy belongs (string).</li>
		</ul>
		<p>Write a function that processes this array and returns an object that organizes the toys as follows:</p>
		<ul>
			<li>The keys of the object will be the categories of toys.</li>
			<li>The values will be objects that have the toy names as keys and the total quantities of each toy in that category as values.</li>
			<li>If there are toys with the same name in the same category, you must sum their quantities.</li>
			<li>If the array is empty, the function should return an empty object {}.</li>
		</ul>
		`,
		code: `type Inventory = Array<{ name: string; quantity: number; category: string }>;
type InventoryOutput = Record<string, Record<string, number>>;

function organizeInventory(inventory: Inventory): InventoryOutput {
const result = inventory.reduce((acc, curr) => {
	acc[curr.category] ||= {};
	acc[curr.category][curr.name] =
		(acc[curr.category][curr.name] || 0) + curr.quantity;
	return acc;
}, {} as InventoryOutput);
return result;
}

const inventary = [
	{ name: "doll", quantity: 5, category: "toys" },
	{ name: "car", quantity: 3, category: "toys" },
	{ name: "ball", quantity: 2, category: "sports" },
	{ name: "car", quantity: 2, category: "toys" },
	{ name: "racket", quantity: 4, category: "sports" },
];

console.log(organizeInventory(inventary));

// Expected result:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }

const inventary2 = [
	{ name: "book", quantity: 10, category: "education" },
	{ name: "book", quantity: 5, category: "education" },
	{ name: "paint", quantity: 3, category: "art" },
];

console.log(organizeInventory(inventary2));

// Expected result:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }`,
		stars: 4,
	},
	{
		day: 4,
		difficulty: Difficulty.MEDIUM,
		statement: `
		<p>It's time to put up the Christmas tree at home! 🎄 But this year we want it to be special. We're going to create a function that receives the height of the tree (a positive integer between 1 and 100) and a special character to decorate it.</p>
		<p>The function should return a string that represents the Christmas tree, constructed as follows:</p>
		<ul>
			<li>The tree is made up of triangles of special characters.</li>
			<li>The spaces on the sides of the tree are represented with underscores _.</li>
			<li>All trees have a trunk of two lines, represented by the # character.</li>
			<li>The tree should always have the same length on each side.</li>
			<li>You must ensure the tree has the correct shape using line breaks \\n for each line.</li>
		</ul>
		`,
		code: `function createXmasTree(height: number, ornament: string): string {
	const topTree = Array.from(
		{ length: height },
		(_, i) =>
			\`\${"_".repeat(height - i - 1)}\${ornament.repeat(
				2 * i + 1
			)}\${"_".repeat(height - i - 1)}\`
	).join("\n");

	const treeBaseLine = \`\${"_".repeat(height - 1)}\#\${"_".repeat(height - 1)}\`;

	// Combine the top tree and base parts in one step
	return \`\${topTree}\n\${treeBaseLine}\\n\${treeBaseLine}\`;
}

const tree = createXmasTree(5, "*");
console.log(tree);
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, "+");
console.log(tree2);
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, "@");
console.log(tree3);
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/`,
		stars: 4,
	},
	{
		day: 5,
		difficulty: Difficulty.EASY,
		statement: `
		<p>Santa Claus's elves 🧝🧝‍♂️ have found a bunch of mismatched magic boots in the workshop. Each boot is described by two values:</p>
		<ul>
			<li>type indicates if it's a left boot (I) or a right boot (R).</li>
			<li>size indicates the size of the boot.</li>
		</ul>
		<p>Your task is to help the elves pair all the boots of the same size having a left and a right one. To do this, you should return a list of the available sizes after pairing the boots.</p>
`,
		code: `type Shoe = {
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
// []`,
		stars: 3,
	},
	{
		day: 6,
		difficulty: Difficulty.MEDIUM,
		statement: `
		<p>We have already wrapped hundreds of presents 🎁… but an elf forgot to check if the present, represented by an asterisk *, is inside the box.</p>
		<p>The box has a present (*) and counts as "inside the box" if:</p>
		<ul>
			<li>It is completely surrounded by # on the box's edges.</li>
			<li>The * is not on the box's edges.</li>
		</ul>
		<p>Keep in mind that the * can be inside, outside, or may not even be there. We must return true if the * is inside the box and false otherwise.</p>
		`,
		code: `function inBox(box: string[]): boolean {
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
console.log(inBox(["#####", "#   #", "#   #", "#   #", "#####"])); // ➞ false`,
		stars: 5,
	},
	{
		day: 7,
		difficulty: Difficulty.MEDIUM,
		statement: `
		<p>The grinch 👹 has passed through Santa Claus's workshop! And what a mess he has made. He has changed the order of some packages, so shipments cannot be made.</p>
		<p>Luckily, the elf Pheralb has detected the pattern the grinch followed to jumble them. He has written the rules that we must follow to reorder the packages. The instructions are as follows:</p>
		<p>You will receive a string containing letters and parentheses.</p>
		<p>Every time you find a pair of parentheses, you need to reverse the content within them.</p>
		<p>If there are nested parentheses, solve the innermost ones first.</p>
		<p>Return the resulting string with parentheses removed, but with the content correctly reversed.</p>
		`,
		code: `function fixPackages(packages: string): string {
	const stack: string[] = [];
	let current = "";

	for (const char of packages) {
		if (char === "(") {
			stack.push(current);
			current = "";
		} else if (char === ")") {
			const reversed = current.split("").reverse().join("");
			current = stack.pop()! + reversed;
		} else {
			current += char;
		}
	}

	return current;
}

console.log(fixPackages("a(cb)de"));
// ➞ "abcde"
// We reverse "cb" inside the parentheses

console.log(fixPackages("a(bc(def)g)h"));
// ➞ "agdefcbh"
// 1st we reverse "def" → "fed", then we reverse "bcfedg" → "gdefcb"

console.log(fixPackages("abc(def(gh)i)jk"));
// ➞ "abcighfedjk"
// 1st we reverse "gh" → "hg", then "defhgi" → "ighfed"

console.log(fixPackages("a(b(c))e"));
// ➞ "acbe"
// 1st we reverse "c" → "c", then "bc" → "cb"`,
		stars: 5,
	},
	{
		day: 8,
		difficulty: Difficulty.EASY,
		statement: `
		<p>It's time to select the fastest reindeer for Santa's journeys! 🦌🎄</p>
		<p>Santa Claus has organized exciting reindeer races to determine which ones are in the best shape.</p>
		<p>Your task is to display each reindeer's progress on a snow track in isometric format.</p>
		<p>The information you receive:</p>
		<ul>
			<li>indices: An array of integers representing each reindeer's progress on the track:</li>
			<li>0: The lane is empty.</li>
			<li>Positive number: The reindeer's current position from the beginning of the track.</li>
			<li>Negative number: The reindeer's current position from the end of the track.</li>
			<li>length: The length of each lane.</li>
		</ul>
		<p>Return a string representing the race track:</p>
		<ul>
			<li>Each lane has exactly length positions filled with snow (~).</li>
			<li>Each reindeer is represented with the letter r.</li>
			<li>Lanes are numbered at the end with /1, /2, etc.</li>
			<li>The view is isometric, so the lower lanes are shifted to the right.</li>
		</ul>
		`,
		code: `function drawRace(indices: number[], length: number): string {
	return indices
		.map((value: number, index) => {
			const replaceIndex = value < 0 ? length + value : value;
			const race = Array(length).fill("~");
			if (replaceIndex != 0) race[replaceIndex] = "r";
			return (
				" ".repeat(indices.length - index - 1) +
				race.join("") +
				\` /\${index + 1}\`
			);
		})
		.join("\\n");
}

console.log(drawRace([0, 5, -3], 10));
/*
~~~~~~~~~~ /1
~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

console.log(drawRace([2, -1, 0, 5], 8));
/*
	~~r~~~~~ /1
~~~~~~~r /2
~~~~~~~~ /3
~~~~~r~~ /4
*/

console.log(drawRace([3, 7, -2], 12));
/*
~~~r~~~~~~~~ /1
~~~~~~~~r~~~ /2
~~~~~~~~~r~~ /3
*/`,
		stars: 4,
	},
	{
		day: 9,
		difficulty: Difficulty.MEDIUM,
		statement: `
		<p>The elves are playing with a magical train 🚂 that carries gifts. This train moves on a board represented by an array of strings.</p>
		<p>The train consists of an engine (@), followed by its carriages (o), and must collect magical fruits (*) which serve as fuel. The movement of the train follows these rules:</p>
		<ul>
			<li>The train consists of an engine (@), followed by its carriages (o), and must collect magical fruits (*) which serve as fuel. The movement of the train follows these rules:</li>
		</ul>
		<p>You will receive two parameters board and mov.</p>
		<p>board is an array of strings that represents the board:</p>
		<ul>
			<li>@ is the train's engine.</li>
			<li>o are the train's carriages.</li>
			<li>* is a magical fruit.</li>
			<li>· are empty spaces.</li>
		</ul>
		<p>mov is a string that indicates the next movement of the train from the train's head @:</p>
		<ul>
			<li>'L': left</li>
			<li>'R': right</li>
			<li>'U': up</li>
			<li>'D': down.</li>
		</ul>
		<p>With this information, you must return a string:</p>
		<ul>
			<li>'crash': If the train crashes into the edges of the board or itself.</li>
			<li>'eat': If the train collects a magical fruit (*).</li>
			<li>'none': If it moves without crashing or collecting any magical fruit.</li>
		</ul>
		`,
		code: `type Board = string[];
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
// The train moves to the right and there is empty space on the right`,
		stars: 1,
	},
	{
		day: 10,
		difficulty: Difficulty.MEDIUM,
		statement: `
		<p>The elf programmers are creating a small magical assembler to control the machines in Santa Claus's workshop.</p>
		<p>To assist them, we will implement a simple interpreter that supports the following magical instructions:</p>
		<ul>
			<li>MOV x y: Copies the value x (which can be a number or the content of a register) into register y</li>
			<li>INC x: Increments the content of register x by 1</li>
			<li>DEC x: Decrements the content of register x by 1</li>
			<li>JMP x y: If the value in register x is 0, then jumps to the instruction at index y and continues executing the program from there.</li>
		</ul>
		<p>Expected behavior:</p>
		<ul>
			<li>If an attempt is made to access, increment, or decrement a register that has not been initialized, the default value 0 will be used.</li>
			<li>The jump with JMP is absolute and goes to the exact index indicated by y.</li>
			<li>Upon completion, the program should return the content of register A. If A did not have a defined value, it returns undefined.</li>
		</ul>
		`,
		code: `function compile(instructions: string[]): number | undefined {
	const registers: Record<string, number> = {};
	let pointer = 0;

	while (pointer < instructions.length) {
		const [command, arg1, arg2] = instructions[pointer].split(" ");

		switch (command) {
			case "MOV": {
				const value = isNaN(Number(arg1))
					? registers[arg1] || 0
					: parseInt(arg1, 10);
				registers[arg2] = value;
				break;
			}
			case "INC":
				registers[arg1] = (registers[arg1] || 0) + 1;
				break;
			case "DEC":
				registers[arg1] = (registers[arg1] || 0) - 1;
				break;
			case "JMP":
				if ((registers[arg1] || 0) === 0) {
					pointer = parseInt(arg2, 10);
					continue;
				}
				break;
			default:
				throw new Error(\`Unknown instruction: \${command}\`);
			}
			pointer++;
		}
		return registers["A"];
}

const instructions = [
	"MOV -1 C", // copies -1 to register 'C',
	"INC C", // increments the value of register 'C'
	"JMP C 1", // jumps to the instruction at index 1 if 'C' is 0
	"MOV C A", // copies register 'C' to register 'A',
	"INC A", // increments the value of register 'A'
];

console.log(compile(instructions)); // -> 2

/*
Step-by-step execution:
0: MOV -1 C -> The register C receives the value -1
1: INC C    -> The register C becomes 0
2: JMP C 1  -> C is 0, jumps to the instruction at index 1
1: INC C    -> The register C becomes 1
2: JMP C 1  -> C is 1, the instruction is ignored
3: MOV C A  -> Copies register C to A. Now A is 1
4: INC A    -> The register A becomes 2
*/`,
		stars: 3,
	},
	{
		day: 11,
		difficulty: Difficulty.EASY,
		statement: `
		<p>The Grinch has hacked 🏴‍☠️ Santa Claus's workshop systems and has encoded the names of all the important files. Now the elves can't find the original files and they need your help to decipher the names.</p>
		<ul>
			<li>Each file follows this format:</li>
			<li>It starts with a number (can contain any number of digits).</li>
			<li>Then has an underscore _.</li>
			<li>Continues with a file name and its extension.</li>
			<li>Ends with an extra extension at the end (which we don't need).</li>
		</ul>
		<p>Keep in mind that the file names may contain letters (a-z, A-Z), numbers (0-9), other underscores (_), and hyphens (-).</p>
		<p>Your task is to implement a function that receives a string with the name of an encoded file and returns only the important part: the file name and its extension.</p>
		`,
		code: `function decodeFilename(filename: string): string {
	const splitByDots = filename.split(".");
	splitByDots.pop();
	filename = splitByDots.join(".");
	const splitByUnderscore = filename.split("_");
	splitByUnderscore.shift();
	filename = splitByUnderscore.join("_");
	return filename;
}

console.log(decodeFilename("2023122512345678_sleighDesign.png.grinchwa"));
// ➞ "sleighDesign.png"

console.log(decodeFilename("42_chimney_dimensions.pdf.hack2023"));
// ➞ "chimney_dimensions.pdf"

console.log(decodeFilename("987654321_elf-roster.csv.tempfile"));
// ➞ "elf-roster.csv"`,
		stars: 5,
	},
	{
		day: 12,
		difficulty: Difficulty.EASY,
		statement: `
		<p>You are in a very special market where Christmas trees 🎄 are sold. Each one comes decorated with a series of very peculiar ornaments, and the price of the tree is determined by the ornaments it has.</p>
		<ul>
			<li>*: Snowflake - Value: 1</li>
			<li>o: Christmas Ball - Value: 5</li>
			<li>^: Decorative Tree - Value: 10</li>
			<li>#: Shiny Garland - Value: 50</li>
			<li>@: Polar Star - Value: 100</li>
		</ul>
		<p>Normally, you would sum up all the values of the ornaments and that's it…</p>
		<p>But, watch out! If an ornament is immediately to the left of another of greater value, instead of adding, its value is subtracted.</p>
		`,
		code: `function calculatePrice(ornaments: string): number | undefined {
	const values: Record<string, number> = {
		"*": 1, // Snowflake
		o: 5, // Christmas Ball
		"^": 10, // Decorative Tree
		"#": 50, // Shiny Garland
		"@": 100, // Polar Star
	};

	let total = 0;
	for (let i = 0; i < ornaments.length; i++) {
		const current = values[ornaments[i]];
		const next = values[ornaments[i + 1]];

		if (current === undefined) return undefined;
		if (next && next > current) {
			total -= current;
		} else {
			total += current;
		}
	}

	return total;
}

console.log(calculatePrice("***")); // 3   (1 + 1 + 1)
console.log(calculatePrice("*o")); // 4   (5 - 1)
console.log(calculatePrice("o*")); // 6   (5 + 1)
console.log(calculatePrice("*o*")); // 5  (-1 + 5 + 1)
console.log(calculatePrice("**o*")); // 6  (1 - 1 + 5 + 1)
console.log(calculatePrice("o***")); // 8   (5 + 3)
console.log(calculatePrice("*o@")); // 94  (-5 - 1 + 100)
console.log(calculatePrice("*#")); // 49  (-1 + 50)
console.log(calculatePrice("@@@")); // 300 (100 + 100 + 100)
console.log(calculatePrice("#@")); // 50  (-50 + 100)
console.log(calculatePrice("#@Z")); // undefined (Z is unknown)`,
		stars: 4,
	},
	{
		day: 13,
		difficulty: Difficulty.HARD,
		statement: `
		<p>The elves at the North Pole have created a special robot 🤖 that helps Santa Claus distribute gifts inside a large warehouse. The robot moves on a 2D plane and we start from the origin (0, 0).</p>
		<p>We want to know if, after executing a series of movements, the robot returns to exactly where it started.</p>
		<p>The robot's basic commands are:</p>
		<ul>
			<li>L: Move to the left</li>
			<li>R: Move to the right</li>
			<li>U: Move upwards</li>
			<li>D: Move downwards</li>
		</ul>
		<p>But it also has certain modifiers for the movements:</p>
		<ul>
			<li>*: The movement is done with double intensity (e.g., *R means RR)</li>
			<li>!: The next movement is inverted (e.g., R!L is considered as RR)</li>
			<li>? The next movement is done only if it hasn't been done before (e.g., R?R means R)</li>
		</ul>
		<p><b>Note:</b> When the movement is inverted with ! the inverted movement is counted and not the original one. For example, !U?U inverts the U movement, so it counts as having done the D movement but not the U. Thus, !U?U translates to D?U, and therefore, the final U movement is done.</p>

		<p>You must return:</p>
		<ul>
			<li>true: if the robot returns exactly to where it started</li>
			<li>[x, y]: if the robot does not return to where it started, return the position where it stopped</li>
		</ul>
		`,
		code: `function isRobotBack(moves: string): true | [number, number] {
	const robotCoordinates: [number, number] = [0, 0];
	const movementsMap: { [key: string]: [number, number] } = {
		L: [-1, 0],
		R: [1, 0],
		U: [0, 1],
		D: [0, -1],
	};
	let invertMovement = false;
	let doubleMovement = false;
	let checkMovementDone = false;
	const movementsDone = new Set<string>();

	for (let i = 0; i < moves.length; i++) {
		let move = moves[i];
		let transformation = 1;

		if (invertMovement) {
			invertMovement = false;
			move =
				move === "U" ? "D" : move === "D" ? "U" : move === "L" ? "R" : "L";
		}

		if (doubleMovement) {
			transformation *= 2;
			doubleMovement = false;
		}

		if (checkMovementDone) {
			if (movementsDone.has(move)) {
				checkMovementDone = false;
				continue;
			}
			movementsDone.add(move);
			checkMovementDone = false;
		}

		if (move in movementsMap) {
			const [dx, dy] = movementsMap[move];
			robotCoordinates[0] += dx * transformation;
			robotCoordinates[1] += dy * transformation;
			movementsDone.add(move);
		} else if (move === "*") {
			doubleMovement = true;
		} else if (move === "!") {
			invertMovement = true;
		} else if (move === "?") {
			checkMovementDone = true;
		}
	}

	return robotCoordinates[0] === 0 && robotCoordinates[1] === 0
		? true
		: [robotCoordinates[0], robotCoordinates[1]];
}

isRobotBack("R"); // [1, 0]
isRobotBack("RL"); // true
isRobotBack("RLUD"); // true
isRobotBack("*RU"); // [2, 1]
isRobotBack("R*U"); // [1, 2]
isRobotBack("LLL!R"); // [-4, 0]
isRobotBack("R?R"); // [1, 0]
isRobotBack("U?D"); // true
isRobotBack("R!L"); // [2,0]
isRobotBack("U!D"); // [0,2]
isRobotBack("R?L"); // true
isRobotBack("U?U"); // [0,1]
isRobotBack("*U?U"); // [0,2]
isRobotBack("U?D?U"); // true

// Step-by-step examples:
isRobotBack("R!U?U"); // [1,0]
// 'R'  -> moves to the right
// '!U' -> inverts and becomes 'D'
// '?U' -> moves upwards, because the 'U' movement hasn't been done yet

isRobotBack("UU!U?D"); // [0,1]
// 'U'  -> moves upwards
// 'U'  -> moves upwards
// '!U' -> inverts and becomes 'D'
// '?D' -> does not move, since the 'D' movement has already been done`,
		stars: 4,
	},
	{
		day: 14,
		difficulty: Difficulty.EASY,
		statement: `
		<p>Reindeer need to move to occupy the stables, but there cannot be more than one reindeer per stable. Additionally, to keep the reindeer comfortable, we must minimize the total distance they travel to get settled.</p>
		<p>We have two parameters:</p>
		<ul>
			<li> reindeer: An array of integers representing the positions of the reindeer.</li>
			<li> stables: An array of integers representing the positions of the stables.</li>
		</ul>
		<p>Each reindeer must be moved from its current position to a stable. However, it is important to note that there can only be one reindeer per stable.</p>
		<p>Your task is to calculate the minimum number of moves needed for all the reindeer to end up in a stable.</p>
		<p><b>Note:</b> Keep in mind that the stables array will always be the same size as the reindeer array and that the stables will always be unique.</p>
		`,
		code: `function minMovesToStables(reindeer: number[], stables: number[]): number {
	reindeer.sort((a, b) => a - b);
	stables.sort((a, b) => a - b);

	let totalMoves = 0;
	for (let i = 0; i < reindeer.length; i++) {
		totalMoves += Math.abs(reindeer[i] - stables[i]);
	}

	return totalMoves;
}

minMovesToStables([2, 6, 9], [3, 8, 5]); // -> 3
// Explanation:
// Reindeer at positions: 2, 6, 9
// Stables at positions: 3, 8, 5
// 1st reindeer: moves from position 2 to the stable at position 3 (1 move).
// 2nd reindeer: moves from position 6 to the stable at position 5 (1 move)
// 3rd reindeer: moves from position 9 to the stable at position 8 (1 move).
// Total moves: 1 + 1 + 1 = 3 moves

minMovesToStables([1, 1, 3], [1, 8, 4]);
// Explanation:
// Reindeer at positions: 1, 1, 3
// Stables at positions: 1, 8, 4
// 1st reindeer: does not move (0 moves)
// 2nd reindeer: moves from position 1 to the stable at position 4 (3 moves)
// 3rd reindeer: moves from position 3 to the stable at position 8 (5 moves)
// Total moves: 0 + 3 + 5 = 8 moves`,
		stars: 5,
	},
	{
		day: 15,
		difficulty: Difficulty.EASY,
		statement: `
		<p>ChatGPT has arrived at the North Pole and the elf Sam Elfman is working on an application for managing gifts and children.</p>
		<p>To enhance the presentation, he wants to create a function drawTable that receives an array of objects and converts it into a text table.</p>
		<p>The drawn table should represent the object data as follows:</p>
		<ul>
			<li>It has a header with the column name.</li>
			<li>The column name has the first letter capitalized.</li>
			<li>Each row should contain the values of the objects in the corresponding order.</li>
			<li>Each value must be left-aligned.</li>
			<li>Fields always leave a space on the left.</li>
			<li>Fields leave the necessary space on the right to align the box.</li>
		</ul>
		`,
		code: `function drawTable(data: Array<Record<string, string | number>>): string {
	if (data.length === 0) return "";

	const headers = Object.keys(data[0]);
	const columnWidths = headers.map((header) => {
		return Math.max(
			header.length,
			...data.map((row) => row[header].toString().length)
		);
	});

	const createRow = (row: Array<string | number>) => {
		return (
			"| " +
			row
				.map((cell, i) => cell.toString().padEnd(columnWidths[i]))
				.join(" | ") +
			" |"
		);
	};

	const headerRow = createRow(
		headers.map((header) => header.charAt(0).toUpperCase() + header.slice(1))
	);
	const separatorRow =
		"+-" + columnWidths.map((width) => "-".repeat(width)).join("-+-") + "-+";
	const dataRows = data.map((row) =>
		createRow(headers.map((header) => row[header]))
	);

	return [
		separatorRow,
		headerRow,
		separatorRow,
		...dataRows,
		separatorRow,
	].join("\\n");
}

drawTable([
	{ name: "Alice", city: "London" },
	{ name: "Bob", city: "Paris" },
	{ name: "Charlie", city: "New York" },
]);
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

drawTable([
	{ gift: "Doll", quantity: 10 },
	{ gift: "Book", quantity: 5 },
	{ gift: "Music CD", quantity: 1 },
]);
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+`,
		stars: 3,
	},
	{
		day: 16,
		difficulty: Difficulty.EASY,
		statement: `
		<p>The elves are working hard to clear paths filled with magical snow ❄️. This snow has a special property: if two identical and adjacent snow piles are found, they disappear automatically.</p>
		<p>Your task is to write a function to help the elves simulate this process. The path is represented by a string and each snow pile by a character.</p>
		<p>You need to remove all adjacent snow piles that are the same until no more moves are possible.</p>
		<p>The result should be the final path after removing all duplicate piles.</p>
		`,
		code: `/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s: string): string {
	const stack: string[] = [];

	for (const char of s) {
		if (stack.length && stack[stack.length - 1] === char) {
			stack.pop();
		} else {
			stack.push(char);
		}
	}

	return stack.join("");
}

removeSnow("zxxzoz"); // -> "oz"
// 1. Remove "xx", resulting in "zzoz"
// 2. Remove "zz", resulting in "oz"

removeSnow("abcdd"); // -> "abc"
// 1. Remove "dd", resulting in "abc"

removeSnow("zzz"); // -> "z"
// 1. Remove "zz", resulting in "z"

removeSnow("a"); // -> "a"
// No duplicate piles`,
		stars: 5,
	},
	{
		day: 17,
		difficulty: Difficulty.MEDIUM,
		statement: `
		<p>The Grinch has been up to his tricks in the North Pole and has planted explosive coal bombs 💣 in the elves' toy factory. He wants all the toys to be rendered useless, and that's why he has left a grid where some cells have explosive coal (true) and others are empty (false).</p>
		<p>The elves need your help to map the dangerous areas. Each empty cell should display a number indicating how many explosive coal bombs there are in the adjacent positions, including diagonals.</p>
		`,
		code: `function detectBombs(grid: boolean[][]): number[][] {
	const nRows = grid.length;
	const nCols = grid[0].length;
	const result: number[][] = [];

	for (let r = 0; r < nRows; r++) {
		const row = [];
		for (let c = 0; c < nCols; c++) {
			let counter = 0;

			const directions = [
				[-1, -1],
				[-1, 0],
				[-1, 1],
				[0, -1],
				[0, 1],
				[1, -1],
				[1, 0],
				[1, 1],
			];

			for (const [dr, dc] of directions) {
				const newRow = r + dr;
				const newCol = c + dc;

				if (
					newRow >= 0 &&
					newRow < nRows &&
					newCol >= 0 &&
					newCol < nCols
				) {
					if (grid[newRow][newCol]) counter++;
				}
			}

			row.push(counter);
		}
		result.push(row);
	}
	return result;
}

detectBombs([
	[true, false, false],
	[false, true, false],
	[false, false, false],
]);
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

detectBombs([
	[true, false],
	[false, false],
]);
// [
//   [0, 1],
//   [1, 1]
// ]

detectBombs([
	[true, true],
	[false, false],
	[true, true],
]);

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]`,
		stars: 5,
	},
	{
		day: 18,
		difficulty: Difficulty.HARD,
		statement: `
		<p>Santa Claus has a magic diary 📇 where he keeps the addresses of the children to deliver the presents. The problem: the diary's information is mixed and misformatted. The lines contain a magic phone number, a child's name, and their address, but everything is surrounded by strange characters.</p>
		<p>Santa needs your help to find specific information from the diary. Write a function that, given the diary's content and a phone number, returns the child's name and address.</p>
		<p>Keep in mind that in the diary:</p>
		<ul>
			<li>Phone numbers are formatted as +X-YYY-YYY-YYY (where X is one or two digits, and Y is a digit).</li>
			<li>Each child's name is always between < and >.</li>
			</ul>
		<p>The idea is for you to write a function that, given the full phone number or part of it, returns the child's name and address. If it doesn't find anything or there is more than one result, you must return null.</p>
		`,
		code: `function findInAgenda(
	agenda: string,
	phone: string
): { name: string; address: string } | null {
	const lines = agenda.split("\\n");
	const phoneRegex = /\\+\\d{1,2}-\\d{3}-\\d{3}-\\d{3,4}/;
	const nameRegex = /<([^>]+)>/;

	const matches: { name: string; address: string }[] = [];

	for (const line of lines) {
		const phoneMatch = line.match(phoneRegex);
		if (!phoneMatch) continue;
		const fullPhone = phoneMatch[0];
		if (!fullPhone.includes(phone)) continue;

		const nameMatch = line.match(nameRegex);
		if (!nameMatch) continue;
		const name = nameMatch[1];

		const address = line
			.replace(fullPhone, "")
			.replace(nameMatch[0], "")
			.trim();

		matches.push({ name, address });
	}

	if (matches.length === 0 || matches.length > 1) return null;

	return matches[0];
}

const agenda = \`+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York\`;

findInAgenda(agenda, "34-600-123-456");
// { name: "Juan Perez", address: "Calle Gran Via 12" }

findInAgenda(agenda, "600-987");
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

findInAgenda(agenda, "111");
// null
// Explanation: No results

findInAgenda(agenda, "1");
// null
// Explanation: Too many results`,
		stars: 4,
	},
	{
		day: 19,
		difficulty: Difficulty.HARD,
		statement: `
		<p>The day to give out gifts is approaching! We need to stack the gifts we will transport on the sleigh 🛷, and for that, we are going to put them in boxes 📦.</p>
		<p>The gifts can be placed in 4 different boxes, where each box can hold weights of 1, 2, 5, and 10, represented as follows:</p>
		<div>
		<p>JavaScript representation:</p>
		<ul>
			<li>
			<p>1:</p>
			<pre>
		  _
         |_|
			</pre>
			</li>
			<li>
			<p>2:</p>
			<pre>
			_____
		   |_____|
			</pre>
			</li>
			<li>
			<p>5:</p>
			<pre>
			  _____
			 |     |
			 |_____|
			</pre>
			</li>
			<li>
			<p>10:</p>
			<pre>
			  _________
			 |         |
			 |_________|
			</pre>
			</li>
		</ul>
		<div>
			<pre>
// JavaScript representation:
const boxRepresentations = {
	1: [" _ ", "|_|"] ,
	2: [" ___ ", "|___|"],
	5: [" _____ ", "|     |", "|_____|"],	
	10: [" _________ ", "|         |", "|_________|"]
}
			</pre>
		</div>
		<p>Your mission is, upon receiving the weight of the gifts, to use the fewest boxes possible and also stack them from less weight (top) to more weight (bottom). Always aligned to the left.</p>
		<p>Additionally, keep in mind that when stacking them, the lower edge of the box is reused.</p>
		<br />
		<p><b>Note:</b> Be careful with the white spaces! Do not add whitespace to the right of a box unless necessary.</p>
		`,
		code: `function distributeWeight(weight: number): string {
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
			console.log(previousBoxTop, "\\n", currentBoxBottom);
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

	return boxes.reverse().flat().join("\\n");
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
// |_____|`,
		stars: 2,
	},
	{
		day: 20,
		difficulty: Difficulty.EASY,
		statement: `
		<p>Santa Claus 🎅 is checking the list of gifts he must deliver this Christmas. However, some gifts are missing, others are duplicated, and some have incorrect quantities. He needs your help to solve the problem.</p>
		<p>You will receive two arrays:</p>
		<ul>
			<li>received: List with the gifts Santa currently has.</li>
			<li>expected: List with the gifts Santa should have.</li>
		</ul>
		<p>Your task is to write a function that, given received and expected, returns an object with two properties:</p>
		<ul>
			<li>missing: An object where the keys are the names of the missing gifts and the values are the quantities that are missing.</li>
			<li>extra: An object where the keys are the names of the extra or duplicated gifts and the values are the quantities that are extra.</li>
		</ul>
		<p>Keep in mind that:</p>
		<ul>
			<li>Gifts may be repeated in both lists.</li>
			<li>The gift lists are unordered.</li>
			<li>If there are no missing or extra gifts, the corresponding properties (missing or extra) should be empty objects.</li>
		</ul>
		`,
		code: `function fixGiftList(
	received: string[],
	expected: string[]
): { missing: Record<string, number>; extra: Record<string, number> } {
	const countReceived: Record<string, number> = received.reduce(
		(acc: Record<string, number>, gift: string) => {
			acc[gift] = (acc[gift] || 0) + 1;
			return acc;
		},
		{}
	);
	const countExpected: Record<string, number> = expected.reduce(
		(acc: Record<string, number>, gift: string) => {
			acc[gift] = (acc[gift] || 0) + 1;
			return acc;
		},
		{}
	);

	const missing: Record<string, number> = {};
	for (const i in countExpected) {
		const diff = countExpected[i] - (countReceived[i] || 0);
		if (diff > 0) {
			missing[i] = diff;
		}
	}

	const extra: Record<string, number> = {};
	for (const i in countReceived) {
		const diff = countReceived[i] - (countExpected[i] || 0);
		if (diff > 0) {
			extra[i] = diff;
		}
	}

	return {
		missing,
		extra,
	};
}

fixGiftList(
	["puzzle", "car", "doll", "car"],
	["car", "puzzle", "doll", "ball"]
);
// Returns:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

fixGiftList(
	["book", "train", "kite", "train"],
	["train", "book", "kite", "ball", "kite"]
);
// Returns:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

fixGiftList(
	["bear", "bear", "car"],
	["bear", "car", "puzzle", "bear", "car", "car"]
);
// Returns:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

fixGiftList(["bear", "bear", "car"], ["car", "bear", "bear"]);
// Returns:
// {
//   missing: {},
//   extra: {}
// }`,
		stars: 5,
	},
	{
		day: 21,
		difficulty: Difficulty.EASY,
		statement: `
		<p>Santa Claus 🎅 is decorating a magical Christmas tree 🪄, which this year has a special structure in the form of a binary tree. Each node of the tree represents a gift, and Santa wants to know the height of the tree to place the magical star at the top.</p>
		<p>Your task is to write a function that calculates the height of a binary tree. The height of a binary tree is defined as the maximum number of levels from the root to a leaf. An empty tree has a height of 0.</p>
		`,
		code: `function treeHeight(
	tree: { value: string; left: any; right: any } | null
): number {
	if (tree === null) return 0;

	const leftHeight = treeHeight(tree.left);
	const rightHeight = treeHeight(tree.right);

	return 1 + Math.max(leftHeight, rightHeight);
}

// Tree definition
const christmasTree = {
	value: "🎁",
	left: {
		value: "🎄",
		left: {
			value: "⭐",
			left: null,
			right: null,
		},
		right: {
			value: "🎅",
			left: null,
			right: null,
		},
	},
	right: {
		value: "❄️",
		left: null,
		right: {
			value: "🦌",
			left: null,
			right: null,
		},
	},
};

// Graphical representation of the tree:
//        🎁
//       /   \\
//     🎄     ❄️
//    /  \\      \\
//  ⭐   🎅      🦌

// Function call
treeHeight(christmasTree);
// Returns: 3`,
		stars: 5,
	},
	{
		day: 22,
		difficulty: Difficulty.MEDIUM,
		statement: `
		<p>Santa Claus 🎅 is checking a list of unique toys that he might include in his magic gift bag. He wants to explore all possible combinations of toys. He wants to see all combinations that actually contain at least one toy.</p>
		<p>Your task is to write a function that, given an array of toys, returns all possible combinations.</p>
		<p><b>Important:</b> You must return it in the order the toys appear and in combinations from 1 to n toys.</p>
		`,
		code: `function generateGiftSets(gifts: string[]): string[][] {
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
// ]`,
		stars: 2,
	},
	{
		day: 23,
		difficulty: Difficulty.EASY,
		statement: `
		<p>The elves are working on a system to verify children's gift lists 👧👦. However, some lists are incomplete and numbers are missing!</p>

		<p>Your task is to write a function that, given an array of numbers, finds all the numbers that are missing between 1 and n (where n is the size of the array or the highest number in the array).</p>

		<p>Keep in mind that:</p>
		<ul>
			<li>Numbers may appear more than once and others may be missing</li>
			<li>The array always contains positive integers</li>
		</ul>

		<p>Counting always starts from 1</p>
		`,
		code: `function findMissingNumbers(nums: number[]): number[] {
	const missingNumbers: number[] = [];
	const max = Math.max(...nums);

	for (let i = 1; i <= max; i++) {
		if (!nums.includes(i)) missingNumbers.push(i);
	}

	return missingNumbers;
}

findMissingNumbers([1, 2, 4, 6]);
// [3, 5]

findMissingNumbers([4, 8, 7, 2]);
// [1, 3, 5, 6]

findMissingNumbers([3, 2, 1, 1]);
// []

// findDisappearedNumbers([5, 5, 5, 3, 3, 2, 1]); //? I think this is not the correct function call
findMissingNumbers([5, 5, 5, 3, 3, 2, 1]);
// [4]`,
		stars: 4,
	},
	{
		day: 24,
		difficulty: Difficulty.MEDIUM,
		statement: `
		<p>At the North Pole, the elves have two magical binary trees that generate energy 🌲🌲 to keep the Christmas star ⭐️ shining. However, for them to work properly, the trees must be in perfect sync like mirrors 🪞</p>.

		<p>Two binary trees are mirrors if:</p>
		<ul>
			<li>The roots of both trees have the same value.</li>
			<li>Each node of the first tree must have its corresponding node in the opposite position in the second tree.</li>
		</ul>

		<p>And the tree is represented with three properties value, left, and right. The latter two display the remaining branches (if any):</p>
		<div>
			<pre>
const tree = {
	value: '⭐️',
	left: {
		value: '🎅'
		// left: {...}
	// right: { ... }
	},
	right: {
		value: '🎁'
		// left: { ... }
		// right: { ...&nbsp;}
	}
}
			</pre>
		</div>

		<p>Santa needs your help to verify if the trees are synchronized so that the star can keep shining. You must return an array where the first position indicates if the trees are synchronized and the second position returns the value of the root of the first tree.</p>
		`,
		code: `function isTreesSynchronized(
	tree1: { value: string; left?: any; right?: any } | undefined,
	tree2: { value: string; left?: any; right?: any } | undefined
): [boolean, string] {
	if (tree1 === null && tree2 === null) return [true, ""];

	if (!tree1 || !tree2) return [false, tree1?.value || ""];

	if (tree1.value !== tree2.value) return [false, tree1.value];

	const leftMirror = isTreesSynchronized(
		tree1.left || null,
		tree2.right || null
	);
	const rightMirror = isTreesSynchronized(
		tree1.right || null,
		tree2.left || null
	);

	const isSync = leftMirror[0] && rightMirror[0];
	return [isSync, tree1.value];
}

const syncTree1 = {
	value: "🎄",
	left: { value: "⭐" },
	right: { value: "🎅" },
};

const syncTree2 = {
	value: "🎄",
	left: { value: "🎅" },
	right: { value: "⭐" },
};

isTreesSynchronized(syncTree1, syncTree2); // [true, '🎄']

/*
	tree1          tree2
	🎄              🎄
	/ \\             / \\ 
⭐   🎅         🎅   ⭐
*/

const syncTree3 = {
	value: "🎄",
	left: { value: "🎅" },
	right: { value: "🎁" },
};

isTreesSynchronized(syncTree1, syncTree3); // [false, '🎄']

const syncTree4 = {
	value: "🎄",
	left: { value: "⭐" },
	right: { value: "🎅" },
};

isTreesSynchronized(syncTree1, syncTree4); // [false, '🎄']

isTreesSynchronized({ value: "🎅" }, { value: "🧑‍🎄" }); // [false, '🎅']`,
		stars: 3,
	},
	{
		day: 25,
		difficulty: Difficulty.MEDIUM,
		statement: `
		<p>We have already distributed all the gifts! Back at the workshop, preparations for next year are already beginning.</p>
		<p>A genius elf is creating a magical programming language 🪄 that will help streamline the delivery of gifts to children in 2025.</p>
		<p>Programs always start with the value 0, and the language is a string where each character represents an instruction:</p>
		<ul>
			<li> ">" Moves to the next instruction</li>
			<li> "+" Increments the current value by 1</li>
			<li> "-" Decrements the current value by 1</li>
			<li> "[" and "]": Loop. If the current value is 0, jump to the instruction after ]. If it is not 0, go back to the instruction after [</li>
			<li> "{" and "}": Conditional. If the current value is 0, jump to the instruction after }. If it is not 0, continue to the instruction after {</li>
		</ul>
		<p>You need to return the value of the program after executing all the instructions.</p>
		<br/>
		<p>Note: A conditional can have a loop inside, and a loop can also have a conditional inside. But two loops or two conditionals are never nested.</p>`,
		code: `function execute(code: string): number {
	let value = 0; // Start with 0
	const stack: number[] = []; // Stack for loops ("[", "]") and conditionals ("{", "}")

	for (let c = 0; c < code.length; c++) {
		const instruction = code[c];

		switch (instruction) {
			case "+":
				value++; // Increment value
				break;
			case "-":
				value--; // Decrement value
				break;
			case "[":
				if (value === 0) {
					// Skip to the instruction after the matching ']'
					let depth = 1;
					while (depth > 0) {
						c++;
						if (code[c] === "[") depth++;
						else if (code[c] === "]") depth--;
					}
				} else {
					stack.push(c); // Push the current index to the stack
				}
				break;
			case "]":
				if (value !== 0) {
					c = stack[stack.length - 1]; // Jump back to the matching '['
				} else {
					stack.pop(); // Exit the loop
				}
				break;
			case "{":
				if (value === 0) {
					// Skip to the instruction after the matching '}'
					let depth = 1;
					while (depth > 0) {
						c++;
						if (code[c] === "{") depth++;
						else if (code[c] === "}") depth--;
					}
				}
				break;
			case "}":
				// No-op for conditionals if \`value !== 0\`
				break;
			}
		}

		return value; // Return the final value
}

execute("+++"); // 3
execute("+--"); // -1
execute(">+++[-]"); // 0
execute(">>>+{++}"); // 3
execute("+{[-]+}+"); // 2
execute("{+}{+}{+}"); // 0
execute("------[+]++"); // 2
execute("-[++{-}]+{++++}"); // 5`,
		stars: 1,
		additionalComment:
			"<a href='https://en.wikipedia.org/wiki/Brainfuck' target='_blank'>https://en.wikipedia.org/wiki/Brainfuck</a>",
	},
	{
		day: 26,
		difficulty: Difficulty.EASY,
		statement: `
		<p>Santa Claus has already delivered all the presents! Now he's reviewing the productivity reports of the elves. But there's a problem: the Product Owner, Mrs. Claus 🧑‍🎄✨, needs to quickly understand if the elves met the estimated times. They are doing Agile Scream.</p>
		<p>To help Mrs. Claus, your task is to calculate the completed percentage of each task and return it rounded to the nearest whole number. This will allow her to better plan for the next Christmas and keep everyone happy.</p>
		`,
		code: `function getCompleted(timeWorked: string, totalTime: string): string {
const toSeconds = (time: string): number => {
	const [hours, minutes, seconds] = time
		.split(":")
		.map((item: string) => parseInt(item, 10));
	return hours * 3600 + minutes * 60 + seconds;
};

const workedSeconds = toSeconds(timeWorked);
const totalSeconds = toSeconds(totalTime);

const percentage = Math.round((workedSeconds / totalSeconds) * 100);

return \`\${percentage}%\`;
}

// Examples:
getCompleted("01:00:00", "03:00:00"); // 33%
getCompleted("02:00:00", "04:00:00"); // 50%
getCompleted("01:00:00", "01:00:00"); // 100%
getCompleted("00:10:00", "01:00:00"); // 17%
getCompleted("01:10:10", "03:30:30"); // 33%
getCompleted("03:30:30", "05:50:50"); // 60%`,
		stars: 3,
		additionalComment:
			"🎁 Now Santa Claus and the elves deserve a break. We hope they enjoyed AdventJS and will recommend it to their friends!",
	},
];

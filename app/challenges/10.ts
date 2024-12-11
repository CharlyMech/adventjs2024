/*
The elf programmers are creating a small magical assembler to control the machines in Santa Claus's workshop.

To assist them, we will implement a simple interpreter that supports the following magical instructions:

- MOV x y: Copies the value x (which can be a number or the content of a register) into register y
- INC x: Increments the content of register x by 1
- DEC x: Decrements the content of register x by 1
- JMP x y: If the value in register x is 0, then jumps to the instruction at index y and continues executing the program from there.

Expected behavior:

- If an attempt is made to access, increment, or decrement a register that has not been initialized, the default value 0 will be used.
- The jump with JMP is absolute and goes to the exact index indicated by y.
- Upon completion, the program should return the content of register A. If A did not have a defined value, it returns undefined.
*/

function compile(instructions: string[]): number | undefined {
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
				throw new Error(`Unknown instruction: ${command}`);
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
  */

// 2 ⭐ //

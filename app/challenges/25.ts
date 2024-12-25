/*
We have already distributed all the gifts! Back at the workshop, preparations for next year are already beginning.

A genius elf is creating a magical programming language 🪄 that will help streamline the delivery of gifts to children in 2025.

Programs always start with the value 0, and the language is a string where each character represents an instruction:
- > Moves to the next instruction
- + Increments the current value by 1
- - Decrements the current value by 1
- [ and ]: Loop. If the current value is 0, jump to the instruction after ]. If it is not 0, go back to the instruction after [
- { and }: Conditional. If the current value is 0, jump to the instruction after }. If it is not 0, continue to the instruction after {

You need to return the value of the program after executing all the instructions.
*/

// Note: A conditional can have a loop inside, and a loop can also have a conditional inside. But two loops or two conditionals are never nested.

function execute(code: string): number {
	let value = 0; // Start with 0
	const stack: number[] = []; // Stack for loops (`[`, `]`) and conditionals (`{`, `}`)

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
				// No-op for conditionals if `value !== 0`
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
execute("-[++{-}]+{++++}"); // 5

// https://en.wikipedia.org/wiki/Brainfuck
// 1 ⭐ //

/*
You are in a very special market where Christmas trees 🎄 are sold. Each one comes decorated with a series of very peculiar ornaments, and the price of the tree is determined by the ornaments it has.

- *: Snowflake - Value: 1
- o: Christmas Ball - Value: 5
- ^: Decorative Tree - Value: 10
- #: Shiny Garland - Value: 50
- @: Polar Star - Value: 100

Normally, you would sum up all the values of the ornaments and that's it…

But, watch out! If an ornament is immediately to the left of another of greater value, instead of adding, its value is subtracted.
*/

function calculatePrice(ornaments: string): number | undefined {
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
console.log(calculatePrice("#@Z")); // undefined (Z is unknown)

// 4 ⭐ //

// OLD SOLUTION //
// function calculatePrice(ornaments: string): number | undefined {
// 	const ornamentsList: string[] = ornaments.split("");
// 	if (ornamentsList.length == 0) return 0;

// 	const values: Record<string, number> = {
// 		"*": 1, // Snowflake
// 		o: 5, // Christmas Ball
// 		"^": 10, // Decorative Tree
// 		"#": 50, // Shiny Garland
// 		"@": 100, // Polar Star
// 	};

// 	if (ornamentsList.some((ornament) => !(ornament in values))) {
// 		return undefined;
// 	}

// 	const operationList = ornamentsList.map((val: string, index: number) => {
// 		const nextVal: string | undefined =
// 			index < ornamentsList.length - 1
// 				? ornamentsList[index + 1]
// 				: undefined;
// 		const currentValue: number = values[val];

// 		if (nextVal && values[nextVal] > currentValue) {
// 			return -currentValue;
// 		}
// 		return currentValue;
// 	});

// 	return operationList.reduce((sum, value) => sum + value, 0);
// }
// 1 ⭐ //

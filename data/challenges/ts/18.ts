/*
Santa Claus has a magic diary 📇 where he keeps the addresses of the children to deliver the presents. The problem: the diary's information is mixed and misformatted. The lines contain a magic phone number, a child's name, and their address, but everything is surrounded by strange characters.

Santa needs your help to find specific information from the diary. Write a function that, given the diary's content and a phone number, returns the child's name and address.

Keep in mind that in the diary:

Phone numbers are formatted as +X-YYY-YYY-YYY (where X is one or two digits, and Y is a digit).
Each child's name is always between < and >
The idea is for you to write a function that, given the full phone number or part of it, returns the child's name and address. If it doesn't find anything or there is more than one result, you must return null.
*/

function findInAgenda(
	agenda: string,
	phone: string
): { name: string; address: string } | null {
	const lines = agenda.split("\n");
	const phoneRegex = /\+\d{1,2}-\d{3}-\d{3}-\d{3,4}/;
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

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;

findInAgenda(agenda, "34-600-123-456");
// { name: "Juan Perez", address: "Calle Gran Via 12" }

findInAgenda(agenda, "600-987");
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

findInAgenda(agenda, "111");
// null
// Explanation: No results

findInAgenda(agenda, "1");
// null
// Explanation: Too many results

// 4 ⭐ //

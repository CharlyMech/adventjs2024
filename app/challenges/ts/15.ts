/*
ChatGPT has arrived at the North Pole and the elf Sam Elfman is working on an application for managing gifts and children.

To enhance the presentation, he wants to create a function drawTable that receives an array of objects and converts it into a text table.

The drawn table should represent the object data as follows:
- It has a header with the column name.
- The column name has the first letter capitalized.
- Each row should contain the values of the objects in the corresponding order.
- Each value must be left-aligned.
- Fields always leave a space on the left.
- Fields leave the necessary space on the right to align the box.
*/

function drawTable(data: Array<Record<string, string | number>>): string {
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
	].join("\n");
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
// +----------+----------+

// 3 ⭐ //

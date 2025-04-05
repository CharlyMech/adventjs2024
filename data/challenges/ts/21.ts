/* eslint-disable @typescript-eslint/no-explicit-any */
/*
Santa Claus 🎅 is decorating a magical Christmas tree 🪄, which this year has a special structure in the form of a binary tree. Each node of the tree represents a gift, and Santa wants to know the height of the tree to place the magical star at the top.

Your task is to write a function that calculates the height of a binary tree. The height of a binary tree is defined as the maximum number of levels from the root to a leaf. An empty tree has a height of 0.
*/

function treeHeight(
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
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Function call
treeHeight(christmasTree);
// Returns: 3

// 5 ⭐ //

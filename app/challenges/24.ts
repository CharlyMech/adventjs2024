/* eslint-disable @typescript-eslint/no-explicit-any */
/*
At the North Pole, the elves have two magical binary trees that generate energy 🌲🌲 to keep the Christmas star ⭐️ shining. However, for them to work properly, the trees must be in perfect sync like mirrors 🪞.

Two binary trees are mirrors if:
- The roots of both trees have the same value.
- Each node of the first tree must have its corresponding node in the opposite position in the second tree.

And the tree is represented with three properties value, left, and right. The latter two display the remaining branches (if any):
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

Santa needs your help to verify if the trees are synchronized so that the star can keep shining. You must return an array where the first position indicates if the trees are synchronized and the second position returns the value of the root of the first tree.
*/

function isTreesSynchronized(
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
	/ \             / \
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

isTreesSynchronized({ value: "🎅" }, { value: "🧑‍🎄" }); // [false, '🎅']

// 3 ⭐ //

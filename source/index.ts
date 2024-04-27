interface TreeNode {
	left: TreeNode | null;
	right: TreeNode | null;
	value: number;
}

interface Tuple {
	height: number;
	balanced: boolean;
}

export class treeNode implements TreeNode {
	left: TreeNode | null;
	right: TreeNode | null;
	value: number;
	constructor(
		left: TreeNode | null = null,
		right: TreeNode | null = null,
		value: number = 0
	) {
		this.left = left;
		this.right = right;
		this.value = value;
	}
}

export class tuple implements Tuple {
	height: number;
	balanced: boolean;
	constructor(height: number, balanced: boolean) {
		this.height = height;
		this.balanced = balanced;
	}
}

export function isBalanced(root: TreeNode | null) {
	/*  */
	if (root !== null) {
		console.log(root.value);
	}
	function treeExplorer(r: TreeNode | undefined | null): Tuple {
		/* if r undefined return [-1, true] */
		if (r === null || r===undefined) {
			return {height:-1, balanced:true};
		} else{
			/* else weight  explore left and right node */
         let left : Tuple;
         let right: Tuple;
			left= treeExplorer(r.left);
			right= treeExplorer(r.right);
         if(left.balanced==false || right.balanced==false){
            return {height:0, balanced:false};
         }
         console.log(left,right);

				let h: number = Math.max(left.height, right.height) + 1;
				let balance: boolean =
					Math.abs(right.height - left.height) <= 1;
				return {height:h,balanced: balance};
		}
	}

	let res = treeExplorer(root);
	return res;
}

const one = new treeNode(null, null, 0);
one.left = new treeNode(null, null, 1);
one.right = new treeNode(null, null, 2);
one.left.left = new treeNode(null, null, 4);
one.left.right = new treeNode(null, null, 5);

console.log(isBalanced(one));
let x = new tuple(-1,true);
console.log(x)
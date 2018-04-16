const reverse = (arr) => {
	let reversed = [];
	for( let i = arr.length-1; i >= 0; i--) {
		reversed.push(arr[i]);
	} 
	return reversed;
}
const input = [0,1,2,3,4,5,6,7,8,9];

console.log(`Input: ${input} \n Output: ${reverse([0,1,2,3,4,5,6,7,8,9])}`);

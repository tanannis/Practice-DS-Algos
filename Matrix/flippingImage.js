/* Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.

For example, flipping [1,1,0] horizontally results in [0,1,1].
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

For example, inverting [0,1,1] results in [1,0,0].
 
Input: image = [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
*/

/* Logic:
  iterate image for each row and column, reverse each row by looping backward
      if column is 1, replace it to 0
      if column is 0, replace it to 1
      push column to new image
  return new image
*/

// short hand, runtime is faster than below original approach
const flipAndInvertImage2 = (image) => {
	const result = image.map((row) => row
    .reverse()
    .map((column) => (column === 0 ? 1 : 0))
	);

	return result;
};


// original approach, but pretty slow for some reason compared to the short hand
const flipAndInvertImage = (image) => {
	const result = [];

	image.forEach((row, i) => {
		result.push([]);
		for (let c = row.length - 1; c >= 0; c--) {
			if (row[c] === 0) {
				row[c] = 1;
			} else {
				row[c] = 0;
			}
			result[i].push(row[c]);
		}
	});

	return result;
};








// Driver code
let mat = [
	[1,2,3],
	[4,5,6],
	[7,8,9]]
let m=mat.length;
let n=mat[0].length;
let maxLengthOfPath = m + n - 1;
function printMatrix(mat,m,n,i,j,path,idx)
{
	path[idx] = mat[i][j];
		
		// Reached the bottom of the matrix so we are left with
		// only option to move right
		if (i == m - 1)
		{
			for (let k = j + 1; k < n; k++)
			{
				path[idx + k - j] = mat[i][k];
			}
			for (let l = 0; l < idx + n - j; l++)
			{
				process.stdout.write(path[l] + " ");
			}
			console.log(" ");
			return;
		}
		
		// Reached the right corner of the matrix we are left with
		// only the downward movement.
		if (j == n - 1)
		{
			for (let k = i + 1; k < m; k++)
			{
				path[idx + k - i] = mat[k][j];
			}
			for (let l = 0; l < idx + m - i; l++)
			{
				process.stdout.write(path[l] + " ");
			}
			console.log();
			return;
		}
		// Print all the paths that are possible after moving down
		printMatrix(mat, m, n, i + 1, j, path, idx + 1);

		// Print all the paths that are possible after moving right
		printMatrix(mat, m, n, i, j + 1, path, idx + 1);
}
printMatrix(mat, m, n, 0, 0, new Array(maxLengthOfPath), 0);

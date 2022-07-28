function diagonalDifference(arr: number[][]): number {
  let sumpd: number=0;
  let sumsd: number=0;
  let total: number=0;

    for (let i=0 ; i< arr.length;i++){
      for (let j=0 ; j< arr[i].length;j++){
          //console.log(arr[i][j]);
          if(i==j){
            sumpd += arr[i][j];
          }
          if(i+j == arr.length-1){
            sumsd += arr[i][j];
          }
        }
      }
      total = Math.abs(sumpd-sumsd);
    return total;
}

function main() {
  const n: number = 3;

   let arr: number[][] = Array(n);
   arr = [[11,2,4],[4 ,5, 6],[10, 8, -12],];
    const result: number = diagonalDifference(arr);
  console.log('result',result);
}
main();

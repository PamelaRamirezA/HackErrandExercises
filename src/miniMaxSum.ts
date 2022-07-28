function miniMaxSum(arr: number[]): void {
  let minSum: number = 0;
  let maxSum: number = 0;
  let onlyMin: number[] = [];
  let onlyMax: number[] = [];
  onlyMin = arr.sort(function(x,y) {
    return x-y;
  });
  for (let i=0 ; i< 4;i++){
    minSum += onlyMin[i];
  }
  onlyMax = arr.sort(function(x,y) {
    return y-x;
  });
  for (let i=0 ; i< 4;i++){
    maxSum += onlyMin[i];
  }
  console.log(minSum + ' ' + maxSum);
}

function main() {
  const arr: number[] = [1,2,3,4,5];

  miniMaxSum(arr);
}

main();

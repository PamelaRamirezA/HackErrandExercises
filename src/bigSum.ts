function aVeryBigSum(ar: number[]): number {
  let sum: number=0;
    for (let i=0 ; i< ar.length;i++){
      sum += ar[i];
    }
    return sum;
}

function main() {
   const a: number[] = [1000000001,1000000002, 1000000003, 1000000004, 1000000005   ];

    const result: number = aVeryBigSum(a);
  console.log('result',result);
}
main();

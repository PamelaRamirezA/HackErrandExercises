function compareTriplets(a: number[], b: number[]): number[] {
  let sum: number[] = [];
  let alice: number =0;
  let bob: number =0;
    for (let i=0 ; i< a.length;i++){
      if (a[i]>b[i]){
        alice ++;
      } else if (b[i]>a[i]){
        bob ++;
      }
    }
    sum[0]=alice;
    sum[1]=bob;
    return sum;
}

function main() {
   const a: number[] = [17,28,30];
    const b: number[] = [99,16,8];

    const result: number[] = compareTriplets(a, b);
  console.log('result',result);
}

main();

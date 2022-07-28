function plusMinus(arr: number[]): void {
  let posVal: number=0;
  let negVal: number=0;
  let zerVal: number=0;
  let posRatio: number=0.000000;
  let zerRatio: number=0.000000;
  let negRatio: number=0.000000;

    for (let i=0 ; i< arr.length;i++){
      if(arr[i]==0){
        zerVal++
      }else if(arr[i]>0){
        posVal++
      }else if(arr[i]<0){
        negVal++
      }
    }
    posRatio = posVal/arr.length;
    zerRatio = zerVal/arr.length;
    negRatio = negVal/arr.length;
    console.log(posRatio.toPrecision(7));
    console.log(negRatio.toPrecision(7));
    console.log(zerRatio.toPrecision(7));

}

function main() {
   const a: number[] = [-4, 3, -9, 0, 4, 1];

    plusMinus(a);
}

main();

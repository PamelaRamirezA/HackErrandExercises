function birthdayCakeCandles(candles: number[]): number {
  let maxNumb : number = Math.max(...candles.map(o => o));
  let cont: number = 0;
  for (let i=0 ; i< candles.length;i++){
    if(candles[i]==maxNumb){
      cont++;
    }
  }
  return cont;
}

function main() {
  const candles: number[] = [3,2,1,3];

  const result: number = birthdayCakeCandles(candles);
console.log(result);
}

main();

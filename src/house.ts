function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
  let apples_position : number [] = [];
  let oranges_position : number [] = [];
  let apples_h : number = 0;
  let oranges_h : number = 0;

  for (let i=0; i<apples.length;i++){
    apples_position[i] = apples[i]+a;
    if(apples_position[i]>=s && apples_position[i]<=t){
      apples_h ++;
    }
  }
  for (let j=0; j<oranges.length;j++){
    oranges_position[j] = oranges[j]+b;
    if(oranges_position[j]>=s && oranges_position[j]<=t){
      oranges_h ++;
    }
  }
  console.log(apples_h);
  console.log(oranges_h);
}

function main() {
  const s: number = 7;
  const t: number = 10;
  const a: number = 4;
  const b: number = 12;
  const m: number = 3; //apples
  const n: number = 3; //oranges
  const apples: number[] = [2,3,-4];
  const oranges: number[] = [3,-2,-4];
  countApplesAndOranges(s, t, a, b, apples, oranges);
}
main();

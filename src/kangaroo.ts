function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  let kan1jump : number = x1 + v1;
  let kan2jump : number = x2 + v2;
  let cont : number =0;
  let success: boolean = false;

  if(kan1jump === kan2jump) {
    return "YES";
  }else if(x2>x1 && v2 > v1){
    return "NO";
  }else if(x2>x1 && v1 > v2){
    while (cont<2500) {
      cont ++;
      kan1jump += v1;
      kan2jump += v2;
      console.log('cont-kan1jump-kan2jump',cont,kan1jump,kan2jump);
      if (kan1jump === kan2jump) {
        success = true;
        break ;
      }
    }
    if(success) return "YES";
  }
  return "NO";
}

function main() {
  const x1: number = 2081;
  const v1: number = 8403;
  const x2: number = 9107;
  const v2: number = 8400;
  const result: string = kangaroo(x1, v1, x2, v2);

console.log(result);
}

main();

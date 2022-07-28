function staircase(n: number): void {
  // Write your code here
  for (let i=0 ; i< n;i++){
    console.log(' '.repeat(n-i-1)+'#'.repeat(i+1));
  }
}

function main() {
  const n: number = 6;

  staircase(n);
}

main();

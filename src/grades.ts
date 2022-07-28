function gradingStudents(grades: number[]): number[] {
  let newGrades: number [] = [];
  for (let i=0; i<grades.length;i++){
    if(grades[i]>=38){
      let multiple: number = grades[i]/5;
      multiple =Math.ceil(multiple)*5;
      let rest: number = multiple-grades[i];
      if(rest<3){
        newGrades[i]=multiple;
      }else {
        newGrades[i]=grades[i];
      }
    }else{
      newGrades[i]=grades[i];
    }
  }
  return newGrades;
}

function main() {
  let grades: number[] = [4,73,67,38,33];

  const result: number[] = gradingStudents(grades);
  console.log(result);
}
main();

function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }
  const score = 100;
  
  function getGrade(score) {

    if (score === 100) {
        console.log("grade A");
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  function hasPassingGrade(score){

    const grade = getGrade(score);
    return grade !== "F";

  }
  console.log(hasPassingGrade(92));  // true
  console.log(hasPassingGrade(57));  // false
  
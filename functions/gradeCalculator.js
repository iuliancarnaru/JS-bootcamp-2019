let gradeCalculator = function(studentScore, totalScore) {
  let score = (studentScore / totalScore) * 100;

  if (score >= 90) {
    return `You got an A, ${score}%`;
  }

  if (score >= 80 && score <= 89) {
    return `You got an B, ${score}%`;
  }

  if (score >= 70 && score <= 79) {
    return `You got an C, ${score}%`;
  }

  if (score >= 60 && score <= 69) {
    return `You got an D, ${score}%`;
  }

  if (score <= 59) {
    return `You got an F, ${score}%`;
  }
};
console.log(gradeCalculator(5, 20));
console.log(gradeCalculator(13, 20));
console.log(gradeCalculator(15, 20));
console.log(gradeCalculator(17, 20));
console.log(gradeCalculator(19, 20));

// Que 1:
// A teacher has finished grading their students' tests and needs your help to calculate the average score for the class.

// Complete the getAverage function which takes in an array of test scores and returns the average score.
// The average is calculated by adding up all the scores and dividing by the total number of scores.

// Example Code
// average = sum of all scores / total number of scores

// add up all the scores.

let avg = 0;
function getAverage(scores) {
  // By for of loop
  let sum = 0;
  for (const score of scores) {
    sum += score;
  }
  return sum / scores.length;
  //   let total = 0;
  //   let avg = 0;
  //   for (let i = 0; i < scores.length; i++) {
  //     total = total + scores[i];
  //   }
  //   console.log("total", total);
  //   const average = total / scores.length;
  //   console.log("average", average);
  //   return average;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

// Que 2:
// Step 2
// Now the teacher needs your help converting the student score to a letter grade.

// Complete the getGrade function that takes a number score as a parameter. Your function should return a string representing a letter grade based on the score.

// Here are the scores and their corresponding letter grades:

// Score Range	Grade
// 100	"A++"
// 90 - 99	"A"
// 80 - 89	"B"
// 70 - 79	"C"
// 60 - 69	"D"
// 0 - 59	"F"
// Tips

// Remember that you learned about conditional statements(if, else if, and else).
// Remember that you learned about comparison operators (>, <, >=, <=, ===).

function getGrade(score) {
  if (score === 100) {
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

  // if (score == 100) {
  //   return "A++";
  // }
  // if (score >= 90 && score <= 100) {
  //   return "A";
  // } else if (score >= 80 && score < 90) {
  //   return "B";
  // } else if (score >= 70 && score < 80) {
  //   return "C";
  // } else if (score >= 60 && score < 70) {
  //   return "D";
  // } else if (score >= 0 && score < 60) {
  //   return "F";
  // }
}

console.log(getGrade(100));
console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(66));
console.log(getGrade(56));

// Que 3
// The teacher is really happy with the program you have created so far. But now they want to have an easy way to check if a student has a passing grade. A passing grade is anything that is not an "F".

// Complete the function hasPassingGrade that takes a student score as a parameter. Your function should return true if the student has a passing grade and false if they do not.

// Tips

// Use the getGrade function to get the student's grade. Then check if the grade is passing or not.
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
  // if (score > 59) {
  //   return true;
  // } else {
  //   return false;
  // }
}
console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
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

// Step 3Passed
// The teacher is really happy with the program you have created so far. But now they want to have an easy way to check if a student has a passing grade. A passing grade is anything that is not an "F".

// Complete the function hasPassingGrade that takes a student score as a parameter. Your function should return true if the student has a passing grade and false if they do not.

// Tips

// Use the getGrade function to get the student's grade. Then check if the grade is passing or not.
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

// Step 4
// Now that the teacher has all of the information they need, they want to be able to message the student with the results.

// Complete the studentMsg function with totalScores and studentScore for parameters. The function should return a string representing a message to the student.

// If the student passed the course, the string should follow this format:

// Example Code
// Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.
// If the student failed the course, the string should follow this format:

// Example Code
// Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.
// Replace average-goes-here with the average of the total scores. Replace grade-goes-here with the student's grade.

// Tips

// Use the getAverage function to get the class average.
// Use the getGrade function to get the student's grade.
// Use string concatenation (+) to build the message.
// Be careful with the punctuation and spaces in the message.

function studentMsg(totalScores, studentScore) {
  let totalStuScore = getAverage(totalScores);
  let studentGrade = getGrade(studentScore);

  console.log("totalStuScore", totalStuScore);
  console.log("studentGrade", studentGrade);

  // if (totalStuScore && studentGrade !== "F") {
  if (studentGrade !== "F") {
    return `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(
      studentScore
    )}. You passed the course.`;
  } else {
    return `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(
      studentScore
    )}. You failed the course.`;
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

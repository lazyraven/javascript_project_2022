var arrayQuestionList = [
  {
    id: 1,
    questionNo: 'Question 1:',
    questionPara: 'Reverse element',
    questionRoute: 'reverse-elejs',
  },
  {
    id: 2,
    questionNo: 'Question 2:',
    questionPara:
      "Duplicacy element remove from list/same element don't show two times",
    questionRoute: 'duplicacy-elejs',
  },
  {
    id: 3,
    questionNo: 'Question 3:',
    questionPara: 'Palindrome element',
    questionRoute: 'palindrome-elejs',
  },
  {
    id: 4,
    questionNo: 'Question 4:',
    questionPara: 'Sum of array elements',
  },
  {
    id: 5,
    questionNo: 'Question 5:',
    questionPara: 'Odd/Even elements of array elements',
  },
  {
    id: 6,
    questionNo: 'Question 6:',
    questionPara: 'Multiply elements of array with return same length',
  },
];

// First Type
var str1 = '';
arrayQuestionList.forEach((list) => {
  str1 = `${list.questionNo} ${list.questionPara}`;
  var ul = document.getElementById('questionList');
  var li = document.createElement('li');

  li.appendChild(document.createTextNode(str1));
  ul.appendChild(li);

  li.addEventListener('click', function (event) {
    // window.location.assign(
    //   `/questionsPractice/questionPractice.html/${list.id}`
    // );
    if (list.id == 1) {
      window.location.href = 'js1.js';
    } else if (list.id == 2) {
      window.location.href = 'js2.js';
    } else if (list.id == 3) {
      window.location.href = 'js3.js';
    } else if (list.id == 4) {
      window.location.href = 'js4.js';
    } else if (list.id == 5) {
      window.location.href = 'js5.js';
    } else if (list.id == 6) {
      window.location.href = 'js6.js';
    } else {
      console.log("route didn't find");
    }
  });
});

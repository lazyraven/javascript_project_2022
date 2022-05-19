
var arrayQuestionList = [
    { questionNo: "Question 1:", questionPara: "Reverse element" },
    { questionNo: "Question 2:", questionPara: "Duplicacy element remove from list/same element don't show two times" },
    { questionNo: "Question 3:", questionPara: "Palindrome element" },
    { questionNo: "Question 4:", questionPara: "Sum of array elements" },
    { questionNo: "Question 5:", questionPara: "Odd/Even elements of array elements" },
    { questionNo: "Question 6:", questionPara: "Multiply elements of array with return same length" },
]


// First Type
var str1 = "";
arrayQuestionList.forEach((list) => {
    str1 = `${list.questionNo} ${list.questionPara}`;
    var ul = document.getElementById("questionList");
    var li = document.createElement("li");
    var itemDone = "HII HIII"

    console.log(li);
    li.appendChild(document.createTextNode(str1));
    ul.appendChild(li);

    // li.style.cursor = pointer;
    li.addEventListener("click", function () {
        console.log("RENDER DATA ")
    });
})


// Second Type
// var str1 = "";
// arrayQuestionList.forEach((list) => {
//     str1 = `${list.questionNo} ${list.questionPara}`;
//     // var ul = document.getElementById("questionList");
//     var ul = document.querySelector("#questionList");
//     // const listItems = ul.getElementsByTagName("li");
//     const listItems = document.getElementsByTagName("li");

//     const nextLiContent = document.createElement("li")
//     nextLiContent.textContent = str1

//     ul.appendChild(nextLiContent)
//     console.log(listItems)
// })



